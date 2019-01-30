<template>
 <el-main class="text-left">   
    <h2 class="text-center">博客总览</h2>
    <div>
      <div v-for="blog in blogs" :key="blog.id">
        <router-link :to="'/singleblog/'+blog.id"><h2>{{blog.title}}</h2>  </router-link>
        
      </div>
    </div>
 </el-main>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      blogs:[],
    }
  },
  created(){
    
    var that = this
   this.$http.get('/blog.json',this.blog)
    .then(function(res){    
    
      var blogsArray = [];
       for(var key in res.data){        
        res.data[key].id= key; 
        blogsArray.push(res.data[key])
      }
      that.blogs = blogsArray      
    })
     
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
</style>
