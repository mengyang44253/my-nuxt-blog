<template>
  <div class="nav">
    <div class="content layout">
      <!--  logo  -->
      <div class="logo">
        <h1>Dylan Blog</h1>
        <nuxt-link to="/">
          <el-image class="image" src="" fit="cover"/>
        </nuxt-link>
      </div>
      <!--  nav-->
      <div class="nav-wrapper">
        <el-menu>

        </el-menu>
      </div>
      <!--  search-->
      <div class="search">
        <el-input >

        </el-input>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "defaultHeader"
}
</script>

<style scoped>

</style>
