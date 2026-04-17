# RESPUESTAS

> Completa este archivo como parte de tu entregable. Sé concreto/a y directo/a. No hay respuestas perfectas.

---

## 1. ¿Qué bugs encontraste?

_Describe cada bug que identificaste: dónde estaba, qué comportamiento causaba y por qué era un problema._

**Bug 1:**
Back-end

El filtrado dependía de una comparación de strings que podía fallar si el valor recibido tenía diferencias de formato (mayúsculas/minúsculas).

**Bug 2:**
Back-end

El endpoint permitía marcar como pagado pedidos que no estaban en estado pending, lo cual rompe la lógica de negocio.

**Bug 3:**
Front-end

El campo customerName podía ser null, lo que generaba un error al intentar aplicar toUpperCase().

---

## 2. ¿Qué corregiste?

_Explica cómo solucionaste cada bug. Puedes referenciar archivos y líneas de código._

**Corrección Bug 1:**

Se normalizó la comparación utilizando toLowerCase() en ambos valores para asegurar consistencia.

**Corrección Bug 2:**

Se agregó una validación en el endpoint para permitir la operación solo cuando el estado es pending, devolviendo un error en caso contrario.

**Corrección Bug 3:**

Se utilizó optional chaining con un valor fallback ('SIN NOMBRE') para evitar errores en tiempo de ejecución.

---

## 3. ¿Qué no alcanzaste a resolver?

_Sé honesto/a. Si no llegaste a algo, explica qué era y por qué priorizaste otras cosas._

Llegue bien a tiempo y tambien agregue algunos estilos visuales, para mejorar la experiencia del usuario. Tambien renombre un archivos en el back, ya que daba a confusion. El archivo orders y orders, uno lo cambie a ordersRoutes.
---

## 4. ¿Qué supuestos hiciste?

_¿Tomaste alguna decisión ante algo que no estaba del todo claro? Explícala._

Asumí que los valores de status deberían estar controlados (por ejemplo, mediante un select en el frontend o validaciones en backend), ya que no deberían depender de input manual libre.
---

## 5. ¿Qué probarías después?

_Si tuvieras más tiempo, ¿qué mejorarías, agregarías o validarías?_

Depende, pero podriamos agregar un dni o alguna informacion mas, aparte de validar que exista el nombre antes de crear un registro, ya que hay un cliente que pago y no sabemos el nombre por ejemplo, es cuestion de revisar y mejorar cada feature.

---

## 6. ¿Usaste IA? ¿Cómo?

Sí, utilicé ChatGPT como apoyo para validar decisiones y acelerar el debugging.

_Si usaste herramientas de IA (ChatGPT, Copilot, etc.), descríbelo aquí. No penaliza; queremos entender cómo las aprovechas._
