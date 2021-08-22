"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _SearchController = require('../../controllers/SearchController'); var _SearchController2 = _interopRequireDefault(_SearchController);

const route = _express.Router.call(void 0, );

route.get("/search", _SearchController2.default.index);

exports. default = route;
