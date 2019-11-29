<template>
  <div>
    <div class="login">
      <div>登录系统</div>
      <Input v-model="username" prefix="ios-contact" placeholder="请输入用户名" style="width: auto" />
      <Input v-model="password" type="password" password placeholder="请输入密码..." style="width: 200px" />
      <Button type="primary" @click="submit">登录</Button>
    </div>
  </div>
</template>

<script>
    export default {
        data () {
          return {
            title:  '表单',
            username: '',
            password: ''

          }
        },
      methods: {
        submit () {
          alert("123");
          // this.$http.post("url",{user: this.username, pwd: this.password}).then(res => {
          //   console.log(res);
          // });
        }
      }
    }
</script>

<style scoped lang="less">
  .login{
    font-size: 24px;
    color: orange;
  }
</style>
