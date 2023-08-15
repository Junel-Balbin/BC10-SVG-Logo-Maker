const fs = require("fs");
const inquirer = require("inquirer");
const {Triangle, Square, Circle} = require("./lib/shapes");


const questions = [
    {
        type: "input",
        name: "Text",
        message: "Enter up to 3 Letters:",
    },
    {
        type: "input",
        name: "Text-Color",
        message: "Enter a color for your text:",
    },
    {
        type: "list",
        name: "Shape",
        message: "Choose Shape Style:",
        choices: ["Triangle", "Square", "Circle"],
    },
    {
        type: "input",
        name: "Shape-Color",
        message: "Enter a color for your shape:",
    },
];

async function run() {
    try {
        const answers = await inquirer.prompt(questions);

        const text = answers.Text;
        const textColor = answers["Text-Color"];
        const shapeType = answers.Shape;
        const shapeColor = answers["Shape-Color"];

        let shape;
        switch (shapeType) {
            case "Triangle":
                shape = new Triangle(shapeColor);
                break;
            case "Square":
                shape = new Square(shapeColor);
                break;
            case "Circle":
                shape = new Circle(shapeColor);
                break;
            default:
                console.log("Invalid shape type");
                return;
        }

        const svgLogo = generateSVGLogo(text, textColor, shape);

        // Save the generated SVG logo to a file
        fs.writeFileSync("logo.svg", svgLogo);

        console.log("SVG logo generated and saved as 'logo.svg'");
    } catch (error) {
        console.error("Error occurred:", error);
    }
}

function generateSVGLogo(text, textColor, shape) {
    const shapeSVG = shape.generateSVG(); 
    const textSVG = `<text x="10" y="30" fill="${textColor}">${text}</text>`;
    
    const svg = `
        <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
            ${shapeSVG}
            ${textSVG}
        </svg>
    `;
    
    return svg;
}

run();
