# RESPUESTAS

> Completa este archivo como parte de tu entregable. Sé concreto/a y directo/a. No hay respuestas perfectas.

---

## 1. ¿Qué bugs encontraste?

_Describe cada bug que identificaste: dónde estaba, qué comportamiento causaba y por qué era un problema._

**Bug 1: El primer problema de la aplicación es que directamente no cargaba al intentar acceder al sistema. Se lograba apreciar que la página si iniciaba, pero no se mostraba ningún contenido. Primero hice un fetch desde la bd para ver el contenido de los datos. Ahí me di cuenta de que habia un registro que tenía el valor de nombre vacío. Al inspeccionar la parte del código donde se renderizaba este apartado, logré identificar la línea del problema.**

**Bug 2: El segundo problema es que el backend permitía pagar cualquier operación, sin importar que esta ya estuviera pagada o directamente cancelada. Esto en una situación real podría causar cobros erroneos a los usuarios finales. Para identificarlo, probé el funcionamiento de todas las rutas desde la aplicación Postman. En cuanto probé la ruta PATCH, fue cuando me percaté del problema.**

**Bug 3: El tercer problema fue que el filtro no funcionaba correctamente, ya que mostraba los pedidos contrarios a los que el filtro debía de estar buscando. Para esto, primero revisé a nivel de código si el botón funcionaba correctamente. Después, en la pantalla de network, revisé como funcionaban las peticiones desde el navegador. Ya que solo hace una desde el inicio, dedují que no utilizaba la ruta proporcionada por el backend para filtrar los datos, si no que lo hacía localmente con la información del primer fetch. Fue ahí cuando revisé la forma en que eran filtrados los datos desde el filtro e identifiqué el problema.**

---

## 2. ¿Qué corregiste?

_Explica cómo solucionaste cada bug. Puedes referenciar archivos y líneas de código._

**Corrección Bug 1: El sistema no esta protegido ante valores nulos, siempre expectando que todas las columnas tengan información. Aunque esto puede ser un error desde como esta formulada la interfaz, ya que no espera valores nulos, simplemente lo arreglé con un ternario.**

**Corrección Bug 2: Para esto, solo agregué dos condicionales más que retornan un mensaje dependiendo del estado del pedido, haciendo así que solo sea posible pagar pedidos pendientes. Aunque el error es más especifico y sirve para debugging, no es muy escalable si se añaden más tipos de estatus, pero decidí dejarlo así de momento**

**Corrección Bug 3: El sistema filtraba todos los elementos contrarios al valor de estatus (orders.filter((o) => o.status !== selectedStatus)). Solo modifiqué el comparador para que ahora sea a los valores iguales a los del valor de estatus**

---

## 3. ¿Qué no alcanzaste a resolver?

_Sé honesto/a. Si no llegaste a algo, explica qué era y por qué priorizaste otras cosas._

---

## 4. ¿Qué supuestos hiciste?

_¿Tomaste alguna decisión ante algo que no estaba del todo claro? Explícala._

Al principio asumí que el error de filtrado provenía del funcionamiento de la ruta del backend, lo que hizo que me tardara un poco más del tiempo necesario en encontrar el error

---

## 5. ¿Qué probarías después?

_Si tuvieras más tiempo, ¿qué mejorarías, agregarías o validarías?_

El error del valor del nombre nulo puede deberse a un error más grande en la aplicación, si este es un caso esperado, sería revisar nuevamente la interfaz de pedido con el backend para identificar otros posibles valores nulos. Si no es un caso esperado, significa que el pedido está siendo guardado dentro del backend por un error, cosa que no debería de ser posible en ningún sentido, ya que el backend debería estar protegido para esta situación.

Si fuera posible extraer las fechas de creación y pago o cancelació de los pedidos, sería de gran ayuda para el usuario de la aplicación.

También implementaría un modo oscuro opcional.

---

## 6. ¿Usaste IA? ¿Cómo?

_Si usaste herramientas de IA (ChatGPT, Copilot, etc.), descríbelo aquí. No penaliza; queremos entender cómo las aprovechas._

Usé el autocompletador de copilot para la parte de las rutas del backend, ya que no estoy muy familiarizado con el número de status que regresan las peticiones. Copilot puso automaticamente el número 400, y en una investigación posterior resultó que fue el mejor código posible a utilizar en dicha situación.
