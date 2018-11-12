'use strict';

function registerHelpers(patternlab, Handlebars) {
  Handlebars.registerHelper('compare', function (v1, operator, v2, options) {
    'use strict';
    var operators = {
      '==': v1 == v2 ? true : false,
      '===': v1 === v2 ? true : false,
      '!=': v1 != v2 ? true : false,
      '!==': v1 !== v2 ? true : false,
      '>': v1 > v2 ? true : false,
      '>=': v1 >= v2 ? true : false,
      '<': v1 < v2 ? true : false,
      '<=': v1 <= v2 ? true : false,
      '||': v1 || v2 ? true : false,
      '&&': v1 && v2 ? true : false,
      'typeof': typeof v1 == v2 ? true : false
    };
    if (operators.hasOwnProperty(operator)) {
      if (operators[operator]) {
        return options.fn(this);
      }
      return options.inverse(this);
    }
    return console.error('Error: Expression "' + operator + '" not found');
  });

  Handlebars.registerHelper("math", function(lvalue, operator, rvalue, options) {
    lvalue = parseFloat(lvalue);
    rvalue = parseFloat(rvalue);

    return {
      "+": lvalue + rvalue,
      "-": lvalue - rvalue,
      "*": lvalue * rvalue,
      "/": lvalue / rvalue,
      "%": lvalue % rvalue
    }[operator];
  });

  Handlebars.registerHelper("concat", function() {
    var string = '';
    for(var arg in args){
      if(typeof args[arg] !== 'object'){
        string += args[arg];
      }
    }
    return string;
  });
}

module.exports = registerHelpers;