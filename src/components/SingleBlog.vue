<template>
    <el-main class="text-left">   
        <el-container>
         
        <div class="text-center singleBlog p15" style="flex:1">           
            <h2>{{blog.title}}</h2>
            <h5>{{blog.author}} </h5>            
            <div class="line"></div>
            <div style="min-height:500px;">
                {{blog.content}}
            </div>
        </div>
        <el-aside class="p15" width="200px">
             <el-tag
                v-for="tag in blog.categories"
                :key="tag"                
                type="success">
                {{tag}}
            </el-tag>
        </el-aside>
        
        
        </el-container>
    </el-main>
</template>

<script>
    export default {
        name:"single-blog",
        data() {
            return {
                id:this.$route.params.id,
                blog:[]
            }
        },
        created(){
            this.$http.get(`blog/blog/${this.id}.json`).then(function(data){               
                this.blog = data.body
            })
            
        }
    }
</script>

<style scoped>

</style>