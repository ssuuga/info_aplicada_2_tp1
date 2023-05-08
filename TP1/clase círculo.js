class Circulo {
    constructor(x, y, tam) { //corresponden a la posición "y", la posición "x" y su "tamaño"
      this.x = x;
      this.y = y;
      this.tam = tam;
      this.color = color(255); //el color que se inicializa en blanco
    }
  
    mostrar() { //dibuja el círculo en la pantalla
      fill(this.color);
      ellipse(this.x, this.y, this.tam, this.tam);
    }
  
    cambiarTamano() { //aumenta el tamaño del círculo en 10 unidades cada vez que se presiona el botón del mouse
      if (mouseIsPressed) {
        this.tam += 10;
      }
    }
  
    cambiarColor() {
      if (keyIsPressed) {
        if (keyCode === LEFT_ARROW) { //Si se presiona la flecha izquierda, el círculo se vuelve rojo
          this.color = color(255, 0, 0);
        } else if (keyCode === RIGHT_ARROW) { //si se presiona la flecha derecha, el círculo se vuelve verde
          this.color = color(0, 255, 0);
        } else if (keyCode === UP_ARROW) { //si se presiona la flecha arriba, el círculo se vuelve azul
          this.color = color(0, 0, 255);
        } else if (keyCode === DOWN_ARROW) { //si se presiona la flecha abajo, el círculo vuelve a ser blanco
          this.color = color(255);
        }
      }
    }
  }