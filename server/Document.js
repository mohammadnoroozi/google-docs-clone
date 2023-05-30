const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const documentSchema = new Schema({
    _id: String,
    data: Object
})

module.exports = model("Document", documentSchema)