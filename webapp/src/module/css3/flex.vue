<template>
    <div>
      <!--水平垂直居中-->
      <div class="box">
        <div class="a">a</div>
      </div>
      <!--最后一项右对齐-->
      <div class="box-right">
        <div class="a">a</div>
        <div class="b">b</div>
      </div>
      <!--父容器属性-->
      <div class="box1">
        <div class="b">b</div>
        <div class="c">c</div>
      </div>
      <!--子元素属性-->
      <div class="box2">
        <div class="e">e</div>
        <div class="f">f</div>
      </div>
      <!--均分-->
      <div class="box3">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style lang="less" scoped>
  //水平垂直居中
  .box{
    display: flex;
    justify-content: center;  //子元素定宽不定宽都可以水平居中
    align-items: center;  //子元素定高不定高都可以垂直居中
    background: aquamarine;
    height: 200px;
    .a{
      width: 100px;
      height: 40px;
      background: #00bb00;
    }
  }
  .box-right{
    display: flex;
    /*justify-content: space-between;*/
    background: antiquewhite;
    .a{
      width: 200px;
    }
    .b{
      margin-left: auto;
    }
  }
  /*.box1{*/
  /*  display: flex;*/
  /*  !*flex-direction: column;*!*/
  /*  !*flex-wrap: wrap;*!*/
  /*  .b{*/
  /*    width: 100px;*/
  /*    background: aquamarine;*/
  /*  }*/
  /*  .c{*/
  /*    background: #00bb00;*/
  /*  }*/
  /*}*/

  .box2{
    display: flex;
    width: 500px;
    height: 200px;
    background: orange;
    align-items: center;
    margin-bottom: 20px;
    .e{
      /*flex-grow: 2; //放大比例*/
      /*flex-shrink: 0;*/
      width: 100px;
      height: 40px;
      background: aquamarine;
    }
    .f{
      /*flex-grow: 1;*/     //默认值为0
      /*flex-shrink: 1;*/   //默认值为1
      /*flex-basis: 80%;  //占据整个剩余空间的比例*/
      align-self: flex-start; //以自己的方式对齐位置
      flex: 1;
      height: 30px;
      background: #00bb00;
    }
  }
  .box3{
    display: flex;
    width: 500px;
    div:nth-child(1){
      flex: 1;
      background: orange;
    }
    div:nth-child(2){
      flex: 2;
      background: beige;
    }
    div:nth-child(3){
      flex: 3;
      background: aquamarine;
    }
    div:nth-child(4){
      flex: 4;
      background: orchid;
    }
  }

</style>
