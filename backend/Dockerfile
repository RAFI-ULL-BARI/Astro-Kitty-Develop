# Build from the repository root:  docker build -f backend/Dockerfile -t astro-kitty .
FROM python:3.12-slim
WORKDIR /app
COPY backend/requirements.txt backend/requirements.txt
RUN pip install --no-cache-dir -r backend/requirements.txt
COPY backend backend
COPY dist dist
WORKDIR /app/backend
ENV PORT=8000
EXPOSE 8000
CMD ["sh", "-c", "uvicorn astrokitty.api:app --host 0.0.0.0 --port ${PORT}"]
