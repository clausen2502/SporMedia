'use strict';
const slugify = require('@sindresorhus/slugify');

const SLUG_OPTS = {
  separator: '-',
  lowercase: true,
  decamelize: false,
  customReplacements: [
    ['þ','th'],['Þ','Th'],['ð','d'],['Ð','D'],['æ','ae'],['Æ','Ae'],['ö','o'],['Ö','O'],
  ],
};

module.exports = {
  beforeCreate(event) {
    const { data } = event.params;
    if (!data.slug && data.title) data.slug = slugify(data.title, SLUG_OPTS);
  },
  beforeUpdate(event) {
    const { data } = event.params;
    // only fill if missing
    if (data.title && !data.slug) data.slug = slugify(data.title, SLUG_OPTS);
  },
};
