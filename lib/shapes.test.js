const { Triangle, Square, Circle } = require('./shapes.js');

describe('Shape classes', () => {
  describe('Triangle', () => {
    it('Render triangle with the correct color', () => {
      const triangle = new Triangle();
      triangle.setColor('red');
      expect(triangle.render()).toContain('fill="red"');
      `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    });
  });

  describe('Square', () => {
    it('Render square with the correct color', () => {
      const square = new Square();
      square.setColor('blue');
      expect(square.render()).toContain('fill="blue"');
      `<rect x="62" y="35" width="180" height="180" fill="${this.color}" />`;
    });
  });

  describe('Circle', () => {
    it('Render circle with the correct color', () => {
      const circle = new Circle();
      circle.setColor('green');
      expect(circle.render()).toContain('fill="green"');
      `<circle cx="150" cy="120" r="90" fill="${this.color}" />`;
    });
  });
});
