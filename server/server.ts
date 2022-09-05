import express from "express";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import cors from "cors";

import { appRouter as router } from "./router";
import { createContext } from "./context";
import { initDb } from "./service";

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use((req, _res, next) => {
  // request logger
  console.log("⬅️ ", req.method, req.path, req.body ?? req.query);

  next();
});
initDb();

app.use("/trpc", createExpressMiddleware({ router, createContext }));

app.get("/", (req, res) => {
  res.status(200).json({ message: "hello world" });
});

app.listen(PORT, () => {
  console.log(`✨✨✨✨ Listening on port ${PORT} ✨✨✨✨`);
});
