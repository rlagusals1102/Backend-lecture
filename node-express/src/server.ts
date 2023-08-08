import express from "express";
import multer from "multer";
import {
  path as signupPath,
  method as signupMethod,
  handler as signupHandler,
} from "./routes/signup";

export async function startServer(): Promise<void> {
  const app = express();
  const upload = multer({ dest: "static/" });

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(upload.fields([{ name: "ooo" }]));
  app.use("/static", express.static("static"));

  app[signupMethod](signupPath, signupHandler);

  const port = 3000;
  await new Promise((resolve) => {
    app.listen(port, (): void => {
      resolve(null);
    });
  });
  console.log("Server is ready!");
}
