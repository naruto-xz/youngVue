<template>
  <div>
    <div>块级标签</div>
    <div>a</div>
    <p>b</p>
    <h1>c</h1>
    <ul>
      <li>1</li>
      <li>2</li>
    </ul>

    <div>行级标签</div>
    <span>a</span>
    <a href="">b</a>
    <label for="">c</label> <!--标签为 input 元素定义标注（标记）-->
    <i>d</i>

    <div>行内块标签</div>
    <input type="text" />
    <img src="" alt="">
    <button>c</button>

    <div>表单</div>
    <form action="">
      <input type="text"/>
      <input type="password"/>
      <select>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <input type="radio" value="男" name="sex">男
      <input type="radio" value="女" name="sex">女
      <input type="checkbox" value="足球">足球
      <input type="checkbox" value="篮球">篮球
      <input type="checkbox" value="排球">排球
      <textarea  cols="30" rows="10"></textarea>
    </form>

    <!--锚点-->
    <div>
      <a href="#b">b</a>
      <div id="a" name="a">a</div>
      <div id="b" name="b">b</div>
      <a href="#a">a</a>
    </div>

  </div>
</template>

<script>
    export default {
    }
</script>

<style scoped lang="less">
  #a{
    width: 500px;
    height: 1000px;
    background: red;
    margin-bottom: 50px;
  }
  #b{
    width: 500px;
    height: 1000px;
    background: orange;
  }
</style>
