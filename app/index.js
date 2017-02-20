'use strict';

const Generators = require('yeoman-generator');
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
      console.log(res)
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
  _npmInstall(modules){
    if(modules&&_.isArray(modules)&&modules.length>0){
      this.npmInstall(modules,{
        'save-dev': true
      });
    }
  }
};
