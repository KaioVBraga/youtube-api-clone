import { Router } from "express";
import SearchController from "../../controllers/SearchController";

const route = Router();

route.get("/search", SearchController.index);

export default route;
