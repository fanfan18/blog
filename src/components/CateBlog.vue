<template>
    <el-main class="text-left">   
        <el-container class="flex-column-xs">            
            <el-aside class="cate-aside" width="150px">
                <div class="cate-aside-nav bg-white">
                    <ul>
                        <router-link to='/cateblog/1' tag='li'> <span>前端开发</span></router-link>
                        <router-link to='/cateblog/2' tag='li'> <span>碎言碎语</span></router-link>
                    </ul>
                </div>
            </el-aside>  
            <div class="text-center singleBlog p15" style="flex:1;margin-left:30px">                        
                <div class="home-blogs">
                    <div class="home-blog flex-row flex-column-xs" v-for="blog in blogs" :key="blog.id">
                        <div class="blog-cover" :style="'background-image:url('+blog.cover+')'">
                            
                        </div>
                        <div class="blog-content text-left">
                            <h2 class="color--333 nobottommargin notopmargin">{{blog.title}}</h2>
                            <div class="tags f12">
                                <span class="tag" v-for="(tag,index) in blog.tags" :key="tag">{{tag}}<i class="space" v-if="index > 0 && tag > 0 ">• {{index}}</i></span>
                            </div>
                            <div class="content">
                                {{blog.content}}
                            </div>
                            <div class="flex-row flex-between" style="margin-top:15px">
                                <div class="date f12">
                                    <i class="el-icon-date icon-date"></i>{{blog.creat_time}}
                                </div>
                                <div>
                                <router-link :to="'/singleblog/'+blog.id" class="f12 view-more"> 阅读全文 <i class="el-icon-caret-right"></i> </router-link> 
                                </div>
                            </div>                        
                        </div>
                    </div> 
                </div> 
            </div>
             
        </el-container>
    </el-main>
</template>

<script>
    export default {
        name:"cate-blog",
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
            console.log(this.id)
            
            
        }
    }
</script>

<style scoped>
.el-main {
    background-color: #f5f7fa
}
</style>