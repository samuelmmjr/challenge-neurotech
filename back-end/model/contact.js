const { connection } = require('./connection')

const create = async (email, phoneNumber, birthday, weight) => {
    const db = await connection();
    const data = await db.collection('contact')
    .insertOne({ email, phoneNumber, birthday, weight });
    return { contact: { _id: data.insertedId, email, phoneNumber, birthday, weight } };
};

const findEmail = async (email) => {
    const db = await connection();
    const data = await db.collection('contact').findOne({ email });
    return data;
};

module.exports = { create, findEmail }