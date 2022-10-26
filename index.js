import express from "express";
import { connectDB } from "./db.js";
import { PORT } from "./config.js";
import routes from "./routes/routes.js";

const app = express();
connectDB();

app.use(express.json()) //Middleware

app.use(routes);

app.send('.')

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
