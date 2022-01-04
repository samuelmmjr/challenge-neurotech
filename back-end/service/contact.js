const Joi = require('../middleware/schema');
const { create, findEmail } = require('../model/contact');


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

    const searchUser = await findEmail(email)
    if (searchUser) {
        return { status: 409, error: 'Contato já registrado' };
    }
    await create(email, phoneNumber, birthday, weight); //verificar craição na api
    return { status: 201, message: 'Usuário criado com sucesso' };
}

module.exports = { createContact };
