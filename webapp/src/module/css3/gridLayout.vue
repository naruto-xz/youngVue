<template>
  <div>
    <div class="box">
      <div class="a" :style="{color:color}">1</div>
      <div class="b">2</div>
    </div>
  </div>
</template>

<script>
    export default {
      data(){
        return{
          color: 'red',



          // settings: {
          //   data: [],
          //   width: '100%',
          //   height: 600,
          //   colWidths: 80,
          //   rowHeights: 24,
          //   columns: 10,
          //   rows: 20,
          //   colHeaders: false,
          //   rowHeaders: false,
          //   manualColumnMove: true,
          //   manualRowMove: true,
          //   manualColumnResize: true,
          //   manualRowResize: true,
          //   readOnly: true,
          //   search: true,
          //   fixedRowsTop: 1,
          //   fixedColumnsLeft: 2
          // },



          // data: [
          //   ['20190101', 10, 11, 12, 13, true],
          //   ['20190201', 20, 11, 14, 13, true],
          //   ['20190301', 30, 15, 12, 13, true],
          //   ['20190401', 32, 213, 21, 312, true],
          //   ['20190501', 32, 213, 21, 312, true],
          //   ['20190601', 32, 213, 21, 312, true],
          //   ['20190701', 32, 213, 21, 312, true],
          //   ['20190801', 32, 213, 21, 312, true],
          //   ['20190901', 32, 213, 21, 312, true]
          //   ['20191001', 32, 213, 21, 312, true]
          // ]



          //
          // int[] bmp1 = new int[4800];
          // for (int i = 0 ; i < 4800 ; i++) {
          //   bmp1[i] = i;
          // }
          //
          // int[][] bmp2 = new int[80][60];
          // for (int i = 0 ; i < 80 ; i++) {
          //   for (int j = 0 ; j < 60 ; j++) {
          //     bmp2[i][j] = i+j;
          //   }
          // }
          //
          // Long start = System.nanoTime();
          // for (int y = 0; y<60; y++){
          //   int res = bmp1[40 + 80*y];
          // }
          // System.out.println("原始数据类型-本次耗时1："+(System.nanoTime() - start));
          //
          // start = System.nanoTime();
          // for(int y = 0; y<60; y++){
          //   int res = bmp2[40][y];
          // }
          // System.out.println("原始数据类型-本次耗时2："+(System.nanoTime() - start));





        }
      },
    }
</script>

<style lang="less" scoped>
  .box{
    width: 300px;
    height: 300px;
    background: red;
    .a{
      width: 100px;
      height: 100px;
      background: yellow;
    }
    .b{
      width: 100px;
      height: 100px;
      background: green;
    }
  }
</style>
