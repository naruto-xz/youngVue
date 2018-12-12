<template>
  <!--xui-btn 默认按钮通用样式 xui-btn-style 给出自己想额外加样式提供的类名 xui-btn-ccolor遍历样式获取具体颜色名的具体样式 xui-btn-csize遍历获取具体大小名的具体样式-->
  <!--disabled控制按钮是否可用（但本身不会添加样式）,所以要再class里面自己设置一个disabled的样式，结合起来用。-->
  <button v-if="!link" type="button" :style="this.options&&this.options.style" :class="['xui-btn xui-btn-style','xui-btn-'+ccolor,'xui-btn-'+csize,cdisabled?'disabled':'']" :disabled="cdisabled" @click="clickHandle($event)">
    <!--<i v-if="cicon" :class="cicon"></i>-->
    <slot>
      <span v-html="clabel"></span>   <!--单点插槽的用法：如果父组件中有写入的内容，会显示父组件中的内容；如果父组件中没有写入内容，则会默认暂时slot里便签的内容;-->
    </slot>
  </button>
  <!--提供a标签跳转的标签能力-->
  <!--<a v-else-if="link" :style="this.options&&this.options.style" :class="['xui-btn xui-btn-style xui-btn-link','xui-btn-'+ccolor,'xui-btn-'+csize,cdisabled?'disabled':'']" type="button" :disabled="cdisabled" @click="clickHandle($event)">-->
    <!--<i v-if="cicon" :class="cicon"></i>-->
    <!--<slot>-->
      <!--<span v-html="clabel"></span>-->
    <!--</slot>-->
  <!--</a>-->
</template>
<script>
  export default {
    props: {
      options: {
        type: Object
      },
      disabled: {},
      color: {},
      size: {},
      icon: {},
      label: {},
      text: {},
      link: {},
      isStopBubble:{}
    },
    data() {
      return {
        widgetValue: this.value
      };
    },
    computed: {
      cdisabled() {
        return this.disabled === true || (this.options && this.options.disabled === true);
      },
      ccolor() {
        return this.color || (this.options && this.options.color) || "";
      },
      csize() {
        return this.size || (this.options && this.options.size) || "small";
      },
      clabel() {
        return this.label || this.text || (this.options && this.options.label) || "";
      },
      cicon() {
        return this.icon || (this.options && this.options.icon) || "";
      },
      stopBubble() {
        return this.isStopBubble === true || (this.options && this.options.isStopBubble === true);
      }
    },
    methods: {
      clickHandle(e) {
        if(this.stopBubble) {
          e.stopPropagation();
        }
        this.$emit("click");
      }
    }
  };
</script>
<style lang="scss">
  $primary: #40a4ff;

/*  lighten() 和 darken() 两个函数都是围绕颜色的亮度值做调整的，其中 lighten() 函数会让颜色变得更亮，与之相反的 darken() 函数会让颜色变得更暗。
   这个亮度值可以是 0~1 之间，不过常用的一般都在 3%~20% 之间。*/

  $colors: (
    (name: "primary", font: #fff, color: $primary, hover: #6fbaff, active: #2d87f9),
    (name: "success", font: #fff, color: #8fc31f, hover: #abd840, active: #7baa15),
    (name: "danger", font: #fff, color: #ff4949, hover: lighten(#ff4949, 5%), active: darken(#ff4949, 5%)),
    (name: "warning", font: #fff, color: #f7ba2a, hover: lighten(#f7ba2a, 5%), active: darken(#f7ba2a, 5%))
  );

  $sizes: (
    (name: "mini", height: 22px, width: 40px),
    (name: "small", height: 26px, width: 60px),
    (name: "normal", height: 30px, width: 70px),
    (name: "big", height: 34px, width: 80px)
  );

  .xui-btn {
    display: inline-block;
    vertical-align: middle;
    box-sizing: border-box;
    height: 30px;
    min-width: 70px;
    font-size: 12px;
    line-height: 1;
    color: #444;
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 3px;
    outline: none;
    /*
    transition: property duration timing-function delay;
    规定设置过渡效果的 CSS 属性的名称。
    规定完成过渡效果需要多少秒或毫秒。
    规定速度效果的速度曲线。
    定义过渡效果何时开始
    */
    transition: color 0.1s linear, background-color 0.1s linear, border 0.1s linear, box-shadow 0.1s linear;
    font-family: "Microsoft Yahei", "\5FAE\8F6F\96C5\9ED1", "\5B8B\4F53", Arial, sans-serif;
    padding: 0px 5px;
    text-decoration: none;
    cursor: pointer;
    &.xui-btn-link {
      display: table-cell;
    }
    &:hover {
      border-color: darken(#ccc, 10%);
    }
    &.active {
      border-color: darken(#ccc, 15%);
    }
    &.disabled {
      cursor: not-allowed;
      color: #bbbec4 !important;
      background-color: #f7f7f7 !important;
      border-color: #dddee1 !important;
    }
    & > i {
      font-size: 12px;
    }
    @for $i from 1 through length($colors) {
      $item: nth($colors, $i);
      &.xui-btn-#{map-get($item, name)} {
        color: map-get($item, font);
        background: map-get($item, color);
        border-color: map-get($item, color);
        &:hover {
          background: map-get($item, hover);
          border-color: map-get($item, hover);
        }
        &:active,
        &.active {
          background: map-get($item, active);
          border-color: map-get($item, active);
        }
      }
/*      &.xui-btn-ghost {
        color: $primary;
        background: transparent;
        border-color: $primary;
        &:hover {
          color: darken($primary, 10%);
          border-color: darken($primary, 10%);
        }
        &:active,
        &.active {
          color: darken($primary, 15%);
          border-color: darken($primary, 15%);
        }
      }*/
    }

    @for $i from 1 through length($sizes) {
      $item: nth($sizes, $i);
      &.xui-btn-#{map-get($item, name)} {
        height: map-get($item, height);
        min-width: map-get($item, width);
      }
    }
  }
</style>
