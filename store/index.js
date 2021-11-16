export const state = () => ({
  menu:[],
  articleCount:null,
  articleRead:null,
  commentCount:null,
  articlePraise:null,
  sideTag:null,
  newComment:[],
  hotArticle:[]
})

export const mutations = {
  updateMenu(state,payload){
    state.menu=payload
  },
  updateArticleCount(state,payload){
    state.articleCount=payload
  },
  updateArticleRead(state,payload){
    state.articleRead=payload
  },
  updateCommentCount(state,payload){
    state.commentCount=payload
  },
  updateArticlePraise(state,payload){
    state.articlePraise=payload
  },
  updateNewComment(state,payload){
    state.newComment=payload
  },
  updateHotArticle(state,payload){
    state.hotArticle=payload
  }
}

export const actions = {
  async nuxtServerInit({commit, dispatch}, {req}) {
    //获取nav数据

  }
}
