customElements.define('open-shadow',
  class extends HTMLElement {
    constructor() {
      super();

      const pElem = document.createElement('p');
      pElem.textContent = this.getAttribute('text');

      //mode为open时 document.querySelector('close-shadow') 可以拿到元素
      const shadowRoot = this.attachShadow({mode: 'open'});

      shadowRoot.appendChild(pElem);
    }
  }
);

customElements.define('closed-shadow',
  class extends HTMLElement {
    constructor() {
      super();

      const pElem = document.createElement('p');
      pElem.textContent = this.getAttribute('text');
      //mode为closed时 document.querySelector('close-shadow') = null
      const shadowRoot = this.attachShadow({mode: 'closed'});
      shadowRoot.appendChild(pElem);
    }
  }
);

document.querySelector('html').addEventListener('click', e => {
  // Event 接口的只读属性 composed 返回一个 Boolean 值，
  // 用来指示该事件是否可以从 Shadow DOM 传递到一般的 DOM。
  console.log(e.composed);
  // composedPath() 是 Event 接口的一个方法，当对象数组调用该侦听器时返回事件路径。
  // 如果影子根节点被创建并且ShadowRoot.mode是关闭的，那么该路径不包括影子树中的节点。
  console.log(e.composedPath());
});
