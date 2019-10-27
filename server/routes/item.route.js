"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var item_model_1 = require("../models/item.model");
var itemRouter = express_1.Router();
itemRouter.get('/items', function (req, res, next) {
    item_model_1.default.find({}).sort({ 'isDone': 1 }).exec(function (err, results) {
        if (err)
            return err;
        res.json(results);
    });
});
itemRouter.post('/items', function (req, res, next) {
    if (!req.body.title.trim() && req.body.title.trim().length === 0) {
        res.status(400).json({ message: 'You cannot create title without string' });
        return;
    }
    req.body.title = req.body.title.trim();
    item_model_1.default.create(req.body, function (err, result) {
        if (err)
            res.status(400).send(err);
        res.json(result);
    });
});
itemRouter.delete('/items/:id', function (req, res, next) {
    item_model_1.default.remove({ _id: req.params.id }).exec(function (err, result) {
        if (err)
            res.status(400).send(err);
        res.json(req.params.id);
    });
});
itemRouter.put('/items/:id', function (req, res, next) {
    if (!req.body.title.trim() && req.body.title.trim().length === 0) {
        res.status(400).json({ message: 'You cannot update title without string' });
        return;
    }
    req.body.title = req.body.title.trim();
    item_model_1.default.update({ _id: req.params.id }, req.body).exec(function (err, result) {
        if (err)
            res.status(400).send(err);
        res.json(req.body);
    });
});
exports.default = itemRouter;
//# sourceMappingURL=item.route.js.map