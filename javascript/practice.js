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
const aroaster=new Roaster(1);
aroaster.addname("Xin");
console.log(aroaster.names);
console.log(aroaster.maxstud);
console.log(aroaster.addname("Tao");
console.log(aroaster.names);


const labs=[{location:"Bewkes 105", seats:10},{location:"Bewkes 107", seats:1}];
for(lab of labs){
  labs.seats=labs.seats*2;
}
console.log(labs[0].seats);
