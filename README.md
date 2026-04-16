# Prueba Técnica — Desarrollador Junior Full Stack

## Objetivo

Evaluar tu capacidad para leer código existente, identificar y corregir bugs, implementar un requerimiento nuevo y comunicar tus decisiones técnicas con claridad.

**No se trata de hacer algo perfecto, sino de demostrar cómo piensas y cómo trabajas.**

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
