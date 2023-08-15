// Modules (Writing files, Library handling user prompts, Import custom shape classes)
const fs = require("fs");
const inquirer = require("inquirer");
const { Triangle, Square, Circle } = require("./lib/shapes");

// Array of questions for user input
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

// Main function that runs application
async function run() {
    try {
        // Ask the user questions and await their responses
        const answers = await inquirer.prompt(questions);

        const text = answers.Text;
        const textColor = answers["Text-Color"];
        const shapeType = answers.Shape;
        const shapeColor = answers["Shape-Color"];

        let shape;
        switch (shapeType) {
            case "Triangle":
                shape = new Triangle(); // Creates a new Triangle
                break;
            case "Square":
                shape = new Square(); // Creates a new Square
                break;
            case "Circle":
                shape = new Circle(); // Creates a new Circle
                break;
            default:
                console.log("Invalid shape type");
                return;
        }

        shape.setColor(shapeColor); // Sets the color of the chosen shape

        // Generate an SVG logo using the provided user input
        const svgLogo = generateSVGLogo(text, textColor, shape);

        // Save the generated SVG logo to a file named "logo.svg"
        fs.writeFileSync("logo.svg", svgLogo);

        console.log("SVG logo generated and saved as 'logo.svg'");
    } catch (error) {
        console.error("Error occurred:", error);
    }
}

// Function to generate an SVG logo for text and shape
function generateSVGLogo(text, textColor, shape) {
    // Get SVG representation of the chosen shape
    const shapeSVG = shape.render();
    const textSVG = `<text x="150" y="140" font-size="50" text-anchor="middle" fill="${textColor}">${text}</text>`;
    
    // Combine shape and text SVG elements within an SVG container
    const svg = `
        <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
            ${shapeSVG}
            ${textSVG}
        </svg>
    `;
    
    return svg; // Return the SVG
}

run(); // Start the call function