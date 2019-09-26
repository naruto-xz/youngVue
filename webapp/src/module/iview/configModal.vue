<template>
    <div>
      <Button @click="add">添加</Button>
      <Button @click="edit(personValue)">编辑</Button>
      <Modal v-model="show" :title="title">
          <Input v-model="clonePerson.name" placeholder="请输入姓名" />
          <Input v-model="clonePerson.age" placeholder="请输入年龄" />
      </Modal>
    </div>
</template>

<script>
import clone from "clone-deep"
export default {
  data () {
    return {
      show: false,
      title: '测试',
      person: {
        name: '',
        age: ''
      },
      clonePerson: {},
      personValue: {
        name: '张三',
        age: '23'
      }
    }
  },
  methods: {
    add () {
      this.clonePerson = clone(this.person);
      this.show = true;
    },
    edit (val) {
      this.clonePerson = clone(val);
      this.show = true;
    }
  }
}
</script>

<style scoped>

</style>
