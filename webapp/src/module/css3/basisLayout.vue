<template>
  <div class="layout">
    <div>布局</div>
    <p>单列自适应布局</p>
    <div class="content">
      <div class="a">a</div>
      <div class="b">b</div>
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
    /*  width: 500px;*/
    /*  height: 100px;*/
    /*  background: orange;*/
    /*  .a{*/
    /*    float: left;*/
    /*    width: 100px;*/
    /*    height: 100%;*/
    /*    background: #00bb00;*/
    /*  }*/
    /*  .b{*/
    /*    float: left;*/
    /*    width: calc(100% - 100px);*/
    /*    height: 100%;*/
    /*    background: aquamarine;*/
    /*  }*/
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
    /*  width: 500px;*/
    /*  height: 200px;*/
    /*  background: orange;*/
    /*  display: flex;*/
    /*  .a{*/
    /*    width: 100px;*/
    /*    height: 100%;*/
    /*    background: #00bb00;*/
    /*  }*/
    /*  .b{*/
    /*    height: 100%;*/
    /*    background: aquamarine;*/
    /*    flex: 1;*/
    /*  }*/
    /*}*/
    //6.grid布局
    /*.content{*/
    /*  width: 500px;*/
    /*  height: 200px;*/
    /*  background: orange;*/
    /*  display: grid;*/
    /*  grid-template-columns: 100px auto;*/
    /*  .a{*/
    /*    background: #00bb00;*/
    /*  }*/
    /*  .b{*/
    /*    background: aquamarine;*/
    /*  }*/
    /*}*/

  }
</style>
