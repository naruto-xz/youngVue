<template>
    <div>
      <div id="test" v-html="title"></div>
    </div>
</template>

<script>
    export default {
      data(){
        return{
          title: ''
        }
      },
      mounted() {



        var str = 'abc';
        this.title = str.replace('c', "<span class='cred'>d</span>");
        // str = str.replace('c', "<font color=red>d</font>");
        // document.write(str);
        // this.title = `ab${str}`;



        // var el = document.getElementById("test");
        // var node = document.createElement('div');
        // el.appendChild(node);
        // el.removeChild(node);
        // el.replaceChild(newNode,oldNode);
        // el.insertBefore(newNode,existingnode);

        // $('#test').append('<div>1</div>');
        // $('#test').remove();
        // $('#test').replaceWith("<div>2</div>")
        // $('#test').after('<div>3</div>');



        // var array = [5, 4, 3, 2, 1];
        // var temp = 0;
        // for (var i = 0; i<array.length; i++ ){
        //  for (var j = 0; j<array.length; j++){
        //    if(array[j]>array[j+1]){
        //      temp = array[j + 1];
        //      array[j+1] = array[j];
        //      array[j] = temp;
        //    }
        //  }
        // }
        // console.log(array);

        // var arr = [1,2,2,3,4];
        // var arr1 = [];
        // arr.forEach(value=>{
        //   if(arr1.indexOf(value) == -1){
        //     arr1.push(value);
        //   }
        // });
        // console.log(arr1);

        // var arr = [1,2,2,3,4];
        // var arr1 = [];
        // var json = {};
        // arr.forEach(value=>{
        //   if(!json[value]){
        //     json[value] = value;
        //     arr1.push(value);
        //   }
        // });
        // console.log(arr1);




        }
    }
</script>

<style scoped>
  .cred{
    color: red;
  }
</style>
