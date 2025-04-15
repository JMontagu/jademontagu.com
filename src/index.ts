import Koa from "koa";
import { router } from "./routes";

const port = process.env.PORT;

const app = new Koa();

app.use(router.routes());

app.listen(port, () => {
  console.log(`🚀 Server is running on port http://localhost:${port}/`);
});
