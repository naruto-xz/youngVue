<template>
    <div>
      <h5>canvas</h5>
      <div id="canvas">
        <canvas id="myGraph" width="400px" height="400px"></canvas>
      </div>
      <input type="text" id="aaa">
    </div>
</template>

<script>
    export default {
      methods:{
        operate(){
          var canvas = document.getElementById("myGraph");
          var ctx = canvas.getContext('2d');
          //绘制矩形
          // function rect(){
          //   ctx.fillStyle = '#fff000';  //必须写在绘制前面,默认是黑色
          //   ctx.fillRect(10,10,50,50);  //绘制矩形
          //   ctx.strokeRect(10,10,50,50);  //绘制边框
          //   ctx.clearRect(20,20,20,20);   //清除区域
          // }
          // rect();

          //绘制路径

          //绘制一条线
          // function line(){
          //   ctx.beginPath();
          //   ctx.moveTo(100,100);
          //   ctx.lineTo(200,200);  //划线
          //   // ctx.lineWidth = 30;
          //   // ctx.lineCap = "round";
          //   // ctx.lineCap = "butt";
          //   // ctx.lineCap = "square";
          //   // ctx.setLineDash([20,5]);
          //   // ctx.closePath();
          //   ctx.stroke();
          // }
          // line();
          //
          // //绘制三角形
          // function draw() {
          //   ctx.beginPath();
          //   ctx.moveTo(220,220);
          //   ctx.lineTo(260,220);
          //   ctx.lineTo(260,260);
          //   ctx.lineTo(220,220);
          //   ctx.closePath();  //合并路径
          //   // ctx.fillStyle = "#2dca2f";  //设置填充颜色
          //   ctx.fillStyle = "rgba(45,202,47,0.2)";  //设置填充颜色透明度
          //   ctx.strokeStyle = "#ff0000";  //设置边框颜色
          //   ctx.lineWidth = 5;  //设置线宽
          //   // ctx.lineCap = 'butt';
          //   // ctx.lineCap = 'round';
          //   ctx.lineJoin = 'round'; //线与线交合处的样式
          //   ctx.fill(); //进行填充
          //   ctx.stroke(); //画边线
          // }
          // draw();
          //
          // //绘制圆形
          // function circle() {
          //   ctx.beginPath();
          //   // ctx.moveTo(100,300);
          //   ctx.arc(100,300,40,0,2*Math.PI); //π为180度
          //   ctx.stroke();
          // }
          // circle();
          //
          // //绘制圆弧的两种方式
          // function arc1() {
          //   ctx.beginPath();
          //   //参数1、2 圆心   参数3 半径  参数4 起始角度  参数5：终点角度
          //   ctx.arc(300,300,60,0,Math.PI/3);
          //   // ctx.closePath();
          //   // ctx.fill();
          //   ctx.stroke();
          // }
          // arc1();
          //
          // function arc2() {
          //   ctx.beginPath();
          //   ctx.moveTo(300,300);  //定义起点
          //   //参数1、2：控制点1坐标   参数3、4：控制点2坐标  参数5：圆弧半径
          //   ctx.arcTo(360,300,360,360,60);
          //   // ctx.closePath();
          //   // ctx.fill();
          //   ctx.stroke();
          // }
          // arc2();

          //绘制文本
          // function text() {
          //   // ctx.fillStyle = "#000000";
          //   // ctx.strokeStyle = "green";
          //   ctx.font = "50px sans-serif";
          //   ctx.fillText("菜鸟加油",100,100);
          //   ctx.strokeText("菜鸟加油",100,200);
          //   ctx.direction = 'rtl';
          //   // ctx.strokeText("菜鸟加油", 200, 200);
          // }
          // text()

          //渐变
          // function lineGradient() {
          //   var grad = ctx.createLinearGradient(0,0,200,0); //创建一个线性渐变
          //   grad.addColorStop(0,"red"); //设置起始渐变颜色
          //   // grad.addColorStop(0.5,"green"); //设置中间渐变颜色
          //   grad.addColorStop(1,"white"); //设置终点渐变颜色
          //   ctx.fillStyle = grad;   //填充渐变
          //   ctx.fillRect(0,0,200,200);
          // }
          // lineGradient();
          //
          // function radialGradient(){
          //   //前三个参数指定的是起点圆的原心（x和y）及半径，后三个参数指定的是终点圆的原心（x和y）及半径。
          //   //一般把起点圆心与终点圆心设置成一样的，只是两个的半径设置成不一样
          //   var rad = ctx.createRadialGradient(50,50,5,50,50,50);
          //   rad.addColorStop(0,"red");
          //   rad.addColorStop(1,"white");
          //   ctx.fillStyle = rad;
          //   ctx.fillRect(0,0,200,200);
          // }
          // radialGradient();


          // function drawImage() {
          //   var img = new Image();   // 创建img元素
          //   img.src = '/static/image/test1.png';
          //   img.onload = function(){
          //     ctx.drawImage(img, 0, 0)
          //     // ctx.drawImage(img, 0, 0,300,300)
          //     // ctx.drawImage(img,0,0,50,50,200,200,150,150)
          //   };
          // }
          // drawImage();

          // function translate() {
          //   ctx.translate(50,50); //此时坐标为100,100
          //   ctx.strokeRect(10,10,100,100);
          //   ctx.translate(50,50); //此时坐标为100,100
          //   ctx.strokeRect(10,10,100,100);
          // }
          // translate();

          // function rotate() { //​	旋转的中心是坐标原点。
          //   ctx.translate(100,100);
          //   ctx.rotate(Math.PI / 180 * 45);
          //   ctx.strokeRect(0,0,100,100);
          // }
          // rotate();

          // function scale() {
          //   ctx.scale(2,2); //全部放大了
          //   // ctx.scale(0.5,0.5); //全部缩小了
          //   ctx.strokeRect(50,50,50,50);
          // }
          // scale();

          // function state() {
          //   ctx.save(); //保存原点坐标
          //   ctx.translate(20,20);
          //   ctx.fillRect(0,0,50,50);
          //   ctx.restore();  //恢复到原点坐标
          //   ctx.translate(70,70);
          //   ctx.fillRect(0,0,50,50);
          // }
          // state();

          // function clip(){
          //   ctx.beginPath();
          //   ctx.arc(100,100, 50, 0, Math.PI * 2);
          //   ctx.clip();
          //   ctx.fillStyle = "pink";
          //   ctx.fillRect(100, 100, 100,100);
          // }
          // clip();




        }
      },
      mounted() {
        this.operate();
      }

    }
</script>

<style scoped lang="less">
  #canvas{
    canvas{
      border: 1px solid red;
    }
  }
</style>
