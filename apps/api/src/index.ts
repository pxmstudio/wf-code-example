import { Hono } from 'hono'
import { cors } from 'hono/cors'

type Bindings = {
  NOT_SO_SECRET_VAR: string;
  API_SECRET_KEY: string;
}

const app = new Hono<{ Bindings: Bindings }>()

app.use("*", cors({
  origin: ["https://structure-video.webflow.io"],
  allowHeaders: [
    "X-Custom-Header",
    "Upgrade-Insecure-Requests",
    "Authorization",
    "Content-Type",
  ],
  allowMethods: ["POST", "GET", "OPTIONS", "PATCH", "DELETE"],
  exposeHeaders: ["Content-Length", "X-Kuma-Revision"],
  maxAge: 600,
  credentials: true,
}))

app.get('/', (c) => {
  const randomNumber = Math.floor(Math.random() * 100);

  return c.text(randomNumber.toString());
})

export default app
