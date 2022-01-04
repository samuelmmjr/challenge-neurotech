const { MongoClient } = require('mongodb');

const OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const MONGO_DB_URL = 'mongodb://localhost:27017/crm_neurotech';

const DB_NAME = 'crm_neurotech';

let db = null;

const connection = async () => {
    if (db) return Promise.resolve(db);
    const conn = await MongoClient.connect(MONGO_DB_URL, OPTIONS);
    db = conn.db(DB_NAME);
    return db;
};

module.exports = { connection };