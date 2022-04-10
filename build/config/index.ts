import path from 'path';
import { common_env, env } from './env.config';

const rootPath = process.cwd();

const config = {
  host: '127.0.0.1',
  port: 8866,
  rendererSource: path.resolve(rootPath, 'src'),
  template: path.resolve(rootPath, 'template/index.html'),
  // static: path.resolve(rootPath, 'assets'),
  static: {
    directory: path.resolve(rootPath, 'assets'),
    publicPath: '/assets',
  },
  dist: path.resolve(rootPath, 'dist'),
  release: path.resolve(rootPath, 'release'),

  proxy: {},

  common_env,
  env,
};

export default config;
