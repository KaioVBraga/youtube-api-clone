"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
/** Controllers */
var _videos = require('./videos'); var _videos2 = _interopRequireDefault(_videos);
var _search = require('./search'); var _search2 = _interopRequireDefault(_search);

const routes = _express.Router.call(void 0, );

const loaderRoute = [_videos2.default, _search2.default];

loaderRoute.map((res) => routes.use(res));

exports. default = routes;
