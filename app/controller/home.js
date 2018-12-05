const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.logger.info('model > ' + this.app.model.Test.getData());
    this.ctx.logger.info('custom > ' + this.ctx.custom.Test.getData());
    this.ctx.renderBody(this.config.biz.test + ', egg');
  }
}

module.exports = HomeController;
