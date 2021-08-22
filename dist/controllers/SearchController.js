"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _AxiosYoutubeApi = require('../providers/AxiosYoutubeApi'); var _AxiosYoutubeApi2 = _interopRequireDefault(_AxiosYoutubeApi);

class SearchController {
  async index(req, res) {
    const { part, type, q, maxResults } = req.query;

    const data = (
      await _AxiosYoutubeApi2.default.get("search", {
        params: {
          part,
          type,
          q,
          maxResults,
        },
      })
    ).data;

    return res.json(data);
  }
}

exports. default = new SearchController();
