<template>
  <div class="detail">
    <div class="title">
      <div class="left">
        <div class="tag-icon">
          {{ articleDetail.label_data.filter(item => item.label_type === 1)[0].label_name }}
        </div>
        <div class="article-title textOverFlow" :title="articleDetail.title" @click="goToDetail">
          {{ articleDetail.title|textFormat }}
        </div>
      </div>
      <div class="right">
        {{ articleDetail.createTime|secondFormat("LLLLL") }}
      </div>
    </div>
    <div class="content my-multi-ellipsis--l3">
      {{ articleDetail.content|fullTextFormat }}
    </div>
    <div class="original">
      <div class="left" @click="goToDetail">
        阅读原文
      </div>
      <div class="right">
        <span>
          1000
        </span>
        <span>
          100
        </span>
        <span>
          100
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detail"
}
</script>

<style scoped>

</style>
