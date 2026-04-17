# RESPUESTAS

> Completa este archivo como parte de tu entregable. Sé concreto/a y directo/a. No hay respuestas perfectas.

---

## 1. ¿Qué bugs encontraste?

_Describe cada bug que identificaste: dónde estaba, qué comportamiento causaba y por qué era un problema._

**Bug 1:** se encontraba en la linea 39 del componente OrderTable.tsx. Causaba que al querer ingresar a localhost:5173 la pagina se mostraba en blanco. Es un problema ya que no se puede ver la tabla de ordenes, ni realizar ninguna accion en el sistema.

**Bug 2:** el filtro de ordenes por estado no funcionaba correctamente. El error estaba en la linea 49 de App.tsx. Causaba que al querer filtrar por estado, en lugar de mostrar los pedidos del estado seleccionado, mostraba los pedidos que no eran del estado seleccionado. Es un problema ya que no se puede filtrar correctamente por estado.

**Bug 3:** el backend permitia marcar como pagado un pedido que ya estaba pagado o cancelado. El error estaba en el endpoint PATCH /api/orders/:id/pay. Es un problema ya que, si bien en el frontend se muestra el boton de "Marcar como pagado" solo para pedidos pendientes, el backend no validaba el estado del pedido antes de marcarlo como pagado. Por lo tanto, se podia marcar como pagado un pedido que ya estaba pagado o cancelado utilizando, por ejemplo, una herramienta como Postman para hacerle peticiones al backend.

---

## 2. ¿Qué corregiste?

_Explica cómo solucionaste cada bug. Puedes referenciar archivos y líneas de código._

**Corrección Bug 1:** lo solucione modificando la linea 39 del componente OrderTable.tsx. Agregando la logica para que en caso de que el nombre del cliente sea null se muestre "Sin nombre".

**Corrección Bug 2:** lo solucione modificando la linea 49 de App.tsx. Simplemente eliminando el operador ! de la condicion. 

**Corrección Bug 3:** lo solucione agregando un if en el endpoint PATCH /api/orders/:id/pay que valide el estado del pedido antes de marcarlo como pagado. Si el pedido no esta en estado "pending", se retorna un error 400.

---

## 3. ¿Qué no alcanzaste a resolver?

_Sé honesto/a. Si no llegaste a algo, explica qué era y por qué priorizaste otras cosas._

---

## 4. ¿Qué supuestos hiciste?

_¿Tomaste alguna decisión ante algo que no estaba del todo claro? Explícala._
La logica de validacion en el backend respecto a que pedidos se pueden marcar como pagados la realice siguiendo la misma logica que se utiliza en el frontend para mostrar el boton de "Marcar como pagado". Pero no puedo estar seguro al 100% de que sea la logica correcta, ya que no se especifica en ningun lado, si bien resulta coherente que solo se puedan marcar como pagados los pedidos que esten en estado "pending". 
 
---

## 5. ¿Qué probarías después?

_Si tuvieras más tiempo, ¿qué mejorarías, agregarías o validarías?_
Para el bug 1, validaria que a la hora del registro del mismo, no permita registrar una orden sin nombre de cliente.

Agregaria la posibilidad de editar los campos de cada uno de los pedidos, para que en caso de que haya un error en el registro, se pueda corregir, o si hay cambios posteriores en el pedido, se puedan reflejar.

Podria implementar un sistema de paginacion para que no se muestren todos los pedidos a la vez, en caso de que haya una gran cantidad de pedidos.

Agregar validacion en el backend para que sea un status valido al momento de hacer un get con filtro por estado.

Además, se podria agregar un filtro para buscar por nombre de cliente. 


---

## 6. ¿Usaste IA? ¿Cómo?

_Si usaste herramientas de IA (ChatGPT, Copilot, etc.), descríbelo aquí. No penaliza; queremos entender cómo las aprovechas._
Utilice Claude Opus 4.6 integrada en el IDE Antigravity para que me ayude con la sintaxis para implementar la logica de que si el nombre del cliente es null se muestre "Sin nombre". 
Tambien, utilice el autocompletado de codigo para escribir el codigo de validación en el backend.
Ademas de esto, le mencione a la IA cual era el error que yo consideraba que ocurria en el backend y le pedi que me validara si consideraba lo mismo, ademas de consultarle si creia que habia algun otro error en el backend. 
Respecto al requerimiento nuevo, realice un prompt pidiendole dicha funcionalidad y valide la solución tanto en codigo como en la pagina web. 