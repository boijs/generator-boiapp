'use strict';

const Generators = require('yeoman-generator');

module.exports = Generators.Base.extend(
  constructor(){
    Generators.Base.apply(this,arguments);
  },
  log(){
    console.log('test log')
  }
);
