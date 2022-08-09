try{
  this.Vue = this.Vue ?? Vue
}catch{}
try{
  window.Vue = window.Vue ?? Vue
}catch{}
console.log({this:this, window, globalThis});
