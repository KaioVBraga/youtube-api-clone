import { Request, Response } from "express";
import apiYoutube from "../providers/AxiosYoutubeApi";

class SearchController {
  async index(req: Request, res: Response): Promise<Response> {
    const { part, type, q, maxResults } = req.query;

    const data = (
      await apiYoutube.get("search", {
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

export default new SearchController();
