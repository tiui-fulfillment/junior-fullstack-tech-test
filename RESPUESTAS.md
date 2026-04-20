# RESPUESTAS

> Completa este archivo como parte de tu entregable. Sé concreto/a y directo/a. No hay respuestas perfectas.

---

## 1. ¿Qué bugs encontraste?

**Bug 1: Filtro por estado incorrecto**

El filtro de pedidos en el frontend estaba usando una condición incorrecta `!==` en lugar de `===`, lo que hacía que se mostraran pedidos que no correspondían al estado seleccionado.

---

**Bug 2: Falta de validación en el backend al marcar como pagado**

El endpoint permitía marcar cualquier pedido como pagado sin validar su estado actual, lo que generaba transiciones inválidas (por ejemplo, pedidos cancelados pasando a pagados).

---

**Bug 3: Error en la UI con customerName null**

El modelo permitía que `customerName` fuera null, pero la interfaz asumía que siempre era string, lo que provocaba errores en runtime al intentar usar `toUpperCase()`.


---

## 2. ¿Qué corregiste?

_Explica cómo solucionaste cada bug. Puedes referenciar archivos y líneas de código._

**Corrección Bug 1:**

Corregi el filtro en el frontend cambiando la condición a `===` para mostrar correctamente los pedidos según el estado seleccionado.

---

**Corrección Bug 2:**

Agregue una validación en el backend para permitir marcar como pagado solo los pedidos en estado `pending`.

---

**Corrección Bug 3:**

Agregue una validación en el frontend para manejar el caso de `customerName` null y evitar errores en la interfaz.

---

## 3. ¿Qué no alcanzaste a resolver?

_Sé honesto/a. Si no llegaste a algo, explica qué era y por qué priorizaste otras cosas._

No quedaron problemas sin resolver. Corregi los bugs principales y logre implementar el requerimiento solicitado.

---

## 4. ¿Qué supuestos hiciste?

_¿Tomaste alguna decisión ante algo que no estaba del todo claro? Explícala._

Asumi que el flujo de negocio correcto es que solo los pedidos en estado `pending` pueden ser marcados como `paid`.

También asumi que `customerName` puede ser null y debe manejarse en la UI para evitar errores.

---

## 5. ¿Qué probarías después?

_Si tuvieras más tiempo, ¿qué mejorarías, agregarías o validarías?_

Probaría casos borde, como:
* pedidos con datos incompletos
* estados inválidos en el backend
* comportamiento del filtro con valores inesperados

---

## 6. ¿Usaste IA? ¿Cómo?

_Si usaste herramientas de IA (ChatGPT, Copilot, etc.), descríbelo aquí. No penaliza; queremos entender cómo las aprovechas._

Sí, utilicé IA como apoyo puntual durante el desarrollo, principalmente para validar dudas específicas y confirmar algunas decisiones técnicas. La implementación y resolución de los problemas la realicé yo, utilizando la IA solo como una herramienta de consulta en momentos concretos.
