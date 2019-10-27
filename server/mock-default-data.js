"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var item_model_1 = require("./models/item.model");
/**
 * Create default items if collection is empty
 */
var items = [
    { title: 'Angular 2 and Node.js connection', isDone: true },
    { title: 'MongoDB connection', isDone: true },
    { title: 'Publishing to Heroku', isDone: true },
    { title: 'Add TravisCI', isDone: true },
    { title: 'Redux implementation - rxjs/store', isDone: true },
    { title: 'Add Docker', isDone: false },
    { title: 'Add Apollo / GraphQL?', isDone: false },
    { title: 'Implement unit & e2e tests', isDone: true },
    { title: 'Server side rendering', isDone: false },
    { title: 'Code coverage', isDone: false },
    { title: 'Implement livereload', isDone: false },
    { title: 'Material design', isDone: false },
    { title: 'ngrx full support', isDone: false },
    { title: 'Sign up & Sign in', isDone: false },
    { title: 'UI framework?', isDone: false },
    { title: 'Websocket, stream data?!', isDone: false },
];
function createDefaultItems() {
    item_model_1.default.find({}).exec(function (err, results) {
        if (results.length === 0)
            item_model_1.default.create(items);
    });
}
exports.default = createDefaultItems;
//# sourceMappingURL=mock-default-data.js.map