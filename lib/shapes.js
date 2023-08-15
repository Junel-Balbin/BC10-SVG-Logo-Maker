// Define base class for Shape
class Shape {
  constructor() {
      // Initialize shape color as an empty string
      this.color = "";
  }

  // Method to set the color of the shape
  setColor(colorVar) {
      this.color = colorVar;
  }
}

// Define a class Triangle that inherits from the Shape
class Triangle extends Shape {
  // Render the triangle shape as an SVG
  render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}

// Define a class Square that inherits from the Shape
class Square extends Shape {
  // Render the square shape as an SVG
  render() {
      return `<rect x="62" y="45" width="180" height="160" fill="${this.color}" />`;
  }
}

// Define class Circle that inherits from the Shape
class Circle extends Shape {
  // Render the circle shape as an SVG
  render() {
      return `<circle cx="150" cy="120" r="90" fill="${this.color}" />`;
  }
}

// Exports the Triangle, Square, and Circle classes
module.exports = { Triangle, Square, Circle };
