const Game = {
    name: 'カップヘッド',
    author: 'Web Dev Squad 10/2022',
    version: '1.0.0',
    license: undefined,
    description: 'Best Game in Town',

    FPS: 60,
    canvas: undefined,
    ctx: undefined,
    width: undefined,
    height: undefined,

    player: undefined,
    background: undefined,
    boss: undefined,
    winImg: undefined,

    intervalId: undefined,

    init() {
        this.canvas = document.querySelector('#canvas')
        this.ctx = this.canvas.getContext('2d')

        this.winImg = new Image()
        this.winImg.src = './assets/victory.png'

        this.setDimensions()
        this.start()
    },

    setDimensions() {
        this.width = window.innerWidth
        this.height = window.innerHeight

        this.canvas.width = this.width
        this.canvas.height = this.height
    },

    start() {
        this.generateAll()

        this.intervalId = setInterval(() => {
            this.clearAll()
            this.drawAll()
            this.checkCollision()
            this.clearBullets()
        }, 1000 / this.FPS) // 60 --> 1 segundo...  
    },

    drawAll() {
        this.background.draw()
        this.boss.draw()
        this.player.draw()
        this.player.bullets.forEach(bullet => bullet.draw())
    },

    generateAll() {
        this.player = new Player(this.ctx, this.width, this.height)
        this.background = new Background(this.ctx, this.width, this.height)
        this.boss = new Boss(this.ctx, this.width, this.height)
    },

    clearAll() {
        this.ctx.clearRect(0, 0, this.width, this.height)
    },

    clearBullets() {
        // 
    },

    checkCollision() {
        this.player.bullets.forEach(bullet => {
            if (bullet.posX + bullet.width >= this.boss.posX + 20) this.gameOver() // AÑADIR SEGUNDA CONDICIÓN DE COLISIÓN && <=
        })
        // posX + anchura BALA
        // posX patata
    },

    gameOver() {
        clearInterval(this.intervalId)
        this.clearAll()
        this.ctx.drawImage(this.winImg, 0, 0, this.width, this.height)
        // Mandar a una pantalla de Victoria --> recargar la página
        setTimeout(() => {
            location.reload()
        }, 2000)
    }
}