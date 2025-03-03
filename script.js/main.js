const canvasOOP = document.getElementById("canvasOOP");
const canvasRandom = document.getElementById("canvasRandom");
const canvasMultiple = document.getElementById("canvasMultiple");

const ctx = canvasOOP.getContext("2d");
const ctxRandom = canvasRandom.getContext("2d");
const ctxMultiple = canvasMultiple.getContext("2d");

// Ajustar las dimensiones del canvas
canvasOOP.height = 200;
canvasOOP.width = 300;

canvasRandom.height = 200;
canvasRandom.width = 300;

canvasMultiple.height = 200;
canvasMultiple.width = 300;

canvasOOP.style.background = "#ff8";
canvasRandom.style.background = "#e6f7f6";
canvasMultiple.style.background = "#fcfb97";

class Circle {
  constructor(x, y, radius, color, text, backcolor) {
    this.posX = x;
    this.posY = y;
    this.radius = radius;
    this.color = color;
    this.text = text;
    this.backcolor = backcolor;
  }

  draw(context) {
    context.beginPath();
    context.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2, false);
    context.fillStyle = this.backcolor;
    context.fill();

    context.lineWidth = 5;
    context.strokeStyle = this.color;
    context.stroke();

    // Alineación centrada del texto
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.font = "bold 20px cursive";
    context.fillStyle = "white";
    context.fillText(this.text, this.posX, this.posY);

    context.closePath();
  }
}


// Aseguramos que el círculo no se salga de los bordes
// Ajuste para que los círculos no toquen los bordes del canvas
let miCirculo = new Circle(canvasOOP.width / 2, canvasOOP.height / 2, 50, "red", "Tec", "rgb(66, 135, 245)");
miCirculo.draw(ctx);

// Generar un círculo aleatorio para el canvasRandom, asegurándonos de que esté dentro de los límites
let randomRadius = Math.floor(Math.random() * 100 + 15); // Radio entre 15 y 115
let randomX = Math.random() * (canvasRandom.width - 2 * randomRadius) + randomRadius;
let randomY = Math.random() * (canvasRandom.height - 2 * randomRadius) + randomRadius;

let miCirculoRandom = new Circle(randomX, randomY, randomRadius, "green", "Tec", "rgb(83, 186, 52)");
miCirculoRandom.draw(ctxRandom);

// Dibujar múltiples círculos en el canvasMultiple, asegurándonos de que no toquen los bordes
let arrayCircle = [];

for (let i = 0; i < 10; i++) {
  let randomRadius = Math.floor(Math.random() * 10 + 15);  // Radio entre 15 y 25
  let randomX = Math.random() * (canvasMultiple.width - 2 * randomRadius) + randomRadius;  // Aseguramos que no toque el borde
  let randomY = Math.random() * (canvasMultiple.height - 2 * randomRadius) + randomRadius; // Aseguramos que no toque el borde

  let miCirculoMultiple = new Circle(randomX, randomY, randomRadius, "#9e500d", i + 1, "#f29a4e");

  arrayCircle.push(miCirculoMultiple);
  arrayCircle[i].draw(ctxMultiple);
}

