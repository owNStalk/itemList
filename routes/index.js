var express = require('express');
var router = express.Router();
const itemsModel = require('../db/itemsModel.js')

//Nothing page
router.get('/', (req, res, next) => {
        res.send('Nothing~')
})

//Item info submit table
router.get('/addItem', (req, res, next) => {
        res.render('addItem')
})

//Show item
router.get('/showItems', (req, res, next) => {
        itemsModel.find().sort({_id: -1}).then(data => {
                res.render('showItems', {data})
        })
})

//Add item result
router.post('/addResult', (req, res, next) => {
        let itemData = req.body
        itemsModel.create({
                ...itemData,
                tier: Number(req.body.tier),
                cost: Number(req.body.cost)
        }).then(() => {
                res.render('modifyTip', {msg: '添加'})
        })
})

//Del single item
router.get('/delItem/:_id', (req, res, next) => {
        let _id = req.params._id
        itemsModel.deleteOne({_id}).then(() => {
                res.render('modifyTip', {msg: '删除'})
        })
})

//Update item
router.get('/updateItem/:_id', (req, res, next) => {
        let _id = req.params._id
        itemsModel.findOne({_id}).then(data => {
                res.render('updateItem', {data})
        })
})

//Submit modify doc
router.post('/updateResult/:_id', (req, res, next) => {
        let _id = req.params._id
        itemsModel.updateOne({_id}, req.body).then(() => {
                res.render('modifyTip', {msg: '更新'})
        })
})

module.exports = router;
