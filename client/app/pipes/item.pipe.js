"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var StatusPipe = (function () {
    function StatusPipe() {
    }
    StatusPipe.prototype.transform = function (array, status) {
        // array.sort((a: any, b: any) => {
        //   return a.isDone - b.isDone;
        // });
        switch (status) {
            case 'all':
                return array;
            case 'started':
                return array.filter(function (item) { return !item.isDone; });
            case 'completed':
                return array.filter(function (item) { return item.isDone; });
            default:
                return array;
        }
    };
    StatusPipe = __decorate([
        core_1.Pipe({ name: 'status' })
    ], StatusPipe);
    return StatusPipe;
}());
exports.StatusPipe = StatusPipe;
//# sourceMappingURL=item.pipe.js.map