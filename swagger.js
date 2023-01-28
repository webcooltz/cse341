const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: "Contacts",
        description: "Contacts API for BYUI CSE 341"
    },
    host: "localhost:3000",
    schemes: ["http"]
};

const outputFile = "./swagger.json";
const endpointFiles = ["./routes/index.js"];

swaggerAutogen(outputFile, endpointFiles, doc);