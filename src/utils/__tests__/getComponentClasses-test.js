var getComponentClasses = require('../../../../utils/getComponentClasses');

describe('getComponentClasses', function() {
  
  describe('with invalid arguments', function() {
    
    it('display and error message when no arguments', function() {
       var result = getComponentClasses();
       expect(result).toThrow('no default class provided');  
    });

  });

});