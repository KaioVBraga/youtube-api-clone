import "dotenv/config";
import express from "express";
import cors from "cors";
import routes from "./routes";
import GlobalError from "./errors/GlobalError";

class App {
  public express: express.Application;

  public constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
    this.errorHandler();
  }

  private middlewares(): void {
    this.express.use(express.json());
    this.express.use(cors());
  }

  // private database():void{

  // }

  private routes(): void {
    this.express.use(routes);
  }

  private errorHandler() {
    this.express.use((err, req, res, next) => {
      if (err instanceof GlobalError) {
        return res.status(err.statusCode).json({
          status: "erro",
          message: err.message,
        });
      }

      if (process.env.NODE_ENV === "development") {
        console.log(`\x1B[31m ${err.message}`);
        console.log(`\x1b[0m`);
      }

      return res.status(500).json({
        status: "erro",
        message: "Erro interno do servidor",
        codeMessage: err.message,
      });
    });
  }
}

export default new App().express;
