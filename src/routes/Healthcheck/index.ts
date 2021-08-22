import { Router } from "express";

const route = Router();

route.get("/healthcheck", (req, res) => {
  res.json("ALL GOOD");
});

export default route;
