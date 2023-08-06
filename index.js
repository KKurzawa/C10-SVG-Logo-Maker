const inquirer = require('inquirer');
const fs = require('fs');
let elShape = "Test 3";
const { Square } = require('./lib/shapes');
const { Circle } = require('./lib/shapes');
// const renderShapes = require('./lib/shapes');
// function generateShape(data) {
//     console.log(`${data.characters}`)
// }
let shapeType = 'shape';
let yourShape = "";


// function renderShapes(data) {
//     if (shapeType === 'Circle') {
//         yourShape = [cx = "25", cy = "75", r = "20"];
//     }
//     return yourShape
// }

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter three characters.',
            name: 'characters',
        },
        {
            type: 'input',
            message: 'Enter text color.',
            name: 'textColor',
        },
        {
            type: 'rawlist',
            message: 'Choose a shape from the list below.',
            choices: [
                { name: 'Circle', value: 'Circle' },
                { name: 'Triangle', value: 'Triangle' },
                { name: 'Square', value: 'Square' },
            ],
            name: 'shape',
        },
        {
            type: 'input',
            message: 'Enter shapes color.',
            name: 'shapeColor',
        },
    ])
    // .then((response) => {
    //     return shapesJs(renderShapes());
    // })
    .then((response) => {
        if (response.shape === 'Square') {
            const square = new Square(response.characters, response.shapeColor, response.textColor)
            fs.writeFile('./examples/logo.svg', square.render(), (error) => {
                if (error) {
                    console.error(error);
                }
            })
        } else (response.shape === 'Circle'); {
            const circle = new Circle(response.characters, response.shapeColor, response.textColor)
            fs.writeFile('./examples/logo.svg', circle.render(), (error) => {
                if (error) {
                    console.error(error);
                }
            })
        }
    })
    .then(() => {
        return console.log("Generated logo.svg")
    })
    // .then(() => {
    //     renderShapes();
    // })
    // .then((text) => {
    //     console.log(yourShape);
    // })