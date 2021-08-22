import { Request, Response } from "express";
import apiYoutube from "../providers/AxiosYoutubeApi";

class SearchController {
  async index(req: Request, res: Response): Promise<Response> {
    try {
      const { part, type, q, maxResults } = req.query;

      const { data } = await apiYoutube.get("search", {
        params: {
          part,
          type,
          q,
          maxResults,
        },
      });
      return res.json(data);
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        msg: "An error ocurred !",
        err: err.message,
      });
    }
  }
}

export default new SearchController();
