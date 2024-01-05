const swaggerAutogen = require('swagger-autogen')({openapi: '3.0.0'});

const doc = {
    info: {
        title: 'Management',
        description: 'Description'
    },
    host: 'localhost:3000',
    components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer'
            }
        }
    },
    security: [{ "bearerAuth": [] }],
};

const outputFile = '../../swagger.json';
const routes = ['../../app.js'];


swaggerAutogen(outputFile, routes, doc).then();