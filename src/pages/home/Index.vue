<template>
    <div class="home" style="min-height:100vh">  
        <div class="home-banner">

        </div> 
        <el-container class="p30 flex-column-xs">
            <el-main>
                <div class="">

                
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
                                <router-link :to="'singleblog/'+blog.id" class="f12 view-more"> 阅读全文 <i class="el-icon-caret-right"></i> </router-link> 
                                </div>
                            </div>                        
                        </div>
                    </div> 
                </div>   
              </div>
            </el-main>
            <el-aside class="home-aside" width="350px" style="margin-left:30px;">
                <div class="p15 bg-white">
                    <div>
                        <h2>博客简介</h2>
                        <p>博客: https://fanfan18.gitee.io/staticpcblog/，一个关注Web前端开发技术、关注用户体验、坚持更多原创实战教程的个人网站，愿景：成为宇宙中最具有代表性的前端博客，期待您的参与,
                        </p>
                    </div>
                </div>
                <div class="p15 bg-white topmargin-sm">
                    <div>
                        <h2>最近更新</h2>
                        <div class="home-blogs aside-blogs">
                            <div class="home-blog " v-for="blog in blogs" :key="blog.id">
                                <router-link class="flex-row flex-column-xs" :to="'singleblog/'+blog.id">
                                <div class="blog-cover" :style="'background-image:url('+blog.cover+')'">
                                    <!-- <img :src="blog.cover" alt=""> -->
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
                                </router-link>
                            </div> 
                        </div>  
                    </div>
                </div>
                
            </el-aside> 
        </el-container>

        
        
        
    </div>
</template>

<script>
    export default {
        data() {
            return {
                 blogs:[],
                sliders:[
                    {id:1,cover_url:'https://unfold.co/wp-content/uploads/sweet-thumbnail-1.png'},
                    {id:2,cover_url:'https://unfold.co/wp-content/uploads/sweet-thumbnail-1.png'}, 
                ]
                
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
            },
        },
        created(){    
            this.showblogs();
            
        }
    }
</script>
 <style lang="scss" scoped>
 
.home-banner{
    min-height:500px;
    position: relative;
    top: -300px;margin-bottom: -300px;
    background-image: url('./../../../static/img/bg(1).jpg');
    background-size:cover;
    background-position: center;
    // transition: all .5s;
    animation: bc_change 5s infinite;
}
 

@keyframes bc_change {
  from,   
  to {
    background-image: url('./../../../static/img/bg(2).jpg');
  }
  40%,
  43% {
    background-image: url('./../../../static/img/bg(3).jpg');
  } 
  90% {
  background-image: url('./../../../static/img/bg(4).jpg');
  }
}
 </style>
  
