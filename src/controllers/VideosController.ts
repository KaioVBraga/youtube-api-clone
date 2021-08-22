import { Request, Response } from "express";
import apiYoutube from "../providers/AxiosYoutubeApi";

class VideosController {
  async index(req: Request, res: Response): Promise<Response> {
    try {
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
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        msg: "An error ocurred !",
        err: err.message,
      });
    }
  }
}

export default new VideosController();
