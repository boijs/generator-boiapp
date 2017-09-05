'use strict';

module.exports = [{
  type: 'list',
  name: 'htmlEngine',
  message: 'Which engine would you like to render your view',
  choices: [{
    name: 'Html',
    value: 'html'
  },{
    name: 'Ejs',
    value: 'ejs'
  },{
    name: 'Handlebars',
    value: 'handlebars'
  }],
  default: 0
}];
