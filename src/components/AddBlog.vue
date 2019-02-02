<template>
    <el-main class="text-left ">
        <div class="container">
            <div class="article-title">
                <h2 class="text-center">添加博客</h2>
            </div>            
            <el-form ref="form" label-position="left" :model="blog" :rules="rules" label-width="80px">
                <el-form-item label="封面链接" prop='cover'>
                    <el-input class="input" v-model="blog.cover" placeholder="请输入封面链接"></el-input>
                </el-form-item>
                <el-form-item label="博客标题" prop='title'>
                    <el-input class="input" v-model="blog.title" placeholder="请输入博客标题"></el-input>
                </el-form-item>
                <el-form-item label="博客简介" prop='content'>
                    <el-input label='内容' v-model="blog.content" type='textarea' placeholder="请输入博客简介" rows='3'></el-input>
                </el-form-item>
                <el-form-item label="博客正文">
                    <input type="text" name="editorContent" :value="blog.editorContent" style="display:none">     
                    <div ref="editor" style="text-align:left"></div>              
                </el-form-item>             
                <el-form-item label="博客标签" prop='tags'>
                    <el-checkbox-group v-model="blog.tags" :min="2">
                        <el-checkbox size="mini"
                        v-for="item in tags" :key="item" :label="item"
                        ></el-checkbox>                   
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="博客分类" prop='categories'>               
                    <el-select size="mini" v-model="blog.categories" placeholder="请选择">
                        <el-option size="mini"
                        v-for="item in categories"
                        :key="item"
                        :label="item"
                        :value="item">
                        </el-option>
                    </el-select>
                </el-form-item>   
                <el-form-item>   
                    <el-button type="primary" @click="submit(blog)">提交</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>
        </div>
        
    </el-main> 
</template>

<script>
import E from 'wangeditor'
    export default {
        name:"add-blog",
        data(){
            return{
                id:this.$route.params.id,
                form:'', 
                blog:{
                    id:1,
                    title:"",
                    content:"",
                    editorContent:'',
                    tags:['原创','笔记'],
                    categories:"",
                    creat_time:new Date()
                },
                tags:['原创','笔记','转载','好文'],
                categories:['前端开发','碎言碎语'],
                rules: {
                    cover: [
                        { required: true, message: '请输入封面链接', trigger: 'blur' }                         
                    ],
                    title: [
                        { required: true, message: '请输入博客标题', trigger: 'blur' } 
                    ],
                    content: [
                        { required: true, message: '请输入博客简介', trigger: 'blur' } 
                    ],
                    tags: [
                        { type: 'array', required: true, message: '请至少选择两个标签', trigger: 'change'},
                        // { Length:2, message: '请至少选择两个标签', trigger: 'blur' }
                    ],
                    categories: [
                        { required: true, message: '请选择分类', trigger: 'change' }
                    ],
                }
                
            }
        },
        methods: {
            getContent: function () {
                alert(this.editorContent)
            },
            
            submit(blog) { 
                console.log(blog)
                
                  
                var that = this 
              
                
                this.$refs.form.validate((valid) => {                    
                if (valid && blog.tags.length > 1) {                    
                    this.$http.post('/blog.json',blog)
                    .then(function(res){                   
                        console.log(res)
                        if(res.status == 200){
                            that.$message({
                                showClose: true,
                                message: '恭喜你，新增成功',
                                type: 'success'
                            });
                        }else{
                            that.$message({
                                showClose: true,
                                message: '错了哦，新增失败',
                                type: 'error'
                            });
                        }
                    })
                } else {
                    console.log('error submit!!');
                    that.$message({
                        showClose: true,
                        message: '错了哦，请至少选择两个标签',
                        type: 'error'
                    });
                    return false;
                }
                });
            }
        },
        mounted() {                       
            var editor = new E(this.$refs.editor)
            editor.customConfig.onchange = (html) => {
            this.blog.editorContent = html
            }
            editor.create()
        } 

         
    }
</script>

<style lang='scss' scoped>
 
</style>