const {Schema, model} = require('mongoose')

const docSchema = new Schema({
        itemName: String,
        type: String,
        tier: Number,
        cost: Number
})

const itemsModel = model('items', docSchema)

module.exports = itemsModel