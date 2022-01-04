const Joi = require('../middleware/schema');
const { create, findEmail } = require('../model/contact');
const axios = require('axios');
const { hapikey } = require('../config/config')
const check = (data) => {
    const { error } = Joi.Contact.validate(data);

    if (error) {
        return { status: 400, error: error.details[0].message };
    }
    return false;
}

const createContact = async (data) => {
    const checked = check(data);

    if (checked) {
        return checked;
    }
    const { email, phoneNumber, birthday, weight } = data;

    await axios({
        method: 'post',
        url: `https://api.hubapi.com/contacts/v1/contact/createOrUpdate/email/${email}/?hapikey=${hapikey}`,
        data: {
            "properties": [
                { "property": "email", "value": email },
                { "property": "phone", "value": phoneNumber },
                { "property": "date_of_birth", "value": birthday },
                { "property": "peso", "value": weight },
            ]
        }
    })
        .then((res) => {
            console.log(res.status, res.data, "Contato cadastrado com sucesso")
        })
        .catch((error) => {
            console.log(error)
        })

    const searchUser = await findEmail(email)
    if (searchUser) {
        return { status: 409, error: 'Contato já registrado' };
    }
    await create(email, phoneNumber, birthday, weight); //verificar craição na api
    return { status: 201, message: 'Usuário criado com sucesso' };
}

module.exports = { createContact };
