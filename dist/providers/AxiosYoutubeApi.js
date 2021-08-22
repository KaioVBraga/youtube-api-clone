"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _axios = require('axios'); var _axios2 = _interopRequireDefault(_axios);

 const apiYoutube = _axios2.default.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    key: process.env.API_YOUTUBE_KEY,
  },
}); exports.apiYoutube = apiYoutube;

exports. default = exports.apiYoutube;
