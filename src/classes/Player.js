class Player {
    constructor() {
        this.position = {
            x: 100,
            y: 100
        };
        this.width = 100;
        this.height = 100;
        this.color = "red";
        this.velocity = {
            x: 0,
            y: 0
        };
        this.acceleration = {
            x:0,
            y:0
        };
        this.gravity = 1;
    }

    Update() {
        this.position.y += this.velocity.y;
        this.velocity.y++;
    }

}