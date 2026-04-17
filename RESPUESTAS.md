# RESPUESTAS

> Completa este archivo como parte de tu entregable. Sé concreto/a y directo/a. No hay respuestas perfectas.

---

## 1. ¿Qué bugs encontraste?

_Describe cada bug que identificaste: dónde estaba, qué comportamiento causaba y por qué era un problema._

**Bug 1:*Bug al inciar el proyecto, al estar "forzando" que null fuera string, no cargaba el proyecto.*

**Bug 2:*Bug en el filtro, no esta funcionando correctamente.*

**Bug 3:*Bug en poder marcar como pagado aquellos pedidos que tuvieran incidencia.*

---

## 2. ¿Qué corregiste?

_Explica cómo solucionaste cada bug. Puedes referenciar archivos y líneas de código._

**Corrección Bug 1:*En el primer bug, correji en la linea [Ver OrderTable](./frontend/src/components/OrderTable.tsx#L39) ya que el principio estaba "engañando" a typescript a que el customerName siempre sea String, cuando igual podria ser null(no tener un valor ahi), y modificandolo a como lo puse, estoy haciendo que si en efecto hay un nombre, ese nombre se use y que si no, muestre vacio*

**Corrección Bug 2:*El filtro del estatus no funcionaba, ya que al principo del codigo en la linea [Ver App](./frontend/src/App.tsx#L49) se estaba poniendo que al seleccionar el estatus se devolviera diferente de lo seleccionado, al corregirlo ahora pido que se devuelva lo igual a lo seleccionado*

**Corrección Bug 3:*Me hizo ruido que se pudieran marcar como pagado pedidos que tuvieran incidencias, porque a un nivel productivo, pues el pago no pudo haber sido aceptado, o se declino, etc. Y que aun asi me permita marcar como pagado el pedido, no se me hace del todo correcto, asi que agregue una validacion extra en  [Ver Orders](./backend/src/routes/orders.ts#L28) para que si el pedido tenga incidencia, marque un error si se trata de marcar como pagado*

---

## 3. ¿Qué no alcanzaste a resolver?

_Sé honesto/a. Si no llegaste a algo, explica qué era y por qué priorizaste otras cosas._

---

## 4. ¿Qué supuestos hiciste?

_¿Tomaste alguna decisión ante algo que no estaba del todo claro? Explícala._

** Donde mas asumi, fue en la parte de detectar la operacion que el back estaba permitiendo, ya que tambien vi que permite modificar el estatus de manera directa, no hay una gran validacion en los datos que se pueden mandar y demas. Entonces creo que asumi cual era la incidencia mas necesaria a corregir o la que mas ruido me hizo que fue que see pudieran marcar como pagados aquellos pedidos con incidencias, para mi no era lo correcto. **

---

## 5. ¿Qué probarías después?

_Si tuvieras más tiempo, ¿qué mejorarías, agregarías o validarías?_

** Bueno aqui si tuviera mas tiempo, trabajaria en hacer mas solido el back, precisamente con lo que mencione de validar los datos, no modificar el estatus de manera directa, ser mas estrcito en el tipado de los params, hacer un mejor manejo de errores para mostrar mensajes mas claros. A nivel de front en lo personal no soy fan de usar CSS Vanilla, creo que siempre es mejor usar Tailwind para eso, hace que el uso de estilos sea mas sencillo y si el proyecto escala, no tenemos archivos .css haciendo monton. En general mejoraria mas el estilo de la tabla, el input con los filtros, el boton de marcar como pagado hacerlo mas moderno, hacer una UI mas limpia sobre todo, y que respecto a ello la UX sea mas sencilla para el usario, que ahorita no es que sea compleja, pero siempre hay que mantener el sistema sencillo**

---

## 6. ¿Usaste IA? ¿Cómo?

_Si usaste herramientas de IA (ChatGPT, Copilot, etc.), descríbelo aquí. No penaliza; queremos entender cómo las aprovechas._

** Si la use, usea la propia IA de cursor, y la use como patito de goma en la parte del back, ya que como habia visto muchas cosas que se podian mejorar queria centrarme en la que posiblemente era la mas escencial a resolver. Y tambien la use al final para los estilos de la badge por falta de tiempo, ya que estos no se estaban mostando de forma correcta, pero era solo porque yo habia nombrado la clase de otra forma en el componente y en los estilos nombre la clase de otra forma, por eso soy mas fan de utilizar Tailwind.**
