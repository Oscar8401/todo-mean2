"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    development: {
        SRC: '../client',
        MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/meant-stack-todo-dev'
    },
    production: {
        SRC: '../public',
        MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/meant-stack-todo-prod'
    }
};
//# sourceMappingURL=index.js.map