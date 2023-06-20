// Keyboard navigation of main menu
export function navigateMenu(event) {
    const buttons = document.querySelectorAll('button');
    const buttonsNum = buttons.length;
    let focusIndex = 0;

    // Find which button is in focus
    for (let i = 0; i < buttonsNum; i += 1) {
        if (document.activeElement === buttons[i]) focusIndex = i;
    }

    switch (event.key) {
        case 'ArrowUp':
            if (focusIndex === 0) focusIndex = buttonsNum - 1;
            else focusIndex -= 1;
            changeFocus(buttons[focusIndex]);
            break;
        case 'ArrowDown':
            if (focusIndex === buttonsNum - 1) focusIndex = 0;
            else focusIndex += 1;
            changeFocus(buttons[focusIndex]);
            break;
        default:
            break;
    }
}

// function for creating an html element
export function createHTMLElement(type, properties, ...children) {
    let element = document.createElement(type);
    if (properties) Object.assign(element, properties);
    for (let child of children) {
        if (typeof child != 'string') element.appendChild(child);
        else element.appendChild(document.createTextNode(child));
    }
    return element;
}

// Change which button is in focus depending on keyboard
// or mouse selection
export function changeFocus(button) {
    const buttons = document.querySelectorAll('button');

    button.focus();
    button.classList.add('focused');

    for (let i = 0; i < buttons.length; i += 1) {
        if (buttons[i] === button) buttons[i].classList.add('focused');
        else buttons[i].classList.remove('focused');
    }
}

export function loadMenu(container, menuButtons, parent) {
    let div = createHTMLElement('div', container.properties);
    for (let button of menuButtons) {
        let btn = createHTMLElement('button', button.properties, button.text);
        div.appendChild(btn);
    }
    parent.appendChild(div);

    let buttons = document.querySelectorAll('button');
    changeFocus(buttons[0]);

    addClickListenersToButtons();
    addKeyEventListenerToButtons();
}

// Add click event listeners
function addClickListenersToButtons() {
    document.querySelectorAll('button').forEach((button) => {
        button.addEventListener('click', () => {
            button.handle();
        });
        button.addEventListener('mouseover', () => {
            changeFocus(button);
        });
    });
}

// Add event listener for keyboard navigation
function addKeyEventListenerToButtons() {
    window.addEventListener('keydown', (event) => {
        navigateMenu(event);
    });
}
