<template>

</template>

<script>
    export default {
      methods:{
        operate(){

          // function Point(x,y) {
          //    this.x =x;
          //    this.y =y;
          // }
          // Point.prototype.toString = function () {
          //   return '('+this.x+','+this.y+')'
          // };
          // var p =new Point(1,2);
          // console.log(p);

          class Bar {
            constructor(x,y){
              this.x = x;
              this.y = y;
            }
            // toString(){
            //   return '('+this.x+','+this.y+')'
            // }
            toString(){
              return '('+this.x+','+this.y+')'
            }
          }

          var p = new Bar(1,2);
          console.log(p);
          console.log(p.toString());




        }
      }
    }
</script>

<style scoped>

</style>
