'use strict';

const path = require('path');
const koa = require('koa');
const koaRouter = require('koa-router');
const render = require('koa-ejs');
const serve = require('koa-static');

const app = new koa();
const router = new koaRouter();

const d3js = require('./controllers/d3js');

render(app, {
  root: path.join(__dirname, 'views'),
  layout: 'layout',
  viewExt: 'ejs',
  cache: false,
  debug: false,
});

app.use(serve('./public'));
app.use(serve('./public'));

router.get('home', '/', (ctx) => {});
router.get('deaths', '/d3js/deaths', d3js.deaths);

app.use(router.routes()).use(router.allowedMethods());

app.listen(8080, () => console.info('Running on port 8080'));
