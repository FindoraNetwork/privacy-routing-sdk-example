const path = require('path');
const { SRC_ROOT } = require('./getPath');

const devEntry = path.resolve(SRC_ROOT, 'index.tsx');
const proEntry = path.resolve(SRC_ROOT, 'index.tsx');

const webpackEntry = process.env.NODE_ENV === 'development' ? devEntry : proEntry;

module.exports = {
  webpackEntry,
};
