import { Context, DefaultState } from "koa";
import Router from "koa-router";

export const router = new Router<DefaultState, Context>();

router.get("/", async (ctx: Context) => {
  await ctx.render("index", { title: "Home Page" });
});

router.get("/about", async (ctx: Context) => {
  ctx.state = {
    currentTime: new Date(),
  };
  await ctx.render("about", { title: "About" });
});
