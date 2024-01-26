import express from "express";
const app = express();
const port = 3000;
import cors from "cors"

import { fetchData, fetchSolar } from "./src/assets/functions.js";

app.use(cors())
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    status: "success",
    data: "This route works!",
  });
});

// this makes a request but doesn't fetch the data correctly
app.get("/data", async function (req, res) {
  const data = await fetchData();
  const responseObj = {
    status: "success",
    data: data,
  };
  res.status(200).json(responseObj);
});

app.get("/solar", async function (req, res) {
  const data = await fetchSolar();
  const responseObj = {
    status: "success",
    data: data,
  };
  res.status(200).json(responseObj);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
