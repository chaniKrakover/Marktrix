const express = require("express")
import cors from "cors";
import helmet from "helmet";
const app = express();

app.use(helmet());
app.use(cors());

const PORT = 3002;

app.use(function (req: any, res: any, next: any) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

const personRoute = require('./src/routes/personRoute')
app.use('/person', personRoute)


app.listen(PORT, () => {
  console.log(`listeniing at port:${PORT}`)
})


