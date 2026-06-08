# NT548 DevOps Lab 3

## Yêu cầu
- Node.js >= 20
- Docker
- kubectl + k3s (trên EC2)

## Chạy local

```bash
npm install
node index.js
# Truy cập: http://localhost:3000
```

## Chạy với Docker

```bash
docker build -t nt548-lab3 .
docker run -p 3000:3000 nt548-lab3
# Truy cập: http://localhost:3000
```

## Chạy test

```bash
npm test
```

## CI/CD Pipeline (GitHub Actions)

Push code lên nhánh `main` sẽ tự động:
1. Build & test
2. Phân tích code với SonarQube
3. Quét bảo mật với Trivy
4. Build & push Docker image lên Docker Hub
5. Deploy lên k3s (EC2)

## Truy cập app trên EC2

```
http://<EC2_PUBLIC_IP>:30000
```

## GitHub Secrets cần thiết

| Secret | Mô tả |
|---|---|
| `DOCKER_USERNAME` | Docker Hub username |
| `DOCKER_PASSWORD` | Docker Hub access token |
| `SONAR_TOKEN` | Token từ SonarCloud |
| `KUBECONFIG` | Nội dung file k3s.yaml (đã đổi IP) |