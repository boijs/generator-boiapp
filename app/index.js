'use strict';

const Generators = require('yeoman-generator');
const Beautify = require('gulp-jsbeautifier');
const _ = require('lodash');
const Path = require('path');

const DEFAULT_APPNAME = 'boiapp';

module.exports = class extends Generators {
  constructor(args, opts) {
    super(args, opts);
    // argument appname is not required
    this.argument('appname', {
      desc: 'project name',
      type: String,
      required: false
    });
    // current选项代表是否在当前目录文件夹中创建项目
    this.option('current', {
      desc: 'generate app in current folder',
      type: Boolean,
      alias: 'c',
      required: false,
      default: false
    });
  }
  initializing() {
    // 美化输出文件格式
    this.registerTransformStream(Beautify());
  }
  prompting() {
    let prompts = [];
    // 如果没有指定appname则提示用户输入
    !this.options.appname && prompts.push({
      type: 'input',
      name: 'appname',
      message: 'Input your project\'s name',
      default: DEFAULT_APPNAME,
      validate: (name) => {
        return !/\s+/.test(name.trim());
      }
    });

    prompts = prompts.concat([{
        type: 'confirm',
        name: 'compateIE8',
        message: "Does your application compatibility with IE8?",
        default: true
      }])
      .concat(require('./_prompts/_js.js'))
      .concat(require('./_prompts/_style.js'))
      .concat(require('./_prompts/_html.js'));

    return this.prompt(prompts).then((res) => {
      let appname = res.appname || this.options.appname;
      let options = Object.assign({}, res, {
        appname
      });
      // dependencies
      this.pkg = options.nodeModules;
      // 渲染配置项
      this.renderOpts = options;
    });
  }
  writing() {
    this._renderTpl(this.renderOpts);
  }
  install() {
    if (!this.options.current) {
      process.chdir(Path.join(process.cwd(), this.options.appname));
    }
    this._npmInstall(this.pkg);
  }
  end() {}
    /**
     * @method
     * @private
     * @desc 根据用户配置将template模板render成对应的文件类型
     * @param  {Object} opts 用户配置项
     */
  _renderTpl(opts) {
      let destFolder = this.options.current ? "" : Path.join(this.options.appname, '/');
      // 生成package.json文件
      this.fs.copyTpl(
        this.templatePath('package.ejs'),
        this.destinationPath(Path.join(destFolder, 'package.json')),
        opts
      );
      // 生成boi-conf.js文件
      this.fs.copyTpl(
        this.templatePath('boi-conf.ejs'),
        this.destinationPath(Path.join(destFolder, 'boi-conf.js')),
        opts
      );
      // 生成html文件
      this.fs.copyTpl(
        this.templatePath('index.app.ejs'),
        this.destinationPath(Path.join(destFolder, 'src','index.' + opts.appname + '.html')),
        opts
      );
      // 生成js文件
      this.fs.copyTpl(
        this.templatePath('js/main.app.ejs'),
        this.destinationPath(Path.join(destFolder, 'src','js','main.' + opts.appname + '.js')),
        opts
      );
      // 复制js文件
      this.fs.copy(
        this.templatePath('js/**.js'),
        this.destinationPath(Path.join(destFolder, 'src','js'))
      );
      // 生成style文件
      this.fs.copyTpl(
        this.templatePath('style/main.app.ejs'),
        this.destinationPath(Path.join(destFolder, 'src','style','main.' + opts.appname + '.' +
          opts.styleSyntax)),
        opts
      );
      // 复制图片
      this.fs.copy(
        this.templatePath('assets/**/*'),
        this.destinationPath(Path.join(destFolder, 'src','assets'))
      );
      // 复制git配置文件
      this.fs.copy(
        this.templatePath('gitignore'),
        this.destinationPath(Path.join(destFolder, '.gitignore'))
      );
      // 生成package.json文件
      if (!opts.enableSprites) {
        this.fs.delete(this.destinationPath(Path.join(destFolder, 'src','assets','icons')));
      }
    }
    /**
     * @method
     * @private
     * @desc 安装node模块
     * @param  {Array} modules 需安装的node模块数组
     */
  _npmInstall(modules) {
    if (modules && _.isArray(modules) && modules.length > 0) {
      this.npmInstall(modules, {
        'save-dev': true,
        'skipMessage': true
      });
    }
  }
};
