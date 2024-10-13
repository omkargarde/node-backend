import { Hono } from "hono";

const user = new Hono();

user
  .post("/signup", (c) => {
    return c.text("signup");
  })
  .post("/signin", (c) => {
    return c.text("signin");
  });

export default user;
