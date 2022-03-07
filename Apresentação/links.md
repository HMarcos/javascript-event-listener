# Event Listener

* ## O que são eventos de mouse e teclado em JavaScript?

> Os eventos de teclado, que são representados pelos objetos do tipo **KeyboardEvent**, descrevem a interação do usuário com o teclado.  

Cada evento está associado a uma tecla e podem ser do tipo:  

Evento  | Descrição
:--------:| :---------:
`keydown` | acionado quando uma tecla é pressionada
`keyup` | acionado quando uma tecla é liberada
`keypress` | acionado quando uma tecla é completamente pressionada

**Obs:** Os eventos seguem a seguinte ordem de execução: Keydown -> Keypress -> Keyup.

**Obs:** O evento **keypress** atualmente está depreciado, e recomendado não usá-lo, pois diferentes navegadores possuem diferentes implementações para esse evento.

**Obs:** Os eventos de teclado relacionado a um determinado elemento são acionados quando o focus está atribuído a esse elemento.

> Os eventos de mouse, que são representados por objetos do tipo **MouseEvent**, descrevem a interação do usuário com um dispositivo apontador (como um mouse).

Os eventos de mouse são:
Evento  | Descrição
:--------:| :---------:
`click` | acionado quando o mouse performa um clique
`dblclick` | acionado quando o mouse performa um duplo-clique
`mousedown` | acionado quando o mouse é pressionado sobre um elemento
`mouseup` | acionado quando o mouse é liberado enquanto sobre um elemento
`mouseenter` ou `mouseover` | acionado quando o cursor do mouse entra no espaço de um elemento HTML
`mouseleave`| acionado quando o cursor do mouse deixa o espaço de um elemento HTML
`mousemove` | acionado quando o cursor do mouse se move sobre um elemento HTML

Além disso os eventos de mouse provêem informações adicionais atrávés de propriedades como: `clientX`, `clientY`, `offsetX`, `offsetY`, `screenX`, `screenY`.

(Pesquisar sobre a precedência dos métodos).

---
* ## O que é um Event Listener e como adicioná-lo via JS?

> O `EventListener` é uma interface que representa um objeto que consegue lidar com os eventos designados a um determinado elemento.

Para adicioná-lo via JS é preciso utilizar o método `addEventListener()`, que possui a seguinte sintaxe:

```
element.addEventListener(event, function, useCapture);
```

