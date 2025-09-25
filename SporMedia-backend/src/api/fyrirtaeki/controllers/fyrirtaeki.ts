import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::fyrirtaeki.fyrirtaeki', ({ strapi }) => ({
  async findBySlug(ctx) {
    const { slug } = ctx.params;

    const [entry] = await strapi
      .documents('api::fyrirtaeki.fyrirtaeki')
      .findMany({ filters: { slug: { $eq: slug } }, populate: '*' });

    if (!entry) return ctx.notFound();
    ctx.body = { data: entry };
  },
}));
