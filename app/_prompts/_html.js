'use strict';

module.exports = [{
  type: 'list',
  name: 'htmlEngine',
  message: 'Which engine would you like to render your view',
  choices: [{
    name: 'Html',
    value: 'html'
  },{
    name: 'Jade',
    value: 'jade'
  },{
    name: 'Swig',
    value: 'swig'
  },{
    name: 'Ejs',
    value: 'ejs'
  },{
    name: 'Handlebar',
    value: 'handlebar'
  }],
  default: 0
}];
