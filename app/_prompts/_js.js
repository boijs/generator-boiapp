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
    name: 'Vue',
    value: 'vue'
  },{
    name: 'React',
    value: 'react'
  },{
    name: 'Angular',
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
    name: 'BootStrap',
    value: '//cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js'
  }]
}];
