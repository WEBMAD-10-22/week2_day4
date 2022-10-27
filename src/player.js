class Player {
    constructor(ctx, ctxWidth, ctxHeight) {
        this.ctx = ctx
        this.ctxWidth = ctxWidth
        this.ctxHeight = ctxHeight

        this.width = 120 // dibujar una imagen con estos valores
        this.height = 150

        this.posX = 120
        this.posY = ctxHeight - 50 - this.height // AQUÍ VOLVEMOS

        this.playerImg = new Image()
        this.playerImg.src = './assets/mainPlayer.png'

        this.bullets = [] // bullets.filter(bullet => bullet.posX < this.width)

        // gravity
        // velocity
        // keys

        // bullets...
        this.setEventListeners()
    }

    draw() {
        // this.ctx.fillStyle = 'green'
        // this.ctx.fillRect(this.posX, this.posY, this.width, this.height)
        this.ctx.drawImage(this.playerImg, this.posX, this.posY, this.width, this.height)
    }

    setEventListeners() {
        document.addEventListener('keydown', (e) => {
            if (e.code === 'ArrowLeft') {
                if (this.posX > 0) this.posX -= 15
            }
            if (e.code === 'ArrowRight') {
                if (this.posX < this.ctxWidth - this.width) this.posX += 15
            }
            if (e.code === 'KeyE') {
                this.shoot()
            }
        })
    }

    shoot() {
        this.bullets.push(new Bullet(this.ctx, this.posX, this.posY, this.width, this.height))
    }
}