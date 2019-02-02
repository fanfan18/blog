<template>
  <div id="app"> 
    <el-container :class="homebcTransparent ? 'bc' : ''">
      <el-header :class="homebcTransparent ? 'homebcTransparent' : ''">
        <div class="flex-row flex-between container relative">
           
            <a href="#/" class="logo"> <i class="el-icon-share logo"></i></a>        
           
          <nav class="flex-row flex-middle">
            <ul class="flex-row">
               <router-link to='/cateblog/?id=1' tag='li'> <span>前端开发</span></router-link> 
               <router-link to='/cateblog/?id=2' tag='li'> <span>碎言碎语</span></router-link> 
               <router-link to='/showblog' tag='li'> <span>博客总览</span></router-link> 
               <router-link to='/addblog' tag='li'> <span>添加博客</span></router-link>             
            </ul>            
           
          </nav>
          
        </div>
        
        </el-header>
      <router-view/>
      <el-footer :class="homebcTransparent ? 'homebcTransparent' : ''">
        <div class="container">
          this is Footer
        </div>
        </el-footer>
    </el-container>
    
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      route:'',
      homebcTransparent:true
    }
  },
  watch: {
    '$route' (to, from) {
      this.route = this.$route.path
      if(this.$route.path == '/'){
        console.log("home")
        this.homebcTransparent = true;
      }else {
        this.homebcTransparent = false;
      }
    }
  },
  methods:{
    
  },
  created(){
   console.log(this.$router)
   
  }
}
</script>

<style lang="scss"> 
.homebcTransparent,{
  background:transparent !important;
  transition:  all .5s;
  z-index: 3;
}
.headerbcTransparent { 
  position: relative;
  &::after{
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    top: 0;left: 0;
    position: absolute;
    opacity: .5;
    @include themeBc();
    z-index: 1;
  }
  .flex-row { 
    z-index: 2;
  }
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $themeColor;
   
}
.el-header {
  nav{
    ul{
    margin:0;
  }
  } 
}


</style>
