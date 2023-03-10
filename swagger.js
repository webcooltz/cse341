const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: "Contacts",
        description: "Contacts API for BYUI CSE 341"
    },
    host: "cse341-psei.onrender.com",
    schemes: ["https"]
};

const outputFile = "./swagger.json";
const endpointFiles = ["./routes/index.js"];

swaggerAutogen(outputFile, endpointFiles, doc);