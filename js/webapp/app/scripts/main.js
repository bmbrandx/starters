
  var ns= {};

  ns.objName = function(foo, bar) {
    this.message = ""+foo + " " + bar+""
  };

  ns.objName.prototype.methodCall = function() {
    console.log(this.message)
  };

  var obj = new ns.objName('hello', 'world');

/* Optional Init for external scripts */
// (function(){

//   //change path to data source when being deployed to server, same domain only
//   var class = new ClassName("js/data.json");
//   class.classMethod("option");
// });
