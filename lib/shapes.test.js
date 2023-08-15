// Imports the shape classes from the 'shapes.js' module
const { Triangle, Square, Circle } = require('./shapes.js');

// Test for the Shape classes
describe('Shape classes', () => {

  // Tests for the Triangle class
  describe('Triangle', () => {
     // Test for rendering a red triangle
    it('Render triangle with the correct color', () => {
      // Creates a red triangle
      const triangle = new Triangle();
      triangle.setColor('red');
      // Verify red color attribute in the render output
      expect(triangle.render()).toContain('fill="red"');
      `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    });
  });

  // Tests for the Square class
  describe('Square', () => {
    // Test for rendering a blue square
    it('Render square with the correct color', () => {
      // Creates a blue square
      const square = new Square();
      square.setColor('blue');
      // Verify blue color attribute in the render output
      expect(square.render()).toContain('fill="blue"');
      `<rect x="62" y="45" width="180" height="160" fill="${this.color}" />`;
    });
  });

  // Tests for the Circle class
  describe('Circle', () => {
    // Test for rendering a green circle
    it('Render circle with the correct color', () => {
      // Creates a green circle
      const circle = new Circle();
      circle.setColor('green');
      // Verify green color attribute in the render output
      expect(circle.render()).toContain('fill="green"');
      `<circle cx="150" cy="120" r="90" fill="${this.color}" />`;
    });
  });
});
