import { Router } from "express";
/** Controllers */
import Videos from "./videos";
import Search from "./search";

const routes = Router();

const loaderRoute = [Videos, Search];

loaderRoute.map((res) => routes.use(res));

export default routes;
