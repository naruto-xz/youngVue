<template>
    <div>
      <!--<div>-->
        <!--<slot>如果父组件没有插入内容，我将作为默认出现</slot> &lt;!&ndash;预留默认插槽&ndash;&gt;-->
      <!--</div>-->
      <!--<div>-->
        <!--<slot name="header"></slot>-->
        <!--<slot name="footer"></slot>-->
      <!--</div>-->
      <div>
        <slot age="28"></slot>
      </div>
    </div>
</template>

<script>
    export default {
      data(){
        return {

        }
      }
    }
</script>

<style scoped>

</style>
