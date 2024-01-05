const express = require('express');
const app = express();
require('dotenv').config();
const authRoutes = require('./src/routes/authRoutes');
const clothesRoutes = require('./src/routes/clothesRoutes');
const jwtMiddleware = require('./src/middlware/jwtMiddleware');
const logMiddleware = require('./src/middlware/logMiddleware');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const PORT = process.env.port;


app.use(express.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/auth', logMiddleware, authRoutes);
app.use('/clothes', logMiddleware, jwtMiddleware, clothesRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
