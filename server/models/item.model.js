"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var itemSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: 'Title cannot be blank'
    },
    isDone: Boolean
});
var Item = mongoose.model('Item', itemSchema);
exports.default = Item;
//# sourceMappingURL=item.model.js.map