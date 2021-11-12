<template>
  <div class="side-wrap">
    <!--  小站-->
    <div class="placard side-wrap mb10">
      <div class="title">
        个人介绍
      </div>
      <div class="user">
        <div class="top">
          <div class="left">
            <el-image style="width:50px;height: 50px;border-radius:50%" :src="myAvatar" fit="cover"/>
          </div>
          <div class="right">
            <div class="name">
              Dylan
            </div>
            <div class="signature">
              山不在高，有仙则名。
            </div>
          </div>
        </div>
        <div class="bottom">
          <div class="item">
            <div class="num">
              {{ articleCount }}
            </div>
            <div class="text">
              文章
            </div>
          </div>
          <div class="item">
            <div class="num">
              {{ articleRead }}
            </div>
            <div class="text">
              浏览
            </div>
          </div>
          <div class="item">
            <div class="num">
              {{ commentCount }}
            </div>
            <div class="text">
              评论
            </div>
          </div>
          <div class="item">
            <div class="num">
              {{ articlePraise }}
            </div>
            <div class="text">
              获赞
            </div>
          </div>
        </div>
      </div>
      <div class="myicon">
        <MyIcon/>
      </div>
    </div>
    <!--  评论-->
    <div class="comment side-wrap mb10">
      <div class="title">
        最新评论
      </div>
      <div class="comment-wrap plr20">

      </div>
    </div>
    <!--  热门文章-->
    <div class="hot-article side-wrap mb10">
      <div class="title">

      </div>
      <div class="hot-article-wrap plr20">

      </div>
    </div>
    <!--  文章归档-->
    <div class="archive side-wrap mb10">

    </div>
    <!--  标签-->
    <div class="tag side-wrap mb10">
      <div class="title">

      </div>
      <div class="tag-wrap plr20">

      </div>
    </div>
    <!--  友链-->
    <div class="friend side-wrap">
      <div class="title">

      </div>
    </div>
  </div>
</template>

<script>

import {mapState} from 'vuex'
export default {
  name: "defaultSide",
  components:{

  },
  data(){
    return {

    }
  },
  computed:mapState(),
  mounted(){

  },
  methods:{

  }
}
</script>

<style scoped>

</style>
