const { Triangle, Square, Circle } = require();

describe('Shape classes', () => {
  describe('Triangle', () => {
    it('Render triangle with the correct color', () => {
      const triangle = new Triangle();
      triangle.setColor('red');
      expect(triangle.render()).toContain('fill="red"');
    });
  });

  describe('Square', () => {
    it('Render square with the correct color', () => {
      const square = new Square();
      square.setColor('blue');
      expect(square.render()).toContain('fill="blue"');
    });
  });

  describe('Circle', () => {
    it('Render circle with the correct color', () => {
      const circle = new Circle();
      circle.setColor('green');
      expect(circle.render()).toContain('fill="green"');
    });
  });
});
