'use strict';

const Generators = require('yeoman-generator');
const Beautify = require('gulp-jsbeautifier');
const _ = require('lodash');

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
  }
  initializing() {
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
      let options = Object.assign({},res,{
        appname
      });
      this._renderTpl(options);
      this._npmInstall(options.nodeModules);
    });
  }
  configuring() {

  }
  default () {

  }
  install() {

  }
  end() {

  }
  _renderTpl(opts){
    // 生成package.json文件
    this.fs.copyTpl(
      this.templatePath('package.ejs'),
      this.destinationPath('package.json'),
      opts
    );
    // 生成boi-conf.js文件
    this.fs.copyTpl(
      this.templatePath('boi-conf.ejs'),
      this.destinationPath('boi-conf.js'),
      opts
    );
    // 生成html文件
    this.fs.copyTpl(
      this.templatePath('index.app.ejs'),
      this.destinationPath('src/index.'+opts.appname+'.html'),
      opts
    );
    // 生成js文件
    this.fs.copyTpl(
      this.templatePath('js/main.app.ejs'),
      this.destinationPath('src/js/main.'+opts.appname+'.js'),
      opts
    );
    // 生成style文件
    this.fs.copyTpl(
      this.templatePath('style/main.app.ejs'),
      this.destinationPath('src/style/main.'+opts.appname+'.'+opts.styleSyntax),
      opts
    );
    // 复制图片
    this.fs.copy(
      this.templatePath('assets/**/*'),
      this.destinationPath('src/assets/')
    );
    // 生成package.json文件
    if(!opts.enableSprites){
      this.fs.delete(this.destinationPath('src/assets/icons'));
    }
  }
  _npmInstall(modules){
    if(modules&&_.isArray(modules)&&modules.length>0){
      this.log('Installing node modules......');
      this.npmInstall(modules,{
        'save-dev': true
      });
    }
  }
};
