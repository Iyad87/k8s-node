import express from "express";
import os from "os";
import fetch from 'node-fetch'

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  const hellMessage = ` This is V2 App: Hello From the ${os.hostname}`;
  console.log(hellMessage);
  res.send(hellMessage);
});

app.get("/nginx", async (req, res)=>{

    const url = 'http://nginx'
    const response = await fetch(url);
    const body = await response.text();
    res.send(body)
})

app.listen(PORT, () => {
  console.log(`Web server is listening at port ${PORT}`);
});
