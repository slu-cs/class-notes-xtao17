const Roaster=function(maxstud){
  this.names=[];
  this.maxstud=maxstud;
}
Roaster.prototype.addname=function(aname){
  if(this.names.length<this.maxstud){
    this.names.push(aname);
    return true;
  }
  return false;
}
const aroaster=new Roaster(15);
aroaster.addname("Xin");
console.log(aroaster.names);
