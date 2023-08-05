const inquirer = require('inquirer');
const fs = require('fs');
let elShape = "Test 3";
const shapesJs = require('./lib/shapes');
// const renderShapes = require('./lib/shapes');
// function generateShape(data) {
//     console.log(`${data.characters}`)
// }
let shapeType = 'shape';
let yourShape = "";

function renderShapes(data) {
    if (shapeType === 'Circle') {
        yourShape = [cx = "25", cy = "75", r = "20"];
    }
    return yourShape
}

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
        fs.writeFile('./examples/logo.svg', JSON.stringify(response), (error) => {
            if (error) {
                console.error(error);
            }
        })

    })
    .then(() => {
        return console.log("Generated logo.svg")
    })
    .then(() => {
        renderShapes();
    })
    // .then((text) => {
    //     console.log(yourShape);
    // })