import './style/style.css';

function component() {
  const element = document.createElement('div');

  element.innerHTML = 'Hello world';

  return element;
}

document.body.appendChild(component());
