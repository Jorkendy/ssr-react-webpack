import express, { Application, Request, Response } from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter as Router } from "react-router-dom";

import App from "../client/App";
import Routes from "../routes";

const context = {};

class Server {
  public app: Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  private config() {
    this.app.use(express.static("dist/client"));
  }

  private routes() {
    this.app.get("*", (req, res) => {
      return res.send(this.HTML({ url: "/404" }, context));
    });

    Routes.forEach(route => {
      this.app.get(route.url, (req, res) => {
        return res.send(this.HTML(req, context));
      });
    });
  }

  private HTML(req: any , context: any) {
    const body = renderToString(
      <Router location={req.url} context={context}>
        <App />
      </Router>
    );

    return `<html>
    <head>
        <title>React basic SSR </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
    <body style="margin:0;">
        <div id="app">
           ${body}
        </div>
        <script src="client.js"></script>
    </body>
    </html>`;
  }

  public start(port: number): void {
    this.app.listen(port, () => {
      console.log("[express] hosted at http://localhost:" + port);
    });
  }
}

new Server().start(3000);
