"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var items_service_1 = require("../../services/items.service");
var store_1 = require("@ngrx/store");
var item_reducer_1 = require("../../reducers/item.reducer");
var ItemsComponent = (function () {
    function ItemsComponent(_itemsService, _store) {
        this._itemsService = _itemsService;
        this._store = _store;
        this.newItem = { title: '', isDone: false };
        this.statuses = ['all', 'started', 'completed'];
        this.items = _store.select('items');
    }
    ItemsComponent.prototype.ngOnInit = function () {
        this.getItems();
        this.status = this.statuses[0];
    };
    ItemsComponent.prototype.getItems = function () {
        var _this = this;
        this._itemsService.getItems().subscribe(function (res) {
            _this._store.dispatch({ type: item_reducer_1.INIT_ITEMS, payload: res });
        });
    };
    ItemsComponent.prototype.addItem = function (e, newItem) {
        var _this = this;
        e.preventDefault();
        this._itemsService.addItem(newItem).subscribe(function (res) {
            _this._store.dispatch({ type: item_reducer_1.ADD_ITEM,
                payload: {
                    _id: res._id,
                    title: res.title,
                    isDone: res.isDone
                }
            });
            _this.errorMsg = null;
        }, function (err) { return _this.errorMsg = err.json().item; });
        this.newItem.title = '';
    };
    ItemsComponent.prototype.removeItem = function (id) {
        var _this = this;
        this._itemsService.removeItem(id).subscribe(function (res) {
            _this._store.dispatch({ type: item_reducer_1.REMOVE_ITEM, payload: res.json() });
        });
    };
    ItemsComponent.prototype.updateStatus = function (isDone, item) {
        var updatedItem = Object.assign({}, item, {
            isDone: isDone
        });
        this.updateItem(updatedItem);
    };
    ItemsComponent.prototype.updateTitle = function (e, item) {
        if (e.keyCode === 13) {
            e.preventDefault();
            var title = e.target.textContent;
            var updatedItem = Object.assign({}, item, {
                title: title
            });
            this.updateItem(updatedItem);
        }
    };
    ItemsComponent.prototype.setStatus = function (status) {
        this.status = status;
    };
    ItemsComponent.prototype.updateItem = function (item) {
        var _this = this;
        this._itemsService.updateItem(item).subscribe(function (res) {
            _this._store.dispatch({ type: item_reducer_1.UPDATE_ITEM, payload: res.json() });
            _this.errorMsg = null;
        }, function (err) { return _this.errorMsg = err.json().item; });
    };
    ItemsComponent = __decorate([
        core_1.Component({
            selector: 'items',
            templateUrl: './app/components/item/items.component.html',
            styleUrls: ['./app/components/item/items.component.css'],
            providers: [items_service_1.ItemsService],
        }),
        __metadata("design:paramtypes", [items_service_1.ItemsService,
            store_1.Store])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=items.component.js.map