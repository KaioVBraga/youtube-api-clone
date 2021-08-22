import { Router } from "express";
/** Controllers */
import Healthcheck from "./Healthcheck";
import Videos from "./Videos";
import Search from "./Search";

const routes = Router();

const loaderRoute = [Healthcheck, Videos, Search];

loaderRoute.map((res) => routes.use(res));

export default routes;
