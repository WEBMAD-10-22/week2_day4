class Boss {
    constructor(ctx, width, height) {
        this.ctx = ctx

        this.width = 450
        this.height = 400

        this.posX = width - this.width - 50
        this.posY = height - 50 - this.height

        this.bossImg = new Image()
        this.bossImg.src = './assets/mrpotato.png'
    }

    draw() {
        // this.ctx.fillStyle = 'yellow'
        // this.ctx.fillRect(this.posX, this.posY, this.width, this.height)
        this.ctx.drawImage(this.bossImg, this.posX, this.posY, this.width, this.height)
    }
}