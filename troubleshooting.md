# Troubleshooting Guide

Common issues and solutions for Kryvea.

## Port 443 is already in use

**Error:** `bind: address already in use`

**Fix:**

```bash
# Check what's using port 443
sudo ss -tulpn | grep 443

If something else is already listening on port 443, either stop it or change the published port in `docker-compose.yml`:

```yaml
services:
  web:
    ports:
      - "8443:443"
```

## Startup fails or the database is not ready

**Check container status:**

```bash
docker compose ps
docker compose logs -f
```

Common causes:

- the database container is still starting up
- a previous failed build left stale assets
- the host cannot bind to the configured ports

**Recovery:**

```bash
docker compose down -v
docker compose up --build -d
```

## Self-signed certificate warning in the browser

This is expected for the default local deployment.

**Fix:**

- accept the browser warning for local development
- replace the default Nginx certificate with your own certificate in production

Example certificate mount:

```yaml
web:
  volumes:
    - ./ssl/your-domain.key:/etc/nginx/ssl/your-domain.key:ro
    - ./ssl/your-domain.pem:/etc/nginx/ssl/your-domain.pem:ro
```

## Admin login is not working

Verify the environment variables used by the backend:

```yaml
app:
  environment:
    - KRYVEA_ADMIN_USER=kryvea
    - KRYVEA_ADMIN_PASS=kryveapassword
```

Check the application logs if the credentials do not match what you expect:

```bash
docker compose logs -f app
```

## Large uploads fail

The backend applies a request-size limit based on `KRYVEA_BODY_LIMIT_MB`.

Increase it in `docker-compose.yml`:

```yaml
app:
  environment:
    - KRYVEA_BODY_LIMIT_MB=2000
```

Then restart the app:

```bash
docker compose up -d --no-deps --build app
```

## Report generation or import issues

If a template or import fails, start by checking the backend logs:

```bash
docker compose logs -f app
```

Typical issues include:

- malformed DOCX reports
- invalid vulnerability import files
- environment mismatch between `KRYVEA_PG_DSN` and the running PostgreSQL container

## PostgreSQL connection problems

If the app cannot reach the database, verify the DSN and container status:

```bash
docker compose logs -f pg
docker compose exec pg psql -U kryvea -d kryvea -c "select 1;"
```

The DSN should look like:

```yaml
KRYVEA_PG_DSN=postgres://kryvea:kryveapass@kryvea-pg:5432/kryvea?sslmode=disable
```

## Support channels

- [GitHub Discussions](https://github.com/Kryvea/Kryvea/discussions) - Ask questions
- [GitHub Issues](https://github.com/Kryvea/Kryvea/issues) - Report bugs
- [Installation Guide](installation.md) - Clean setup steps
- [Configuration Guide](configuration.md) - Environment variable reference

---

See also: [Installation](installation.md) | [Configuration](configuration.md) | [Usage Guide](usage.md)
