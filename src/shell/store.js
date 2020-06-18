import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default 
new Vuex.Store({
  state:{
    isLoading:true,
    activedFile:null,
    project:null,
    fileMap:{},
    theme:null,
    bootstrapCss : "vendor/bootstrap-4.4.1-dist/css/bootstrap.min.css",
    jquery : "vendor/jquery/jquery-3.4.1.min.js",
    bootstrapJs : "vendor/bootstrap-4.4.1-dist/js/bootstrap.bundle.js",
    fontAwesome : "vendor/fontawesome-free/css/all.min.css"
  },

 
  mutations:{
    activeFile(state, file){
      state.activedFile = file
    },

    projectChange(state, project){
      state.project = project
    },

    themeChange(state, theme){
      state.theme = theme
    },

    isLoading(state, isLoading){
      state.isLoading = isLoading
    },

    updateFileCode(state,data){
      const {id,code} = data;
      let project = state.fileMap[id];
      if(project){
        project.code = code;
      }
    },
    initFileMap(state,data){
      const {pageId,file} = data
      
      state.fileMap[pageId] = file
    }
  },
 
  actions: {
  },
})
