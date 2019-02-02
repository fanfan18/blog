<template>
    <el-main class="text-left">
        <h2 class="text-center">添加/编辑博客</h2>
        
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
                <!-- {{blog.tags}} -->
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
                    :key="item.id"
                    :label="item.name"
                    :value="item.name">
                    </el-option>
                </el-select>
            </el-form-item>   
            <el-form-item>   
                <el-button type="primary" @click="submit(blog)">提交</el-button>
                <el-button @click="$router.back(-1)">取消</el-button>
            </el-form-item>
        </el-form>
    </el-main> 
</template>

<script>
import E from 'wangeditor'
    export default {
        name:"edit-blog",
        data(){
            return{
                id:this.$route.params.id,
                form:'',
                editorContent: '',
                blog:{
                    id:1,
                    title:"",
                    content:"",
                    editorContent:'',
                    tags:[],
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
                        { type: 'array', required: true, message: '请至少选择两个标签', trigger: 'change'}
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
            showBlog(){
                var that = this 
                this.$http.get(`/blog/${this.id}.json`)
                    .then(function(res){                    
                    that.blog = res.data  
                     var editor = new E(that.$refs.editor)
                    editor.create()
                    editor.txt.html(that.blog.editorContent)
                     
                   
                })
            },
            submit(blog) {     
                var that = this 
                console.log(blog)
                this.$refs.form.validate((valid) => {                    
                 if (valid && blog.tags.length > 1) {
                    this.$http.put(`/blog/${this.id}.json`,blog)
                    .then(function(res){ 
                        if(res.status == 200){
                            that.$message({
                                showClose: true,
                                message: '恭喜你，更新成功',
                                type: 'success'
                            });
                        }else{
                            that.$message({
                                showClose: true,
                                message: '错了哦，更新失败',
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
            this.showBlog()                     
            
            
        } 

         
    }
</script>

<style scoped>

</style>