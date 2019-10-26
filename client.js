const { MongoClient } = require('mongodb');

let client;

function getClient() {
    if (client === null || client === undefined) {
        throw new Error('Not connected to the database');
    } else {
        return client;
    }
}

exports.connect = async () => {
    try {
        client = await MongoClient.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to the database');
    } catch(err) {
        console.log('Failed to connect to the database');
        console.log(err);
    }
};

exports.getDb = () => {
    const client = getClient();
    return client.db(process.env.DB_NAME);
};