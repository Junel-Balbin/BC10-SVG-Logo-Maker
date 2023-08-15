// Imports the shape classes from the 'shapes.js' module
const { Triangle, Square, Circle } = require('./shapes.js');

// Test for the Shape classes
describe('Shape classes', () => {
  
  // Tests for the Triangle class
  describe('Triangle', () => {
    // Test for rendering a red triangle
    it('Render triangle with red color', () => {
      // Creates a red triangle
      const triangle = new Triangle().setColor('red');
      // Verify red color attribute in the render output
      expect(triangle.render()).toContain('fill="red"');
    });
  });

  // Tests for the Square class
  describe('Square', () => {
    // Test for rendering a blue square
    it('Render square with blue color', () => {
      // Creates a blue square instance
      const square = new Square().setColor('blue');
      // Verify blue color attribute in the render output
      expect(square.render()).toContain('fill="blue"');
    });
  });

  // Tests for the Circle class
  describe('Circle', () => {
    // Test for rendering a green circle
    it('Render circle with green color', () => {
      // Creates a green circle instance
      const circle = new Circle().setColor('green');
      // Verify green color attribute in the render output
      expect(circle.render()).toContain('fill="green"');
    });
  });
});
