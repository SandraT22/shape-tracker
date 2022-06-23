import Rectangle from '../src/js/rectangle.js';

describe('Rectangle', () => {

  let rectangle = new Rectangle(3,5);

    beforeEach(() => {
      rectangle = new Rectangle(3,5);
    });

  test('should correctly get the area of a rectangle object', () => {
    expect(rectangle.side1).toEqual(3);
    expect(rectangle.side2).toEqual(5);
  });
});