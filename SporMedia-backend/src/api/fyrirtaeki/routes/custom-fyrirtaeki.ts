export default {
  routes: [
    {
      method: 'GET',
      path: '/fyrirtaekis/slug/:slug',
      handler: 'fyrirtaeki.findBySlug',
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
  ],
};
