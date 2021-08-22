"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _VideosController = require('../../controllers/VideosController'); var _VideosController2 = _interopRequireDefault(_VideosController);

const route = _express.Router.call(void 0, );

route.get("/videos", _VideosController2.default.index);

exports. default = route;
