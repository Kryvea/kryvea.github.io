# Configuration Guide

Advanced configuration options for Kryvea deployment and customization.

## Environment Variables

### Backend Configuration

Configure via `docker-compose.yml` or environment variables:

```yaml
KRYVEA_ADDR: "0.0.0.0:8080"
KRYVEA_ROOT_PATH: "/"
KRYVEA_PG_DSN: "postgres://kryvea:kryveapass@kryvea-pg:5432/kryvea?sslmode=disable"
KRYVEA_FILES_DIR: "/var/lib/kryvea/files"
KRYVEA_ADMIN_USER: kryvea
KRYVEA_ADMIN_PASS: kryveapassword
```

### Database Configuration

```yaml
services:
  pg:
    image: postgres:16-alpine
    environment:
      - POSTGRES_USER=kryvea
      - POSTGRES_PASSWORD=kryveapass
      - POSTGRES_DB=kryvea
```

In production, change the credentials and update both `POSTGRES_PASSWORD` and `KRYVEA_PG_DSN` to match.

## Port and TLS configuration

The frontend runs through Nginx and exposes port 443 by default:

```yaml
services:
  web:
    ports:
      - "1337:443" # Custom external port
```

For custom certificates, mount your own files into the Nginx container:

```yaml
web:
  [...]
  volumes:
      - ./.data/ssl:/etc/nginx/ssl
```

## Reverse proxy example

If running behind a reverse proxy (Nginx, Apache):

```nginx
location /kryvea {
    proxy_pass https://kryvea-web;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
}
```

## Log monitoring

```yaml
KRYVEA_LOG_DIRECTORY: "/var/log/kryvea/"
KRYVEA_LOG_MAX_SIZE_MB: 10
KRYVEA_LOG_MAX_BACKUPS: 5
KRYVEA_LOG_MAX_AGE_DAYS: 0
KRYVEA_LOG_COMPRESS: true
```

View runtime logs:

```bash
docker compose logs -f app  # backend
docker compose logs -f web  # frontend
```

Inspect the filesystem log output from the container:

```bash
docker exec -it kryvea-app tail -f /var/log/kryvea/app.log
```

## Upload size tuning

The request body limit is controlled by `KRYVEA_BODY_LIMIT_MB` and defaults to `1000` MB. Increase it if you need large imports or attachments:

```yaml
app:
  environment:
    [...]
    - KRYVEA_BODY_LIMIT_MB=2000
```

---

See also: [Installation Guide](installation.md) | [Troubleshooting](troubleshooting.md)
