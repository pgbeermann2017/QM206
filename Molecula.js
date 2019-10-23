class Atomo{
    constructor(simbolo,x,y){
      this.simbolo=simbolo;
      this.x=x;
      this.y=y;
    }

}
class Enlace{
    constructor(n1,n2,tipo){
        this.n1=n1;
        this.n2=n2;
        this.tipo=tipo;
     }


}
class Molecula{

   constructor(data){
        this.data=data;
        this.atomos=[];
        this.enlaces=[];
    
        var a=data.split(" ");
        var natomos=a.shift();
        var nbonds=a.shift();
        this.nbonds=nbonds;
        this.natomos=natomos;
        for(var i=0;i<natomos;i++){
           var s=a.shift();
           var x=parseFloat(a.shift());
           var y=parseFloat(a.shift());
           this.atomos.push(new Atomo(s,x,y));
         }
    
        for(var i=0;i<nbonds;i++){
           var n1=parseInt(a.shift());
           var n2=parseInt(a.shift());
           var tipo=parseInt(a.shift());
           this.enlaces.push(new Enlace(n1,n2,tipo));
          }
  
   }




}