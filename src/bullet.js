class Bullet {
    constructor(ctx, playerPosX, playerPosY, playerWidth, playerHeight) {
        this.ctx = ctx
        this.posX = playerPosX + playerWidth
        this.posY = playerPosY - 20 + playerHeight / 2

        this.width = 70
        this.height = 20

        this.velX = 20

        this.bulletImg = new Image()
        this.bulletImg.src = './assets/bullet.png'
    }

    draw() {
        // this.ctx.fillStyle = 'blue'
        // this.ctx.fillRect(this.posX, this.posY, this.width, this.height)
        this.ctx.drawImage(this.bulletImg, this.posX, this.posY, this.width, this.height)

        this.move()
    }

    move() {
        this.posX += this.velX
    }
}