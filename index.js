function receivesAFunction(callback) {   
    if (typeof callback === 'function') {
      callback();
  }
}
function returnsANamedFunction() {
    function Quby() {      
    }
    return Quby;
}
function returnsAnAnonymousFunction() {
    return function(){
        
    } 
}