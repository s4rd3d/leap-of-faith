import { navigateMenu, createHTMLElement, changeFocus, loadMenu } from "./menu-functions";

class DeathMenu {
    constructor(parent) {
        this.parent = parent;
        this.buttons = [
            {
                text: 'Try Again',
                properties: {
                    handle: () => { console.log('try again clicked') },
                    className: 'menu-btn',
                    id: 'try-again',
                },
            },
            {
                text: 'Main Menu',
                properties: {
                    handle: () => { },
                    className: 'menu-btn',
                    id: 'main-menu',
                },
            },
        ];
        this.container = {
            properties: {
                className: 'button-container',
            }
        }

        loadMenu(this.container, this.buttons, this.parent);
    }
}

export default DeathMenu;
