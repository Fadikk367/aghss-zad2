const {getOneFile, addOneFile, getAllData, deleteOneFile } = require('../db');

const { respondWithError } = require('../helpers');

const { ObjectId } = require('mongodb');

function verifyID(id, res) {
    if (!ObjectId.isValid(id)) {
        respondWithError(res, 'Invalid document id');
    }
}

exports.getOne = async (req, res) => {
    const id = req.params.id;
    verifyID(id, res);
    try {
        const file = await getOneFile(id);
        res.json(file);
    } catch(err) {
        respondWithError(res, 'File with given id does not exist');
    }
};

exports.getAll = async (req, res) => {
    const data = await getAllData();
    res.json(data);
};

exports.addOne = async (req, res) => {
    const newFile = req.body;
    if (!newFile) {
        respondWithError(res, 'Missing file');
    }
    try {
        const newFileID = await addOneFile(newFile);
        res.json(newFileID);
    } catch(err) {
        respondWithError(res, 'Failed to insert a file');
    }
};

exports.delete = async (req, res) => {
    const id = req.params.id;
    verifyID(id, res);
    try {
        const deletedFile = await deleteOneFile(id);
        res.json(deletedFile);
    } catch(err) {
        respondWithError(res, 'File with given id does not exist');
    }
};