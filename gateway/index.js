import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import proxy from "express-http-proxy";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

// Auth service proxy with cookie handling
app.use("/api/auth", proxy("http://localhost:6060", {
  proxyReqOptDecorator: function(proxyReqOpts) {
    proxyReqOpts.headers['Connection'] = 'keep-alive';
    return proxyReqOpts;
  }
}));

// Message service proxy with cookie handling
app.use("/api/messages", proxy("http://localhost:7070", {
  proxyReqOptDecorator: function(proxyReqOpts) {
    proxyReqOpts.headers['Connection'] = 'keep-alive';
    return proxyReqOpts;
  }
}));

// app.use("/", proxy("http://localhost:5002"));

app.listen(PORT, () => {
  console.log("Gateway is running on PORT:" + PORT);
});