const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3001

const { createContact } = require('./controller/contact')

const app = express();

app.use(bodyParser.json());

app.post('/contact', createContact);

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}`));