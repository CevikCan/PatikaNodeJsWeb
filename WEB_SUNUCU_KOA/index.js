const Koa = require('koa');
const Router = require("koa-router");

const app = new Koa();
const router = new Router();

router.get("/", async ctx => {
    ctx.body = "<h1>ANASAYFAYA HOŞGELDİNİZ</h1>";
});

router.get("/hakkimizda", async ctx => {
    ctx.body = "<h1>HAKKIMIZDA SAYFASINA HOŞGELDİNİZ</h1>";
});

router.get("/iletisim", async ctx => {
    ctx.body = "<h1>İLETİŞİM SAYFASINA HOŞGELDİNİZ</h1>";
});

app.use(router.routes());

app.listen(3000);