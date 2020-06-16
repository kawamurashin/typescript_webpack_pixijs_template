import * as PIXI from 'pixi.js'
class Main {
    constructor() {
        let app = new PIXI.Application({
            width: 1920,
            height: 1080,
            backgroundColor: 0x1099bb,
        });
        let el = document.getElementById('app');
        el.appendChild(app.view);
    }
}
window.addEventListener("load", () => {
    new Main();
});