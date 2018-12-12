<style lang="less">
  .xui-form{
    /*.form-row {*/
      /*position: relative;*/
      /*margin-left: 0;*/
      /*margin-right: 0;*/
      /*font-size: 0px;*/
      /*height: auto;*/
      /*zoom: 1;*/
      /*display: block;*/
      /*&:after,*/
      /*&:before {*/
        /*content: "";*/
        /*display: table;*/
      /*}*/
      /*&:after {*/
        /*clear: both;*/
        /*visibility: hidden;*/
        /*font-size: 0;*/
        /*height: 0;*/
      /*}*/
    /*}*/
    .group-title {
      font-size: 16px;
      padding: 5px 15px;
    }
    .ivu-alert {
      margin-bottom: 0px;
    }
    &.xui-form-show-warning {
      .sunset-field-wraning-pop-wrap {
        display: block;
      }
    }
  }
</style>
<template>
  <!--<form :class="['xui-form xui-form-style',view?'xui-form-view':'',showWarning?'xui-form-show-warning':'']" @submit.prevent="submit">-->
  <form :class="['xui-form xui-form-style',view?'xui-form-view':'',showWarning?'xui-form-show-warning':'']">
    <div class="form-row">
      <template v-for="(field,index) in fields">
        <div v-if="field.group" v-show="fieldGroupRels[field.name].visible" :class="['ivu-col ivu-col-span-24',field.groupClassName]" :style="field.groupStyle">
          <div class="group-title">
            <span v-html="field.group"></span>
            <form-toolbar v-if="field.groupToolbar" :options="field.groupToolbar" :ctx="model" @signal="operateSignal"></form-toolbar>
          </div>
        </div>
        <!--<span class="newline" v-if="newline(field)" v-html="newline(field)"></span>-->
        <!--<form-field ref="fields" :options="field" :form-options="options" :group="fieldGroupRels[field.name]" :view="view" v-model="model[field.name]" :model="model" :record="record" @change="fieldValueChange" @remove="removeField(field)"></form-field>-->
        <form-field ref="fields" :options="field" :form-options="options" :group="fieldGroupRels[field.name]" :view="view" v-model="model[field.name]" :model="model" :record="record"></form-field>
      </template>
    <!--</div>-->
    <!--&lt;!&ndash; toolbar &ndash;&gt;-->
    <!--<div v-if="!hidedefaulttoolbar&&options.toolbar!==false" style="text-align:center;">-->
      <!--<form-toolbar :options="toolbar" :ctx="model" @signal="operateSignal"></form-toolbar>-->
    </div>
  </form>
</template>

<script>
    import FormField from "./Field.vue"
    export default {
      name: "xui-form",
      components: {
        FormField
      },
      props:{
          options:{
            type: Object    //配置项
          },
          view: {}    //是否切换到视图模式
      },
      data(){
        return{
          record: null,
          model: {},
          hasModel: false,
          fieldsRefresher: 0,
          showWarning: false,   //是否展示警醒提示
          fieldValueDirty: {},
          dirtyPending: false
        }
      },
      methods: {
        init(){
          this.dirtyPending = true;
          var model = this.model,
          fields = this.fields || [], //1.先调用计算属性方法，过滤出要展示的表单项
          prall = [];
          //异步计算默认值
          // fields.forEach((field, fieldIndex) => {
          //   if (!field.name) {  //每个表单项必须指定具体的名字
          //     return;
          //   }
          //   this.$set(this.model, field.name, void 0);  //undefined === void 0;
          //   if (field.default) {
          //     prall.push(
          //       Promise.resolve()
          //         .then(() => {
          //           return Sunset.isFunction(field.default) ? field.default() : field.default;
          //         })
          //         .then(value => {
          //           return {
          //             name: field.name,
          //             value: value
          //           };
          //         })
          //     );
          //   } else if (field.defaultFirst || Sunset.isNumber(field.defaultIndex)) {
          //     prall.push(
          //       Promise.resolve()
          //         .then(() => {
          //           return Utils.generateItems(field);
          //         })
          //         .then(items => {
          //           var index = field.defaultFirst
          //             ? 0
          //             : field.defaultIndex >= 0 ? field.defaultIndex : items.length + field.defaultIndex;
          //           if (items && items.length) {
          //             return {
          //               name: field.name,
          //               value: items[index].value
          //             };
          //           } else if (Sunset.isFunction(this.$refs.fields[fieldIndex].$children[0].defaultValue)) {
          //             return {
          //               name: field.name,
          //               value: this.$refs.fields[fieldIndex].$children[0].defaultValue(index)
          //             };
          //           } else {
          //             return {
          //               name: field.name,
          //               value: void 0
          //             };
          //           }
          //         })
          //     );
          //   }
          // });
        }
      },
      computed: {
        fieldGroupRels(){   //展示规则组
          var fields = this.options.fields;   //拿到表单里的所有子配置项
          var rels = {};
          var group = {
            visible: true,  //是否可见,默认可见
            premise: true,  //是否可见，默认可见
            disabled: false   //是否可用,默认可用
          };
          fields.forEach(f => {
            if (f.group) {
              group = {
                visible: Sunset.isFunction(f.groupVisible)
                  ? f.groupVisible(this.model)
                  : f.groupVisible !== false,
                premise: Sunset.isFunction(f.groupPremise)
                  ? f.groupPremise(this.model)
                  : f.groupPremise !== false,
                disabled: Sunset.isFunction(f.groupDisabled)
                  ? f.groupDisabled(this.model)
                  : f.groupDisabled === false
              };
            }
            rels[f.name] = group;   //为每个具体组件，设置一个表单展示规则，控制其在表单中的展示性
          });
        },
        fields() {    //展示某一项是否展示
          debugger;
          var model = this.model;
          return ((this.options && this.options.fields) || []).filter(field => {    //过滤展示表单项
            if (field.premise) {
              return field.premise(model);
            } else {
              return true;
            }
          });
        },
      },
      mounted(){
        this.init();
      }
    }
</script>
