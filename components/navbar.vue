<template>

<b-navbar toggleable="md" type="dark" variant="info">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand @mouseenter="brandDisplay" @mouseleave="brandDisplay" href="#">c<i v-show="logoHover">orxjs</i>Tools <i class="fas fa-toolbox"></i></b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav>
    <b-nav-item href="#"><i class="fab fa-wordpress-simple"></i><a href="http://corxjs.com" target="_blank" class="text-white" style="text-decoration:none">   Blog</a> </b-nav-item>
      <b-nav-item href="#"> <i class="fab fa-gitlab"></i><a href="http://gitlab.com/corxjs" target="_blank" class="text-white" style="text-decoration:none"> @corxjs </a></b-nav-item>
    </b-navbar-nav>

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">

      <b-nav-form>
        
      </b-nav-form>

     
    </b-navbar-nav>

  </b-collapse>
  
</b-navbar>

</template>

<script>
export default {
  name: 'navbar',
  data() {
    return {
      siteName: 'corX',
      navbarElements:["Anasayfa","Vue"],
      logoHover:false
    };
  },
  methods: {
    brandDisplay(){
      if(this.logoHover === true){
        this.logoHover=false;
      }else{
         this.logoHover=true;
      }
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>