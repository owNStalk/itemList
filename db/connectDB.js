const {connect} = require('mongoose')

const connectDB = (success, fail) => {
        connect('mongodb://127.0.0.1:27017/itemList').then(success).catch(fail)
}

module.exports = connectDB