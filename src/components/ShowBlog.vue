<template>
 <el-main class="text-left">   
   <div class="container"> 
      <div class="article-title">
        <h2 class="text-center">博客总览</h2>
      </div>      
      <el-table
        :data="blogs"
        style="width: 100%">
        <el-table-column
          prop="title"
          label="标题"
          width="380">
        </el-table-column>
        <el-table-column
          prop="categories"
          label="分类"
          width="180">
        </el-table-column>
        <el-table-column
          prop="creat_time"
          label="日期"
        >
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="110">
          <template slot-scope="scope">            
            <router-link :to="'/singleblog/'+scope.row.id"> 
              <el-button type="text" size="small">查看 </el-button>
            </router-link> 
            <router-link :to="'/editblog/'+scope.row.id"> 
              <el-button type="text" size="small">编辑 </el-button>
            </router-link>             
            
            <el-button @click="delClick(scope.row.id)" type="text" size="small">删除 </el-button>          
          </template>
        </el-table-column>
      </el-table>     
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
  methods:{
    showblogs(){
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
    },
    delClick(id){
      var that = this
      this.$http.delete(`/blog/${id}.json`).then(function(data){               
        // console.log(data)
        if(data.status == 200){
          that.showblogs();
            that.$message({
                showClose: true,
                message: '恭喜你，操作成功',
                type: 'success'
            });
        }else{
          that.$message({
              showClose: true,
              message: '错了哦，新增失败'+data.statusText,
              type: 'error'
          });
        }
      })
    }
  },
  created(){    
    this.showblogs();
     
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
</style>
