import express, { Request, Response } from "express";
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from the API!");
});

app.get("/test", (req: Request, res: Response) => {
  res.json({ message: "Test route working!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
