import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import route from "@/routes";
import config, { env } from "@/configs/env";
import * as cors from "cors";
import * as database from "@/configs/database";
import * as redis from "./configs/redis";
import * as mailer from "@/utils/send_mail";

// Initialize application
const app = express();
const port = config.PORT;

// Initialize middleware
app.use(morgan(env === "dev" ? "dev" : "tiny")); // Logger
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cookieParser());
app.use(helmet()); // Protect known attack types

app.use(
  cors.default({
    origin: config.FRONTEND,
    credentials: true,
    methods: ["GET", "PUT", "POST", "DELETE"],
    optionsSuccessStatus: 200,
    allowedHeaders: ["Content-Type, Authorization"],
  })
);

// Initialize app's routes
route(app);

if (require.main === module) {
  app.listen(port, async () => {
    await redis.startup();
    console.log("📕 [redis]: Connected to redis");
    await database.connect();
    console.log("📒 [mongo]: Connected to mongo");
    // await mailer.startup();
    // console.log("💌 [database]: Connected to mailer");

    console.log(`✅ [server]: Server is running at http://localhost:${port}`);
  });
}

export default app;
