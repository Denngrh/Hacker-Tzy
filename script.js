const canvas = document.querySelector("#warna")
const ctx = canvas.getContext("2d")
canvas.width = window.innerWidth
canvas.height = window.innerHeight


let gradient = ctx.createRadialGradient( canvas.width / 2, canvas.height / 2 , 100 , canvas.width / 2 , canvas.height / 2 , canvas.width/2)
// let gradient = ctx.createRadialGradient(x1,y1,r1,x2,y2,r2)
// let gradient = ctx.createLinearGradient(0,canvas.width, canvas.height, 0)


let count = 0

function changeWarna() {

	function main() {
		gradient.addColorStop(0, `rgb(
			${Math.floor(Math.random() * 255 + 1 )},
			${Math.floor(Math.random() * 255 + 1 )},
			${Math.floor(Math.random() * 255 + 1 )})
		`)

		gradient.addColorStop(0.1, `rgb(
			${Math.floor(Math.random() * 255 + 1 )},
			${Math.floor(Math.random() * 255 + 1 )},
			${Math.floor(Math.random() * 255 + 1 )})
		`)

		gradient.addColorStop(0.2, `rgb(
			${Math.floor(Math.random() * 255 + 1 )},
			${Math.floor(Math.random() * 255 + 1 )},
			${Math.floor(Math.random() * 255 + 1 )})
		`)

		gradient.addColorStop(0.3, `rgb(
			${Math.floor(Math.random() * 255 + 1 )},
			${Math.floor(Math.random() * 255 + 1 )},
			${Math.floor(Math.random() * 255 + 1 )})
		`)

		gradient.addColorStop(0.4, `rgb(
			${Math.floor(Math.random() * 255 + 1 )},
			${Math.floor(Math.random() * 255 + 1 )},
			${Math.floor(Math.random() * 255 + 1 )})
		`)

		gradient.addColorStop(0.5, `rgb(
			${Math.floor(Math.random() * 255 + 1 )},
			${Math.floor(Math.random() * 255 + 1 )},
			${Math.floor(Math.random() * 255 + 1 )})
		`)

		gradient.addColorStop(0.6, `rgb(
			${Math.floor(Math.random() * 255 + 1 )},
			${Math.floor(Math.random() * 255 + 1 )},
			${Math.floor(Math.random() * 255 + 1 )})
		`)

		gradient.addColorStop(0.7, `rgb(
			${Math.floor(Math.random() * 255 + 1 )},
			${Math.floor(Math.random() * 255 + 1 )},
			${Math.floor(Math.random() * 255 + 1 )})
		`)

		gradient.addColorStop(0.8, `rgb(
			${Math.floor(Math.random() * 255 + 1 )},
			${Math.floor(Math.random() * 255 + 1 )},
			${Math.floor(Math.random() * 255 + 1 )})
		`)

		gradient.addColorStop(0.9, `rgb(
			${Math.floor(Math.random() * 255 + 1 )},
			${Math.floor(Math.random() * 255 + 1 )},
			${Math.floor(Math.random() * 255 + 1 )})
		`)

		gradient.addColorStop(1, `rgb(
			${Math.floor(Math.random() * 255 + 1 )},
			${Math.floor(Math.random() * 255 + 1 )},
			${Math.floor(Math.random() * 255 + 1 )})
		`)
		count+=1

		if (count === 10) {
			count = 0
			clearInterval(warna)
		}
	}

	let warna = setInterval(main, 80);
	setTimeout(changeWarna, 1000);
}

changeWarna()



// gradient.addColorStop(0.6, "cyan")
// gradient.addColorStop(1, "magenta")

// gradient.addColorStop(0.8, "blue")
// gradient.addColorStop(0.2, "yellow")
// gradient.addColorStop(0.4, "green")

class Symbol {
    constructor(x, y, fontSize, canvasHeight) {
        this.characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZابتثجحخدذرز سشصضطظعغفقكلمنهوية"
        this.x = x
        this.y = y
        this.fontSize = fontSize
        this.text = ""
        this.canvasHeight = canvasHeight
    }

    draw(context) {
        this.text = this.characters.charAt(Math.floor(Math.random() * this.characters.length))
        
        context.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize)


        if (this.y * this.fontSize > this.canvasHeight && Math.random() > 0.78 ) {
            this.y = 0
        }else{
            this.y += 1
            // clearInterval(warna)
            // console.log(warna)
        }
    }
}


class Effect {
    constructor(canvasWidth, canvasHeight) {
        this.canvasWidth = canvasWidth
        this.canvasHeight = canvasHeight
        this.fontSize = 25
        this.columns = this.canvasWidth / this.fontSize
        this.symbols = []
        this.#initialize()
    }

    #initialize() {
        for (let i = 0; i < this.columns; i++) {
            this.symbols[i] = new Symbol(i, 0, this.fontSize, this.canvasHeight)
            
            //clearInterval(warna)
        }
    }


    risize(width, height){
        this.canvasWidth = width
        this.canvasHeight = height
        this.columns = this.canvasWidth / this.fontSize
        this.symbols = []
        this.#initialize()
    }
}

const effect = new Effect(canvas.width, canvas.height)
let lastTime = 0
const fps = 100
const nextFrame = 1000/fps
let timer = 0



function animate(timeStamp) {
    const deltaTime = timeStamp - lastTime
    lastTime = timeStamp
    
    if (timer > nextFrame) {
        ctx.fillStyle = "rgba(0,0,0,0.05)"
        ctx.textAlign = "center"
        ctx.fillRect(0,0,canvas.width, canvas.height)
        ctx.fillStyle = gradient //"#0aff0a"
        ctx.font = effect.fontSize + "px monospace"
        effect.symbols.forEach(symbol=> symbol.draw(ctx))
        timer = 0
    }else{
        timer += deltaTime
    }

    requestAnimationFrame(animate)
}

animate(0)


window.addEventListener("resize", function(){
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    effect.risize(canvas.width, canvas.height)

    
    gradient = ctx.createRadialGradient( canvas.width / 2, canvas.height / 2 , 100 , canvas.width / 2 , canvas.height / 2 , canvas.width/2)
})