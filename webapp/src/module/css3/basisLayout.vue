<template>
  <div class="layout">
    <div>布局</div>
    <p>单列自适应布局</p>
    <div class="content">
      <div class="a">a</div>
      <div class="b">b</div>
    </div>
    <div>浮动</div>
    <div class="float">
      <div class="c">c</div>
      <div class="d">d</div>
    </div>
    <div>对齐方式</div>
    <div class="align">
      <div class="e">e</div>
    </div>
    <div class="vertical">
<!--      <img src="./test.jpg"></img>-->
      <Icon type="md-add-circle" />
      <span class="text">文本</span>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
  .layout{
    //1.利用float + calc
    /*.content{*/
      /*width: 500px;*/
      /*height: 100px;*/
      /*background: orange;*/
      /*.a{*/
        /*float: left;*/
        /*width: 100px;*/
        /*height: 100%;*/
        /*background: #00bb00;*/
      /*}*/
      /*.b{*/
        /*float: left;*/
        /*width: calc(100% - 100px);*/
        /*height: 100%;*/
        /*background: aquamarine;*/
      /*}*/
    /*}*/
    //2.利用inline-block + calc (要给父级加font-size: 0，子级重加font-size，处理换行符解析成空格的间隙问题)
    /*.content{*/
    /*  width: 500px;*/
    /*  height: 200px;*/
    /*  background: orange;*/
    /*  !*font-size: 0;*!*/
    /*  .a{*/
    /*    display: inline-block;*/
    /*    width: 100px;*/
    /*    height: 100%;*/
    /*    background: #00bb00;*/
    /*    !*font-size: 12px;*!*/
    /*  }*/
    /*  .b{*/
    /*    display: inline-block;*/
    /*    width: calc(100% - 100px);*/
    /*    height: 100%;*/
    /*    background: aquamarine;*/
    /*    !*font-size: 12px;*!*/
    /*  }*/
    /*}*/
    //3.float + overflow  利用overflow: hidden 形成BFC,防止浮动的影响
    /*.content{*/
    /*  width: 500px;*/
    /*  height: 200px;*/
    /*  background: orange;*/
    /*  .a{*/
    /*    float: left;*/
    /*    width: 100px;*/
    /*    height: 100%;*/
    /*    background: #00bb00;*/
    /*  }*/
    /*  .b{*/
    /*    overflow: hidden;*/
    /*    height: 100%;*/
    /*    background: aquamarine;*/
    /*  }*/
    /*}*/
    //4.absolute
    /*.content{*/
    /*  width: 500px;*/
    /*  height: 200px;*/
    /*  background: orange;*/
    /*  position: relative;*/
    /*  .a{*/
    /*    width: 100px;*/
    /*    height: 100%;*/
    /*    background: #00bb00;*/
    /*    position: absolute;*/
    /*  }*/
    /*  .b{*/
    /*    height: 100%;*/
    /*    background: aquamarine;*/
    /*    position: absolute;*/
    /*    left: 100px;*/
    /*    right: 0;*/
    /*  }*/
    /*}*/
    //5.flex布局
    /*.content{*/
      /*width: 500px;*/
      /*height: 200px;*/
      /*background: orange;*/
      /*display: flex;*/
      /*.a{*/
        /*width: 100px;*/
        /*height: 100%;*/
        /*background: #00bb00;*/
      /*}*/
      /*.b{*/
        /*height: 100%;*/
        /*background: aquamarine;*/
        /*flex: 1;*/
      /*}*/
    /*}*/
    //6.grid布局
    /*.content{*/
      /*width: 500px;*/
      /*height: 200px;*/
      /*background: orange;*/
      /*display: grid;*/
      /*grid-template-columns: 100px auto;*/
      /*.a{*/
        /*background: #00bb00;*/
      /*}*/
      /*.b{*/
        /*background: aquamarine;*/
      /*}*/
    /*}*/

    //浮动
    /*.float{*/
    /*  background: #00bb00;*/
    /*  .c{*/
    /*    float: left;*/
    /*    height: 100px;*/
    /*    width: 100px;*/
    /*  }*/
    /*  &:after{*/
    /*    content: '';*/
    /*    display: table;*/
    /*    clear: both;*/
    /*  }*/
    /*}*/

    //对齐方式
    //水平或垂直居中
    /*.align{*/
    /*  !*text-align: center; //子元素不定宽*!*/
    /*  height: 100px;*/
    /*  !*line-height: 100px; //子元素不定高*!*/
    /*  background: aquamarine;*/

    /*  width: 500px;*/
    /*  display: table-cell;  //子元素定高*/
    /*  vertical-align: middle;*/
    /*  .e{*/
    /*    !*width: 100px;*!*/
    /*    background: #00bb00;*/
    /*    !*margin: 0 auto; //子元素定宽*!*/
    /*    height: 40px;*/
    /*  }*/
    /*}*/

    //absolute水平垂直居中
    /*.align{*/
    /*  height: 100px;*/
    /*  background: aquamarine;*/
    /*  position: relative;*/
    /*  .e{*/
    /*    position: absolute;*/
    /*    width: 100px;*/
    /*    height: 40px;*/
    /*    background: #00bb00;*/
    /*    left: 0;*/
    /*    right: 0;*/
    /*    top: 0;*/
    /*    bottom: 0;*/
    /*    margin: auto;*/   //核心平分父元素剩余空间
    /*  }*/
    /*}*/
    .vertical{
      width: 100px;
      height: 100px;
      /*line-height: 100px;*/
      border: 1px solid #ccc;
      i{
        font-size: 30px;
      }
      img{
        width: 60px;
        height: 60px;
        vertical-align: middle;
      }
      .text {
        /*display: inline-block;*/
        /*width: 100px;*/
        /*height: 100px;*/
        /*border: 1px solid #ccc;*/
        vertical-align: middle;
      }
    }
  }
</style>