O parâmetro `event`representa o tipo do evento, como por exemplo: `"click"`; `"keydown"` ou qualquer outro [HTML DOM Event](https://www.w3schools.com/jsref/dom_obj_event.asp). Uma observação importante é que os eventos são utilizados sem o prefixo **"on"**.

Já o segundo parâmetro, `function`, é a função que é chamada quando o evento ocorre.

Por fim, o terceiro parâmetro `useCapture` é um valor booleano que especifica se é para o usar *event bubbling* ou *event capturing*. Esse parâmetro é opcional.

---

* ## O que é uma função de *callback* (utilizada no Event Listener)?

> Formalmente, uma função *callback* pode ser definida como qualquer função que é passada como argumento para outra função, para que possa ser executada nessa outra função.

No caso da função de *callback* utilizada no Event Listener, ela corresponde a função que é executada quando o evento ocorre. Sendo uma função que aceita um único parâmetro baseado no objeto do tipo `Event`, que descreve o evento ocorrido, e não retorna nada.

---
* ## Qual a diferença de um Event Listener de atributos HTML (como onclick)?

> A principal diferença é que com os atributos HTML, como o `onclick`, consegu-se atribuit apenas uma função como callback do evento. Já com o `addEventListener()`  pode-se utilizar quantas funções quiser que todas elas serão ativadas quando o evento ocorrer. Justamente por isso o `addEventListener()` é mais indicado.

Além dessa diferença pricipal é importante citar que: 

* Com o Event Listener é possível controlar a proprogação dos enventos, caso que não é possível com os atributos HTML; 
* Além disso o `addEventListener` somente pode ser adicionado via código JavaScript, diferentemente dos atributos HTML, que podem ser modificados via JS e também diretamente no HTML. 

Ao usar o método `addEventListener()`, o JavaScript é separado da marcação HTML, para melhor legibilidade e permite adicionar ouvintes de eventos mesmo quando não se controla a marcação HTML.


Também é importante ressaltar que o método `addEventListener()` permite adicionar ouvintes de eventos em qualquer objeto **HTML DOM**, como elementos HTML, o documento HTML, o objeto `window` ou outros objetos que suportam eventos.

---

* ## O que é o objeto `Event` que é recebido na função de callback?

> O objeto `Event` representa um evento que ocorre no **DOM**, sendo o responsável por descrever o evento. 

É a partir dele que se pode extrair informações importantes, como: 

* em qual elemento o evento foi acionado.
* o momento em que o evento ocorreu;
* identificar o tipo do evento;
* qual tecla foi pressionada; 
* qual a posição do mouse em relação à tela; 

---

* ## O que é Event Bubbling em JS?

> Há duas formas de propagação de eventos no HTML DOM: ***bubbling*** e ***capturing***. 

A propagação de eventos é uma maneira de definir a ordem dos elementos quando um evento ocorre.

Imagine o seguinte cenário: Se há um elemento `<p>` dentro de um elemento `<div>` e o usuário clicar no elemento `<p>`, qual evento `"click"` do elemento deve ser tratado primeiro?

No ***bubbling***, o evento do elemento mais interno é tratado primeiro e depois o externo: o evento de clique do elemento `<p>` é tratado primeiro, depois o evento de clique do elemento `<div>`.

No ***capturing*** o evento do elemento mais externo é tratado primeiro e depois o interno: o evento de clique do elemento `<div>` será tratado primeiro, depois o evento de clique do elemento `<p>`.

É possível especificar o tipo de propagação no `addEventListener` através do parâmetro `useCapture`.

```
element.addEventListener(event, function, useCapture);
```

O valor padrão é `false`, o qual seleciona a propagação do tipo ***bubbling***, quando esse valor é `true`, então o evento utiliza a propagação do tipo ***capturing***.

---

* ## O que faz a função `event.stopPropagation`?

> O método `event.stopPropagation` previne que a propagação do mesmo evento seja chamada.

Sendo assim tanto o comportamento dois tipos de propagação, ***bubbling*** e ***capturing***, não acontece. Não há uma chamada "recursiva" dos eventos.

---

Referências: 
* [KeyboardEvent](https://developer.mozilla.org/pt-BR/docs/Web/API/KeyboardEvent);
* [MouseEvent](https://developer.mozilla.org/pt-BR/docs/Web/API/MouseEvent);
* [Keyboard and Mouse Events in JavaScript](https://www.infocodify.com/web/keyboard-and-mouse-events-in-javascript);
* [KeyPress, KeyDown, KeyUp - The Difference Between Javascript Key Events](http://web.archive.org/web/20161212021242/http://www.bloggingdeveloper.com/post/KeyPress-KeyDown-KeyUp-The-Difference-Between-Javascript-Key-Events.aspx);  
* [EventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventListener);
* [JavaScript HTML DOM EventListener](https://www.w3schools.com/js/js_htmldom_eventlistener.asp);
* [EventTarget.addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#the_event_listener_callback);
* [Callback Functions in JavaScript: Everything You Need to Know](https://www.simplilearn.com/tutorials/javascript-tutorial/callback-function-in-javascript#:~:text=A%20JavaScript%20callback%20is%20a,called%20as%20a%20callback%20function.);
* [Difference between addEventListener and onclick in JavaScript](https://www.geeksforgeeks.org/difference-between-addeventlistener-and-onclick-in-javascript/);
* [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event);
* [stopPropagation() Event Method](https://www.w3schools.com/jsref/event_stoppropagation.asp)