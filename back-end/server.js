const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3001

const { createContact } = require('./controller/contact')

// d930c26c-23b7-4172-896e-a47593270ac2

const app = express();

app.use(bodyParser.json());

app.post('/contact', createContact);

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}`));