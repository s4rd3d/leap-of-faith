import { loadMenu } from "./menu-functions";

class MainMenu {
    constructor(parent) {
        this.parent = parent;
        this.buttons = [
            {
                text: 'New Game',
                properties: {
                    handle: () => { console.log('new game clicked'); },
                    className: 'menu-btn',
                    id: 'new-game',
                },
            },
            {
                text: 'Settings',
                properties: {
                    handle: () => { console.log('settings clicked'); },
                    className: 'menu-btn',
                    id: 'settings',
                },
            },
            {
                text: 'High Scores',
                properties: {
                    handle: () => { console.log('high score clicked'); },
                    className: 'menu-btn',
                    id: 'high-scores',
                },
            },
            {
                text: 'About',
                properties: {
                    handle: () => { console.log('about clicked'); },
                    className: 'menu-btn',
                    id: 'about',
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

export default MainMenu;
