<template>
    <div id="container">
        <div class="item1"></div>
        <div class="item2"></div>
        <div class="item3"></div>
        <div class="item4"></div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style>
  #container {
    width: 400px;
    height: 150px;
    background-color: #ffeead;
    border: 1px solid #666;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  #container > div {
    width: 70px;
    height: 50px;
  }

  /*#container div:nth-child(2n) {*/
    /*background-color: lightgreen;*/
  /*}*/

  /*#container div:nth-child(2n+1) {*/
    /*background-color: lightpink;*/
  /*}*/

  :root{
    --lightgreen:lightgreen;
    --lightpink:lightpink;
  }

  #container div:nth-child(2n) {
    background-color: var(--lightgreen);
  }

  #container div:nth-child(2n+1) {
    background-color: var(--lightpink);
  }

  .item1{
    --black:black;
    background-color: var(--black)!important;
  }

</style>
