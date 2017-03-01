'use strict';

module.exports = [{
  type: 'checkbox',
  name: 'nodeModules',
  message: 'Which module(s) would your project needs?',
  choices: [{
    name: 'zepto',
    value: 'zepto'
  },{
    name: 'jQuery',
    value: 'jquery'
  },{
    name: 'vue.js v1',
    value: 'vue@1'
  },{
    name: 'vue.js v2',
    value: 'vue@2'
  },{
    name: 'React',
    value: 'react'
  },{
    name: 'Angular v1',
    value: 'angular@1'
  },{
    name: 'Angular v2',
    value: 'angular@2'
  }]
},{
  type: 'checkbox',
  name: 'jsLibs',
  message: 'Which thirdparty lib(s) would your project needs(import with <script> tag by html document)',
  choices: [{
    name: 'jQuery 1.10.1',
    value: '//cdn.bootcss.com/jquery/1.10.1/jquery.min.js'
  },{
    name: 'jQuery 2.0.1',
    value: '//cdn.bootcss.com/jquery/2.0.1/jquery.min.js'
  },{
    name: 'BootStrap',
    value: '//cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js'
  }]
}];
