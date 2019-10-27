"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var mongoose = require("mongoose");
var body_parser_1 = require("body-parser");
var item_route_1 = require("./routes/item.route");
var mock_default_data_1 = require("./mock-default-data");
var index_1 = require("../config/index");
var nodeEnv = process.env.NODE_ENV || 'development';
var configEnv;
// Run specific environment
(nodeEnv === 'production')
    ? configEnv = index_1.config.production
    : configEnv = index_1.config.development;
// fix deprication warning (https://github.com/Automattic/mongoose/issues/4291#issuecomment-230312093)
mongoose.Promise = global.Promise;
mongoose.connect(configEnv.MONGODB_URI, {}, function (err) {
    if (err)
        return err;
    console.log("The mongodb has been connected on: " + configEnv.MONGODB_URI);
});
var app = express();
var PORT = process.env.PORT || 1337;
app.use(body_parser_1.json());
app.use(body_parser_1.urlencoded({ extended: false }));
if (nodeEnv !== 'production') {
    // client path for any Angular 2 compiled script
    app.use('/client', express.static(path.join(__dirname, configEnv.SRC)));
    // Use node modules path as default
    app.use('/node_modules', express.static(path.join(__dirname, '../node_modules')));
    // System.js bundler
    app.use('/', express.static(path.join(__dirname, '../tools')));
}
// Public folder to serve html (it's looking for index.html by default)
app.use('/', express.static(path.join(__dirname, configEnv.SRC)));
// Router
app.use('/api', item_route_1.default);
// Listening server on port ${PORT}
app.listen(PORT, function () {
    console.log('listening on port: ' + PORT);
});
mock_default_data_1.default();
//# sourceMappingURL=app.js.map