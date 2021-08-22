import { Router } from "express";
import VideosController from "../../controllers/VideosController";

const route = Router();

route.get("/videos", VideosController.index);

export default route;
