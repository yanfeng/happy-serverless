import Router from 'koa-router';

const router = new Router();

router.get('/', async (ctx, next) => {
  ctx.body = 'Welcome to happy-serverless world!';
  // console.log(ctx);
});

module.exports = router;
