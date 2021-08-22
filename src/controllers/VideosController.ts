import { Request, Response } from "express";
import apiYoutube from "../providers/AxiosYoutubeApi";

class VideosController {
  async index(req: Request, res: Response): Promise<Response> {
    const { part, type, id, maxResults } = req.query;

    const data = (
      await apiYoutube.get("videos", {
        params: {
          part,
          type,
          id,
          maxResults,
        },
      })
    ).data;

    return res.json(data);
  }
}

export default new VideosController();
