<template>
  <div>
    <div v-stat="{action: 'search', module: '首页模块'}">准备开始你的vue旅程</div>
    <div id="div1" @drop="drop($event)" @dragover="allowDrop($event)"></div>
    <br />
    <p id="drag1" draggable="true" @dragstart="drag($event)">这是一段可移动的段落。请把该段落拖入上面的矩形。</p>
  </div>
  <!--<div>-->
    <!--<draggable v-model="tags" :move="getdata" @update="datadragEnd">-->
      <!--<transition-group>-->
        <!--<div v-for="element in tags" :key="element.id">-->
          <!--{{element.name}}-->
        <!--</div>-->
      <!--</transition-group>-->
    <!--</draggable>-->
  <!--</div>-->
</template>

<script>
    // import draggable from 'vuedraggable';
    export default {
      methods: {
        drag(ev) {
          ev.dataTransfer.setData("Text",ev.target.id);
        },
        allowDrop(ev) {
          ev.preventDefault();
        },
        drop(ev) {
          let data=ev.dataTransfer.getData("Text");
          ev.target.appendChild(document.getElementById(data));
          ev.preventDefault();
        }
      }
      // components: {
      //   draggable
      // },
    }
</script>

<style scoped>
  #div1 {width:350px;height:70px;padding:10px;border:1px solid #aaaaaa;}
</style>
