import express, { json } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";

import blogsRouter from "./routes/blogRoutes.js";
import categoriesRouter from "./routes/categoryRoutes.js";
import userRouter from "./routes/userRoutes.js";
import emailRouter from "./routes/emailRoutes.js";

import globalErrorHandler from "./controllers/errorController.js";
import AppError from "./utils/appError.js";

import fileUpload from "express-fileupload";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Body parser, reading data from body in req.body
app.use(json({ limit: "10kb" }));

app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(fileUpload());

app.use(cookieParser());

// enable CORS for all routes
app.use(cors({ credentials: true, origin: process.env.FRONTEND_URL }));

// Allow server to serve static files
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/blogs", blogsRouter);
app.use("/api/categories", categoriesRouter);
app.use("/api/users", userRouter);
app.use("/api/emails", emailRouter);

app.all("*", (req, res, next) => {
  next(
    new AppError(
      `Can't find the page ${req.protocol}://${req.get("host")}${
        req.originalUrl
      } on this server! 😢`,
      404
    )
  );
});

app.use(globalErrorHandler);

export default app;
