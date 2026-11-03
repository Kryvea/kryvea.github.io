# Installation Guide

This guide covers the current Docker-based installation flow for Kryvea.

## Prerequisites

- Docker and Docker Compose installed
- Git available on the system
- Port 443 free on the host, or change the published port in `docker-compose.yml`

## Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/Kryvea/Kryvea.git
cd Kryvea
```

### 2. Start the stack

```bash
docker compose up --build -d
```

This builds and runs the current container layout:

- `kryvea-pg`: PostgreSQL 16
- `kryvea-migrate`: database migrations
- `kryvea-app`: Go backend and API server
- `kryvea-web`: Nginx frontend

### 3. Wait for startup

The first boot takes a few minutes while the database initializes and the app builds.

Check status:

```bash
docker compose ps
docker compose logs -f
```

The app is ready once the backend and web container are healthy and the frontend is served via HTTPS on `https://localhost`.

### 4. Log in

Open:

```text
https://localhost
```

Accept the self-signed certificate warning in development mode.

Default credentials:

- Username: `kryvea`
- Password: `kryveapassword`

## Optional sample data

To seed example data:

```bash
python3 scripts/populate_db/main.py
```

## Production notes

Before exposing the stack publicly:

- change the default PostgreSQL credentials in `docker-compose.yml`
- change `KRYVEA_ADMIN_PASS` in the app environment
- use a real certificate instead of the default self-signed certificate

Example overrides in `docker-compose.yml`:

```yaml
services:
  pg:
    environment:
      - POSTGRES_USER=kryvea
      - POSTGRES_PASSWORD=change-me

  app:
    environment:
      - KRYVEA_PG_DSN=postgres://kryvea:change-me@kryvea-pg:5432/kryvea?sslmode=disable
      - KRYVEA_ADMIN_USER=kryvea
      - KRYVEA_ADMIN_PASS=change-me
```

## Updating Kryvea

```bash
git pull origin main
docker compose down
docker compose up --build -d
```

## Uninstallation

To remove the running stack and local data volumes:

```bash
docker compose down -v
```

If you also want to remove locally built images:

```bash
docker rmi kryvea-app kryvea-web kryvea-migrate
```

## Next steps

- [Usage Guide](usage.md) - Learn how to use Kryvea
- [Configuration](configuration.md) - Advanced runtime settings
- [Troubleshooting](troubleshooting.md) - Common issues and fixes
