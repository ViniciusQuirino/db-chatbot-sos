import app from "./app";
import AppDataSource from "./data-source";
import "dotenv/config";

let port = process.env.PORT || 3000;

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected!");
    app.listen(+port, "0.0.0.0", () => {
      console.log(`🚀 Server is running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
