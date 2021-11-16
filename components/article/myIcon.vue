<template>
  <div class="icon-wrap">
    <div class="item home" @click="goToHome">

    </div>
    <div class="item github" @click="goToGithub">

    </div>
    <div class="item qq" @click="goToQq">

    </div>
    <div class="item wechat" @click="goToWechat">

    </div>
    <div class="item weibo" @click="goToWeibo">

    </div>
    <div class="item email" @click="goToEmail">

    </div>
  </div>
</template>

<script>
export default {
  name: "myIcon",
  methods:{
    goToHome(){

    },
    goToGithub(){

    },
    goToQq(){

    },
    goToWechat(){

    },
    goToWeibo(){

    },
    goToEmail(){

    },
  }
}
</script>

<style scoped lang="less">
  .icon-wrap{
    width: 320px;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
    .item{
      cursor: pointer;
      box-sizing: border-box;
      margin-bottom: 5px;
      padding: 5px;
      border-radius: @border-radius;
      background: @color-sub-background;
      .iconfont{
        font-size: 20px;
      }
    }
  }
</style>
