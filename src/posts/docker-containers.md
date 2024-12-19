---
title: "Introducción a Docker y los Contenedores con Docker Compose"
excerpt: "Descubre cómo usar Docker y Docker Compose para gestionar aplicaciones en contenedores de manera sencilla y eficiente."
coverImage: "/assets/blog/hello-world/cover.jpg"
date: "2024-12-19T08:00:00.000Z"
author:
  name: Tim Neutkens
  picture: "/assets/blog/authors/tim.jpeg"
ogImage:
  url: "/assets/blog/hello-world/cover.jpg"
---

## ¿Qué es Docker?

Docker es una plataforma de contenedores que permite desarrollar, implementar y ejecutar aplicaciones en entornos aislados llamados **contenedores**. Estos contenedores son ligeros y portátiles, lo que permite trasladarlos fácilmente entre diferentes entornos.

---

## ¿Qué es Docker Compose?

**Docker Compose** es una herramienta para definir y ejecutar aplicaciones multicontenedor. Con un solo archivo `docker-compose.yml`, puedes configurar servicios, redes y volúmenes, y levantar toda tu aplicación con un solo comando.

---

## Ejemplo de archivo `docker-compose.yml`

A continuación se muestra un ejemplo básico de un archivo `docker-compose.yml` para una aplicación web con una base de datos PostgreSQL:

```yaml
version: '3.8'

services:
  web:
    image: node:14
    working_dir: /app
    volumes:
      - .:/app
    ports:
      - "3000:3000"
    command: "npm start"
    environment:
      - NODE_ENV=development

  db:
    image: postgres:13
    volumes:
      - postgres_data:/var/lib/postgresql/data
    environment:
      POSTGRES_USER: myuser
      POSTGRES_PASSWORD: mypassword
      POSTGRES_DB: mydatabase

volumes:
  postgres_data:
```
