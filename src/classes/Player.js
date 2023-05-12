class Player {
    constructor() {
        this.position = {
            x: 100,
            y: 100
        }
        this.width = 100;
        this.height = 100;
        this.color = "red";
    }

    Update() {
        this.position.y++;
    }

}