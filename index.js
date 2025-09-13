const express = require('express');
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todoRoutes');
const errorMiddleware = require('./middleware/errorMiddleware');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

//Middleware
app.use(bodyParser.json());

//Routes
app.use('/api/todos', todoRoutes);

//Error Handling Middleware
app.use(errorMiddleware);

//Start Server
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});