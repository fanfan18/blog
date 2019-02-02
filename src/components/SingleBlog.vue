<template>
    <el-main class="text-left">   
        <el-container class="container">     
                 
            <div class="text-center singleBlog p15" style="flex:1">                        
                <h2>{{blog.title}}</h2>
                <h5>{{blog.author}} {{blog.creat_time}}</h5>            
                <div class="line"></div>
               
                <div class="text-left" style="min-height:500px;overflow-x:hidden;" v-html="blog.editorContent">
                
                </div>
            </div>
            <el-aside width="350px" style="margin-left:30px">
                <div class="p15 bg-white">
                   <div class="home-blogs aside-blogs">
                        <div class="home-blog " v-for="blog in blogs" :key="blog.id">
                            <div class="flex-row flex-column-xs point" @click="query(blog.id)">
                            <div class="blog-cover" :style="'background-image:url('+blog.cover+')'">                                     
                            </div>
                            <div class="blog-content text-left">
                                <h3 class="color--333 fnormal nobottommargin notopmargin">{{blog.title}}</h3>
                                <div class="tags f12">
                                    <span class="tag" v-for="(tag,index) in blog.tags" :key="tag">{{tag}}<i class="space" v-if="index > 0 && tag > 0 ">• {{index}}</i></span>
                                </div>
                                    
                                <div class="flex-row flex-between" style="margin-top:15px">
                                    <div class="date f12">
                                        <i class="el-icon-date icon-date"></i>{{blog.creat_time}}
                                    </div>                                        
                                </div>                                    
                                
                            </div>
                            </div>
                        </div> 
                    </div>
                </div>
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
                blog:[],
                blogs:[],
            }
        },
        methods:{
            showblogs(){
                var that = this
                this.$http.get('/blog.json')
                    .then(function(res){
                    var blogsArray = [];
                    for(var key in res.data){        
                        res.data[key].id= key; 
                        blogsArray.push(res.data[key])
                    }
                    that.blogs = blogsArray      
                })

                this.$http.get(`/blog/${this.id}.json`).then(function(data){               
                    that.blog = data.data
                })
            },
            query(id){
                var that = this;
                this.$http.get(`/blog/${id}.json`).then(function(data){               
                    that.blog = data.data;
                    //  document.body.scrollTop = 0;
                     document.documentElement.scrollTop = 0;
                })
            }
        },
        created(){
            this.showblogs()
            
            
        }
    }
</script>

<style scoped>
.el-main {
    background-color: #f5f7fa
}
</style>