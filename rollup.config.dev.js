import typescript from 'rollup-plugin-typescript2';

import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import path from 'path';
import { fileURLToPath } from 'node:url';

import babel from '@rollup/plugin-babel';
//babel: 转换为es5语法，需要安装@babel/core，@babel/preset-env
import terser from '@rollup/plugin-terser';
//terser 压缩代码
import replace from '@rollup/plugin-replace';

import cssnanoPlugin from 'cssnano';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import clear from 'rollup-plugin-clear';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
import htmlTemplate from '@rollup/plugin-html';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

// 浏览器中不和node环境一样，没有process全局变量
const Global = `var process = {
  env: {
    NODE_ENV: 'production'
  }
};
`;

export default {
  input: path.resolve(__dirname, 'examples/index.tsx'),
  output: [
    {
      file: path.resolve(__dirname, 'dist/main.js'),
      format: 'cjs',
      banner: Global // output.banner属性的作用是在打包后的文件顶部添加值。
    }
  ],
  plugins: [
    clear({
      targets: ['dist']
    }),
    postcss({
      plugins: [autoprefixer(), cssnanoPlugin()],
      modules: true // 可以使用 import style from "./style.less"
    }),
    commonjs(),
    nodeResolve({
      extensions: ['.ts', '.tsx']
    }),
    typescript(),
    babel({
      exclude: 'node_modules/**', // 只编译源代码，忽略第三方代码
      extensions: ['.ts', '.tsx'], //需要手动配置后缀，不然文件ts文件不会被转成es5
      babelHelpers: 'runtime'
    }),
    replace({
      preventAssignment: true,
      'process.browser': true,
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    terser(),
    // 补充的
    // 用于生成html文件，并将打包后的JS文件引入到HTML文件中
    htmlTemplate({
      fileName: 'index.html',
      title: 'welcome',
      template: ({ attributes, bundle, files, publicPath, title }) => {
        // 给入口文件生成 script 标签
        const scripts = (files.js || [])
          .map(({ fileName }) => {
            // const attrs = makeHtmlAttributes(attributes.script);
            const attrs = 'sss';
            return `<script src="${publicPath}${fileName}"></script>`;
          })
          .join('\n');

        return `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>${title}</title>
        </head>
        <body>
          <div id="root"></div>
          ${scripts}
        </body>
      </html>
              `;
      }
    }),
    // 搭建rollup 开发服务器，充当本地web服务器。类似 webpack-dev-serve，功能也差不多
    serve({
      port: 5000,
      host: 'localhost',
      // 当遇到错误后重定向到哪个文件
      historyApiFallback: path.resolve(__dirname, 'dist/index.html'),
      // 静态资源
      contentBase: [path.resolve(__dirname, 'dist')],
      // 在开发服务中添加一些输出的一些信息
      onListening: function (server) {
        console.log('\x1B[33m%s\x1b[0m:', 'The rollup dev Serve is start!!!');
        const address = server.address();
        const host = address.address === '::' ? 'localhost' : address.address;
        // by using a bound function, we can access options as `this`
        const protocol = this.https ? 'https' : 'http';
        console.log(
          '\x1B[36m%s\x1B[0m',
          `Serve is listening in ${address.port}`
        );
        console.log(
          '\x1B[35m%s\x1B[39m',
          `You can click   ${protocol}://${host}:${address.port}/   go to Browser`
        );
        console.log(
          '\x1B[34m%s\x1B[39m',
          `You can click   ${protocol}://localhost:${address.port}/  go to Browser`
        );
      }
    }),
    // 热更新自动刷新浏览器
    livereload('examples')
  ]
};
