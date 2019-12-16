<template>

</template>

<script>
export default {
  data () {
    return {
      tree: [
        {
          title: 'parent 1',
          expand: true,
          children: [
            {
              title: 'parent 1-1',
              expand: true,
              children: [
                {
                  title: 'leaf 1-1-1'
                },
                {
                  title: 'leaf 1-1-2'
                }
              ]
            },
            {
              title: 'parent 1-2',
              expand: true,
              children: [
                {
                  title: 'leaf 1-2-1'
                },
                {
                  title: 'leaf 1-2-1'
                }
              ]
            }
          ]
        }
      ],
      flatTree: [
        {id: 1, title: 'parent 1', parent_id: 0},
        {id: 2, title: 'parent 1-1', parent_id: 1},
        {id: 3, title: 'parent 1-2', parent_id: 1},
        {id: 4, title: 'leaf 1-1-1', parent_id: 2},
        {id: 5, title: 'leaf 1-1-2', parent_id: 2},
        {id: 6, title: 'leaf 1-2-1', parent_id: 3},
        {id: 7, title: 'leaf 1-2-2', parent_id: 3},
      ]
    }
  },
  methods: {
    operate () {
      let arr = [];
      this.tree.forEach(item => {
        //第一步先把根节点push进来
        arr.push({
          expand: item.expand,
          title: item.title
        });
        //第二步去看是否有子节点
        loop(item);
      });

      function loop(item) {
        //若没有就return
        if (!item.children || !item.children.length) {
          return;
        }
        //若有就继续循环，添加,直到没有子节点
        item.children.forEach(value => {
          arr.push({
            expand: value.expand,
            title: value.title
          });
          loop(value);
        })
      }
      console.log(arr);
    },
    operate1 () {
      let arr = [];
      this.flatTree.forEach(item => {
        //1.先设立一个根节点
        if (item.parent_id === 0) {
          arr.push(item);
          //然后去找根节点下面匹配的子节点
          loop(this.flatTree, item, item.id);
        }
      });
      function loop (data, parentItem, parentId) {
        //看父节点是否有子节点没有就加一个
        parentItem.children = parentItem.children ? parentItem.children : [];
        data.forEach(item => {
          //循环往往不同深度的子节点不断添加叶子节点
          if (item.parent_id === parentId) {
            parentItem.children.push(item);
            loop(data, item, item.id);
          }
        });
      }
      console.log(arr);
    }
  },
  mounted () {
    // this.operate();
    this.operate1();
  }
}
</script>

<style scoped>

</style>
