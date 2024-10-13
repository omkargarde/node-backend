import { Hono } from "hono";
import blog from "./api/v1/blog";
import user from "./api/v1/user";

const app = new Hono();

app
  .get("/", (c) => {
    return c.text("Hello Hono!");
  })
  .route("/api/v1/user", user)
  .route("/api/v1/blog", blog);

export default app;
