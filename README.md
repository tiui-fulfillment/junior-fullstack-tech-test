# Prueba Técnica — Desarrollador Junior Full Stack

## Objetivo

Evaluar tu capacidad para leer código existente, identificar y corregir bugs, implementar un requerimiento nuevo y comunicar tus decisiones técnicas con claridad.

**No se trata de hacer algo perfecto, sino de demostrar cómo piensas y cómo trabajas.**

---

## Variante Soporte / QA Funcional

Esta variante vive en una rama separada de la prueba junior y usa la misma app como base para evaluar observación funcional, documentación y criterio de soporte sin pedir lectura de código.

### Tareas sugeridas para candidatos

1. Verifica si el filtro por estado muestra exactamente los pedidos esperados.
2. Revisa si las acciones visibles en cada fila son coherentes con el estado que muestra el pedido.
3. Propón una mejora de negocio para hacer más evidente cuándo un pedido tiene incidencia.

### Restricciones para esta variante

- Todo debe poder revisarse desde navegador y una URL pública.
- No hace falta inspeccionar el backend ni leer el código para detectar los casos.
- La meta es documentar hallazgos, impacto y pasos de reproducción con claridad.

---

## Tecnologías

- **Frontend:** React + TypeScript + Vite
- **Backend:** Node.js + Express + TypeScript
- **Datos:** Mock en memoria (sin base de datos)

---

## Estructura del proyecto

```
├── backend/      # API REST con Express
└── frontend/     # Aplicación React
```

---

## Instalación y ejecución

### Requisitos previos

- Node.js >= 18
- npm >= 9

### 1. Backend

```bash
cd backend
npm install
npm run dev
```

El servidor queda disponible en `http://localhost:3000`.

**Endpoints disponibles:**

| Método  | Ruta                         | Descripción                       |
|---------|------------------------------|-----------------------------------|
| GET     | `/api/orders`                | Lista todos los pedidos           |
| GET     | `/api/orders?status=pending` | Filtra pedidos por estado         |
| GET     | `/api/orders/:id`            | Obtiene un pedido por ID          |
| PATCH   | `/api/orders/:id/pay`        | Marca un pedido como pagado       |

### 2. Frontend

En otra terminal:

```bash
cd frontend
npm install
npm run dev
```

La aplicación queda disponible en `http://localhost:5173`.

> Asegúrate de que el backend esté corriendo antes de abrir el frontend.

---

## Lo que debes hacer

### 🐛 Corregir 3 bugs

El proyecto tiene **3 bugs sembrados deliberadamente**. Encuéntralos, corrígelos y explica cada uno en `RESPUESTAS.md`.

Los bugs afectan las siguientes áreas:

1. El filtro por estado no funciona correctamente
2. El backend permite una operación que debería rechazar
3. La interfaz rompe con ciertos datos

### ✨ Implementar 1 requerimiento nuevo

Mostrar un **badge o indicador visual** en la tabla cuando el campo `incidentReported` de un pedido sea `true`. Debe ser claramente visible para el usuario.

---

## Entregable

1. Haz un fork de este repositorio (o trabaja en una rama nueva)
2. Realiza tus cambios
3. Completa el archivo `RESPUESTAS.md`
4. Abre un **Pull Request** con tus cambios

---

## Duración sugerida

⏱️ **75 minutos**

No es necesario que completes todo. Prioriza según tu criterio y explica qué dejaste pendiente y por qué.

---

## Criterios de evaluación

| Criterio                     | Descripción                                                        |
|------------------------------|--------------------------------------------------------------------|
| Comprensión del problema     | ¿Entendiste qué hace la app y dónde están los problemas?           |
| Calidad de la solución       | ¿La corrección es limpia, mínima y correcta?                       |
| Criterio técnico             | ¿Tomaste buenas decisiones sin sobrediseñar?                       |
| Claridad al explicar         | ¿Tus respuestas son concretas y fáciles de entender?               |
| Robustez básica              | ¿El código maneja casos borde o situaciones inesperadas?           |

---

## Restricciones

- ❌ No rehagas la aplicación desde cero
- ❌ No agregues librerías innecesarias
- ✅ Trabaja dentro del código existente
- ✅ Si usas IA, decláralo en `RESPUESTAS.md`

---

## Despliegue en Google Cloud

El proyecto incluye configuración lista para desplegar **backend y frontend en Cloud Run** usando **Cloud Build** como pipeline CI/CD.

### Arquitectura

```
Cloud Build trigger (push a rama)
  ├── build + push  →  backend  image  →  Cloud Run (backend)
  └── build + push  →  frontend image  →  Cloud Run (frontend, nginx)
```

### Archivos relevantes

| Archivo | Descripción |
|---|---|
| `cloudbuild.yaml` | Pipeline completo de Cloud Build |
| `backend/Dockerfile` | Imagen Node.js para el backend |
| `frontend/Dockerfile` | Imagen nginx con build estático de Vite |
| `frontend/nginx.conf` | Configuración nginx para SPA |
| `backend/.env.example` | Variables de entorno del backend |
| `frontend/.env.example` | Variables de entorno del frontend |

