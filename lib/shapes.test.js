const { Circle } = require('./circle.js');
const { Square } = require('./square.js');
const { Triangle } = require('./triangle.js');

describe("shape", () => {
    it("Square renders correctly", () => {
        const square = new Square("JJJ", "Blue", "Red")
        const expectedValue = `<svg version="1.1" width="400" height="400" xmlns="http://www.w3.org/2000/svg">

        <rect width="400" height="400" style="fill:Blue" />

        <text x="200" y="250" font-size="150" text-anchor="middle" fill="Red">JJJ</text> 
        
      </svg>`
        const actualValue = square.render();
        expect(actualValue).toEqual(expectedValue);
    })
    it("Circle renders correctly", () => {
        const circle = new Circle("JJJ", "Blue", "Red")
        const expectedValue = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" style="fill:Blue" />

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="Red">JJJ</text> 
        
      </svg>`
        const actualValue = circle.render();
        expect(actualValue).toEqual(expectedValue);
    })
    it("Triangle renders correctly", () => {
        const triangle = new Triangle("JJJ", "Blue", "Red")
        const expectedValue = `<svg version="1.1" width="500" height="500" xmlns="http://www.w3.org/2000/svg">

        <polygon points="250,60 100,400 400,400" style="fill:Blue" />

        <text x="250" y="300" font-size="60" text-anchor="middle" fill="Red">JJJ</text> 
        
        </svg>`
        const actualValue = triangle.render();
        expect(actualValue).toEqual(expectedValue);
    })

})