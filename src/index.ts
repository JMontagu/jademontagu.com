import Koa from "koa";
import serve from "koa-static";
import views from "@ladjs/koa-views";
import { router } from "./routes";

const port = process.env.PORT;

const app = new Koa();

app.use(
  views(__dirname + "/views", {
    map: { html: "underscore" },
    extension: "ejs",
    options: {
      layout: "template",
    },
  })
);
app.use(serve(__dirname + "/static"));
app.use(router.routes());

app.listen(port, () => {
  console.log(`🚀 Server is running on port http://localhost:${port}/`);
});
