const { ObjectId } = require('mongodb');

const { getDb } = require('./client.js');

function getCollection() {
    const db = getDb();
    return db.collection(process.env.COLLECTION_NAME);
}

exports.getAllData = async () => {
    const collection = getCollection();
    const data = await collection.find().toArray();
    return data;
};

exports.getOneFile = async (id) => {
    const collection = getCollection();
    const file = await collection.findOne( { _id: ObjectId(id) });
    if(file === null) {
        throw new Error('File with given id does not exist');
    }
    return file;
};

exports.deleteOneFile = async (id) => {
    const collection = getCollection();
    const deletedFile = await collection.findOneAndDelete( { _id: ObjectId(id) } );
    if (deletedFile.value === null) {
        throw new Error('File with given id does not exist');
    }
    return deletedFile.value;
};

exports.addOneFile = async (file) => {
    const collection = getCollection();
    const { insertedId } = await collection.insertOne(file);
    if (insertedId === null) {
        console.error('Failed do insert a file');
        throw new Error('Failed to insert a file');
    }
    return insertedId;
};
