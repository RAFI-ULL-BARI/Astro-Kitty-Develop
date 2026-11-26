// The camera look on high quality: soft contact shadows where things meet (ambient occlusion),
// a gentle glow around bright lights, and a touch of film grain and vignette, like a real camera.
import * as THREE from 'three'
import {EffectComposer} from 'three/addons/postprocessing/EffectComposer.js'
import {RenderPass} from 'three/addons/postprocessing/RenderPass.js'
import {GTAOPass} from 'three/addons/postprocessing/GTAOPass.js'
import {UnrealBloomPass} from 'three/addons/postprocessing/UnrealBloomPass.js'
import {ShaderPass} from 'three/addons/postprocessing/ShaderPass.js'
import {OutputPass} from 'three/addons/postprocessing/OutputPass.js'

const FilmShader = {
  uniforms: {tDiffuse: {value: null}, time: {value: 0}, grain: {value: 0.03}, vignette: {value: 0.55}},
  vertexShader: /* glsl */`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
  fragmentShader: /* glsl */`
    uniform sampler2D tDiffuse;
    uniform float time;
    uniform float grain;
    uniform float vignette;
    varying vec2 vUv;
    float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
    void main() {
      vec4 c = texture2D(tDiffuse, vUv);
      vec2 d = vUv - 0.5;
      c.rgb *= 1.0 - dot(d, d) * vignette;
      float g = hash(floor(vUv * vec2(1920.0, 1080.0)) + fract(time * 7.13) * 113.0) - 0.5;
      c.rgb += g * grain * (0.2 + c.rgb);
      gl_FragColor = c;
    }`,
}

export function makeLook(renderer, scene, camera, {ao = true} = {}) {
  const size = renderer.getDrawingBufferSize(new THREE.Vector2())
  const target = new THREE.WebGLRenderTarget(size.x, size.y, {type: THREE.HalfFloatType, samples: 4})
  const composer = new EffectComposer(renderer, target)
  composer.addPass(new RenderPass(scene, camera))
  let gtao = null
  if (ao) {
    gtao = new GTAOPass(scene, camera, size.x, size.y)
    gtao.output = GTAOPass.OUTPUT.Default
    gtao.blendIntensity = 0.9
    gtao.updateGtaoMaterial({radius: 0.7, distanceExponent: 1.4, thickness: 1.5, scale: 1.1, samples: 12})
    gtao.updatePdMaterial({lumaPhi: 10, depthPhi: 2, normalPhi: 3, radius: 5, rings: 2, samples: 12})
    // Glass, fading roofs, dust, sprites and the sky are left out of the shadow pass.
    gtao._overrideVisibility = function () {
      const cache = this._visibilityCache
      this.scene.traverse(o => {
        if (!o.visible) return
        const m = o.material
        const seeThrough = o.isMesh && m && !Array.isArray(m) && m.transparent && m.opacity < 0.8
        if (o.isPoints || o.isLine || o.isSprite || seeThrough || o.userData.noAO) { o.visible = false; cache.push(o) }
      })
    }
    composer.addPass(gtao)
  }
  const bloom = new UnrealBloomPass(new THREE.Vector2(Math.max(1, size.x / 4), Math.max(1, size.y / 4)), 0.3, 0.45, 0.93)
  composer.addPass(bloom)
  const film = new ShaderPass(FilmShader)
  composer.addPass(film)
  composer.addPass(new OutputPass())
  return {
    composer, bloom, gtao, film,
    setSize(w, h) { composer.setSize(w, h); gtao?.setSize(w * renderer.getPixelRatio(), h * renderer.getPixelRatio()) },
    render(time) { film.uniforms.time.value = time; composer.render() },
    dispose() { composer.dispose(); gtao?.dispose?.(); target.dispose() },
  }
}
