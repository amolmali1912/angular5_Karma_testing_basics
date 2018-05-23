describe('hellotestcase', () => {
  let expected = '';
  let notExpected = '';
  
  beforeEach(()=>{
    expected = 'hellotest';
    notExpected = 'hellotest1'
  })

  afterEach(()=> {
     expected = '';
     notExpected = '';
  })

  it('should check if hellotest is hellotest', 
    ()=> { expect('hellotest').toBe(expected)
  });

  it('should check if hellotest is not be hellotest1', 
   ()=> { expect('hellotest').not.toBe(notExpected);
  }); 

} )