### Variables de entorno

| Variable | Descripción |
|---|---|
| `PORT` | Puerto del servidor (Cloud Run lo inyecta automáticamente) |
| `CORS_ORIGIN` | URL pública del frontend (ej. `https://frontend-xyz.run.app`) |
| `VITE_API_URL` | URL pública del backend, inyectada en build del frontend (ej. `https://backend-xyz.run.app/api`) |

### Pasos de configuración inicial (una sola vez)

#### 1. Requisitos previos

```bash
# Asegúrate de tener gcloud CLI configurado y autenticado
gcloud auth login
gcloud config set project TU_PROJECT_ID
```

#### 2. Habilitar APIs necesarias

```bash
gcloud services enable \
  cloudbuild.googleapis.com \
  run.googleapis.com \
  artifactregistry.googleapis.com
```

#### 3. Crear repositorio en Artifact Registry

```bash
gcloud artifacts repositories create cloud-run-source-deploy \
  --repository-format=docker \
  --location=us-central1 \
  --description="Imágenes para Cloud Run"
```

#### 4. Dar permisos a la cuenta de servicio de Cloud Build

```bash
PROJECT_NUMBER=$(gcloud projects describe TU_PROJECT_ID --format='value(projectNumber)')

# Permiso para desplegar en Cloud Run
gcloud projects add-iam-policy-binding TU_PROJECT_ID \
  --member="serviceAccount:${PROJECT_NUMBER}@cloudbuild.gserviceaccount.com" \
  --role="roles/run.admin"

# Permiso para actuar como cuenta de servicio de Cloud Run
gcloud projects add-iam-policy-binding TU_PROJECT_ID \
  --member="serviceAccount:${PROJECT_NUMBER}@cloudbuild.gserviceaccount.com" \
  --role="roles/iam.serviceAccountUser"
```

#### 5. Crear el trigger en Cloud Build

En [Google Cloud Console → Cloud Build → Triggers](https://console.cloud.google.com/cloud-build/triggers):

1. Haz clic en **Crear trigger**
2. Conecta el repositorio GitHub (`tiui-fulfillment/junior-fullstack-tech-test`)
3. Configura el evento (ej. push a `main`)
4. En **Configuración**, selecciona **Archivo de configuración de Cloud Build** → `cloudbuild.yaml`
5. En **Sustituciones**, agrega:

| Variable | Valor |
|---|---|
| `_REGION` | `us-central1` |
| `_BACKEND_SERVICE` | `backend` |
| `_FRONTEND_SERVICE` | `frontend` |
| `_BACKEND_IMAGE` | `us-central1-docker.pkg.dev/TU_PROJECT_ID/cloud-run-source-deploy/backend` |
| `_FRONTEND_IMAGE` | `us-central1-docker.pkg.dev/TU_PROJECT_ID/cloud-run-source-deploy/frontend` |
| `_FRONTEND_PUBLIC_API_URL` | *(URL del backend — ver paso 6)* |
| `_CORS_ORIGIN` | *(URL del frontend — ver paso 6)* |

#### 6. Primer despliegue y obtención de URLs

La primera vez, ejecuta el pipeline **sin** `_FRONTEND_PUBLIC_API_URL` y `_CORS_ORIGIN` para obtener las URLs de Cloud Run:

```bash
# Deploy manual inicial (opcional, para obtener URLs)
gcloud run deploy backend \
  --image=us-central1-docker.pkg.dev/TU_PROJECT_ID/cloud-run-source-deploy/backend \
  --region=us-central1 --allow-unauthenticated --port=3000

gcloud run deploy frontend \
  --image=us-central1-docker.pkg.dev/TU_PROJECT_ID/cloud-run-source-deploy/frontend \
  --region=us-central1 --allow-unauthenticated --port=8080
```

Obtén las URLs asignadas:

```bash
gcloud run services describe backend --region=us-central1 --format='value(status.url)'
gcloud run services describe frontend --region=us-central1 --format='value(status.url)'
```

Luego **actualiza las sustituciones** del trigger con las URLs reales y vuelve a ejecutarlo.

### Verificación

```bash
# Verificar que el backend responde
curl https://TU_BACKEND_URL.run.app/api/orders

# Verificar que el frontend carga
curl -I https://TU_FRONTEND_URL.run.app
```

### Cómo funciona el pipeline

1. **Cloud Build** detecta un push al repositorio
2. Construye la imagen Docker del **backend** (Node.js, TypeScript compilado)
3. Construye la imagen Docker del **frontend** (Vite build + nginx), inyectando `VITE_API_URL` en build time
4. Sube ambas imágenes a **Artifact Registry**
5. Despliega **backend** en Cloud Run con la variable `CORS_ORIGIN`
6. Despliega **frontend** en Cloud Run (nginx sirviendo assets estáticos)
7. Ambos servicios quedan con URL pública accesible sin autenticación
