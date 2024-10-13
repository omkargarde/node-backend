import { Hono } from "hono";

const blog = new Hono();

blog
  .post("/", (c) => {
    return c.text("post blog");
  })
  .put("/", (c) => {
    return c.text("put blog");
  })
  .get("/:id", (c) => {
    const id = c.req.param("id");
    console.log(id);
    return c.text("blog id");
  })
  .get("/bulk", (c) => {
    return c.text("blog bulk");
  });

export default blog;
