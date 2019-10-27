"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.INIT_ITEMS = 'INIT_ITEMS';
exports.ADD_ITEM = 'ADD_ITEM';
exports.REMOVE_ITEM = 'REMOVE_ITEM';
exports.UPDATE_ITEM = 'UPDATE_ITEM';
exports.itemsReducer = function (state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case 'INIT_ITEMS':
            return action.payload;
        case 'ADD_ITEM':
            return state.concat([
                action.payload
            ]);
        case 'REMOVE_ITEM':
            return state.filter(function (item) { return item._id !== action.payload; });
        case 'UPDATE_ITEM':
            return state.map(function (item) {
                if (item._id === action.payload._id) {
                    return {
                        _id: action.payload._id,
                        title: action.payload.title,
                        isDone: action.payload.isDone
                    };
                }
                return item;
            });
        default:
            return state;
    }
};
//# sourceMappingURL=item.reducer.js.map