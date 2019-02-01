/**
 * @returns {(ctx: Egg.Context, next: any) => Promise<any>}
 */
module.exports = () => {
  return async (ctx, next) => {
    ctx.logger.info('visit ', ctx.request.url);
    await next();
  };
};
