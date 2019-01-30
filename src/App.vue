<template>
  <div id="app"> 
    <el-container>
      <el-header>
        <router-link to='/addblog'>添加博客</router-link>
        <router-link to='/showblog'>博客总览</router-link>
        </el-header>
      <router-view/>
      <el-footer>Footer</el-footer>
    </el-container>
    
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss"> 
body{
  margin:0;padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $themeColor;
   
}
</style>
