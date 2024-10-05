import { app } from "./app.js";
import connectDB from "./db/index.js";

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(
        `\nServer is running on http://localhost:${process.env.PORT}`
      );
    });
  })
  .catch((error) => {
    console.error("\nMONGO DB connection Failed::", error);
  });
