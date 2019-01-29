<!--<template>-->
    <!--<div id="element" :class="{'show':show}" @click="handle">createElement用法</div>-->
<!--</template>-->

<script>
    export default {
      data(){
        return {
          show: true
        }
      },
      //createElement构成了Vue Virtual Dom 模板，它有3个参数：
      // 1.第一个参数必选，可以是 HTML 标签，也可以是一个组件或函数；
      // 2.第二个是可选参数，数据对象，在 template 中使用。
/*    {
      //和:class一样的样式属性
      'class': {
      foo: true,
        bar: false
    },
      'style': {
      color: 'red'
    },
      //正常的html属性
      attrs:{
        id: 'element'
      },
      //组件props
      props:{
        level: 2
      },
      //DOM属性
      DomProps: {
        innerHTML: 'baz'
      },
      // 自定义事件监听器on
      on:{
        click: this.handle
      }
      ...
    },*/
      // 3.第三个是子节点，也是可选参数，用法一致。

      render(createElement){
        return createElement(
          // {String | Object | Function}
          // 一个 HTML 标签字符串，组件选项对象，或者解析上述任何一种的一个 async 异步函数。必需参数。
          'div',
          // {Object}
          // 一个包含模板相关属性的数据对象
          // 你可以在template中使用这些特性。可选参数。
          {
            attrs:{
              id: 'element'
            },
            class:{
              show: this.show
            },
            on:{
              click: this.handle
            }
          },
          'createElement用法',
          // {String | Array}
          // 子虚拟节点 (VNodes)，由 `createElement()` 构建而成，
          // 也可以使用字符串来生成“文本虚拟节点”。可选参数。
          // [
          //   createElement('h5', '一则头条'),
          //   createElement('h5', '二则头条'),
          // ]
        )
      },
      methods: {
        handle(){
          console.log(123);
        }
      }
    }
    // 就此例而言， template 写法明显比 Render 写法要可读而且简洁，所以要在合适的场景使用Render 函数，否则只会增加负担。
</script>

<style scoped>
  .show{
    color: red;
  }
</style>
