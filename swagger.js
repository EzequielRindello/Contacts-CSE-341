const swaggerAutogen = require("swagger-autogen")();

// Define the swagger doc
const doc = {
  info: { title: "Contacts API", description: "RESTful API for contacts" },
  host: "localhost:3000",
  schemes: ["http", "https"],
};

// Define the output file
const outputFile = "./swagger.json";
// Define the endpoints file
const endpointsFiles = ["./routes/index.js"];

// Generate the swagger.json file
swaggerAutogen(outputFile, endpointsFiles, doc);