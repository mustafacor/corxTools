<template>
  <div id="app">
    <navbar/>
    <div class="container">
      <tools></tools>
          <router-view/>
          <footervue></footervue>
    </div>

    
  </div>
</template>
<script>
export default {
    name: 'App', 
  };
</script>
<style>
.tool-main{
        margin-top:3em;
        margin-bottom:100%;
    }
#app{
-webkit-animation: color-change-5x 8s linear infinite alternate both;
	        animation: color-change-5x 8s linear infinite alternate both;
}
@-webkit-keyframes color-change-5x {
  0% {
    background: #19dcea;
  }
  25% {
    background: #b22cff;
  }
  50% {
    background: #ea2222;
  }
  75% {
    background: #f5be10;
  }
  100% {
    background: #3bd80d;
  }
}
@keyframes color-change-5x {
  0% {
    background: white;
  }
  25% {
    background: black;
  }
  50% {
    background: red;
  }
  75% {
    background: white;
  }
  100% {
    background: black;
  }
}

</style>