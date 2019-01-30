<template>
    <el-main class="text-left">
        <h2 class="text-center">添加博客</h2>
        <form>                
            <el-input class="input" label='标题' v-model="blog.title" placeholder="请输入标题"></el-input>
            <el-input label='内容' v-model="blog.content" type='textarea' placeholder="请输入内容" rows='10'></el-input>
            
            <div>
                <span class="nobottommargin">博客分类：</span>
                 <el-checkbox-group v-model="blog.categories">
                    <el-checkbox size="mini" v-model="blog.checked3"
                    v-for="item in categories" :key="item.id" :label="item.name"
                    ></el-checkbox>
                   
                 </el-checkbox-group>
            </div>
            <div class="bottommargin-xs">
                <span class="nobottommargin">作者：</span>                
                <el-select size="mini" v-model="blog.author" placeholder="请选择">
                    <el-option size="mini"
                    v-for="item in author"
                    :key="item.id"
                    :label="item.name"
                    :value="item.name">
                    </el-option>
                </el-select>
            </div>        
              <el-button type="primary"  v-on:click.prevent='submit'>提交</el-button>
        </form> 
    </el-main> 
</template>

<script>
    export default {
        name:"add-blog",
        data(){
            return{
                blog:{
                    id:1,
                    title:"",
                    content:"",
                    categories:[],
                    author:"",

                },
                author:[{id:1,name:"admin",}],
                categories:[
                    {id:1,name:"分类1",},
                    {id:2,name:"分类2",}
                ]
            }
        },
        methods: {
            submit() {                
                this.$http.post('blog/blog.json',this.blog)
                .then(function(res){                   
                    console.log(res)
                    if(res.ok){
                        this.$message({
                            showClose: true,
                            message: '恭喜你，新增成功',
                            type: 'success'
                        });
                    }else{
                        this.$message({
                            showClose: true,
                            message: '错了哦，新增失败',
                            type: 'error'
                        });
                    }
                })
                
            }
        },
    }
</script>

<style scoped>

</style>