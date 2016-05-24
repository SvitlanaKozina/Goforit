var unit = require('../js/dist/gcd_for_spec.js');

describe("unit", function() {
  it("it should call GCD method", function() {
    //prepare
    var result;
    //act
    result = unit.GCD(6,3);
    //assert  
    expect(result).toBe(3);        
  });
  
   it("it should call GCD method, check '0'", function() {
    //prepare
    var result;
    //act
    result = unit.GCD(0,0);
    //assert  
    expect(result).toEqual(NaN);        
  });
  
  it("it should call GCD method, check 'integer' ", function() {
    //prepare
    var result;
    //act
    result = unit.GCD(1.1,2.2);
    //assert  
    expect(result).toBe(undefined);        
  });  
});