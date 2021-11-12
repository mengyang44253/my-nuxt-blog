<template>
  <div class="nav">
    <div class="content layout">
      <!--  logo  -->
      <div class="logo">
        <h1>
          博客名字
        </h1>
        <nuxt-link to="/">
          <el-image class="image" src="" fit="cover" />
        </nuxt-link>
      </div>
      <!--  菜单-->
      <div class="nav-wrapper">
        <el-menu class="nav-menu" mode="horizontal" @select="selectSomeMenu">
          <el-menu-item index="/">
            首页
          </el-menu-item>
          <el-menu-item index="/">
            详情
          </el-menu-item>
        </el-menu>
      </div>
      <!--  搜索-->
      <div class="search-wrap">
        <el-input class="search-input" size="small" placeholder="请输入文章名" v-model="searchValue">
          <el-button @click="search" slot="append" icon="el-icon-search" />
        </el-input>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "defaultHeader",
  data(){
    return {
      searchValue:null
    }
  },
  methods:{
    selectSomeMenu(){

    },
    search(){

    },
  }
}
</script>

<style scoped lang="less">
  .nav{
    width: 100%;
    height: 60px;
    background-color: @bg-color;
    margin-bottom: 20px;
    .content{
      display: flex;
      align-items: center;
      height: 100%;
      .logo{
        width: 100px;
        h1{
          text-indent: -9999em;
        }
        .image{
          width: 87px;
          height: 30px;
        }
      }
      .nav-wrapper{
        flex: 1;
      }
      .search-wrap{
        width: 300px;
      }
    }

  }
</style>
