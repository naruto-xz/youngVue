import loadingComponent from "./loading.vue";

var loading = {
    install: function (Vue) {
        Vue.component("load",loadingComponent);
    },
    eat: function () {
      console.log(123)
    }
};

export default loading;
