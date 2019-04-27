<template>
  <div class="row">
 
    <div class="col-6">
      <div class="row">
        <div id="tool-1" class="col-12 tools">
          <i class="fas fa-key icon pb-4 "></i>
       <router-link to="/pg" ><div class="tool-icon"> Password Generator </div></router-link>
        </div>
      </div>
    </div>
    <div  class="col-6">
        <div class="row">
      <div id="tool-2"  class="col-6 tools">
        <i class="fas fa-clipboard-list icon pb-5"></i>
       <router-link to="/todo" > <div class="tool-icon">To-do List</div></router-link>
      </div>
      <div id="tool-3" class="col-6 tools">
        <i class="fab fa-cloudsmith icon pb-5"></i>
        <router-link to="/getData"> <div class="tool-icon ">Get HTTP Headers information</div></router-link>
      </div>
       <div id="tool-4" class="col-6 tools">
         <i class="fas fa-images icon pb-5"></i>
        <router-link to="/getsiteimages"><div class="tool-icon">Get İmages on site</div></router-link>
      </div>
       <div id="tool-5" class="col-6 tools">
         <img class="icon gif" src="../assets/gif.gif" alt="">
        <router-link to="/searchgif"><div class="tool-icon">Search Gif</div></router-link>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>
<style >
.icon{
   color: white;
  transform: translate(-50%,-50%);
  position: absolute;
  left:50%;
  top:40%;
  font-size:6vmin;
  display: block;
}
.gif{
  height: 5vmin;
  top:25% !important;
}
#tool-1 {
  height: 30vmax;
  background: #9C27B0;
  width: auto;
  margin: 0;
  padding: 0;
}
#tool-2 {
  height: 15vmax;
  background: #E91E63;
  width: auto;
  margin: 0;
  padding: 0;
}
#tool-3 {
  height: 15vmax;
  background: #673AB7;
  width: auto;
  margin:0px;
  padding:0px;
}
#tool-3 div{
  margin-top:15px;
}
#tool-4 div{
  margin-top:15px;
}
#tool-4 {
  height: 15vmax;
  background: #FFEB3B;
  width: auto;
  margin: 0;
  padding: 0;
}
#tool-5 {
  height: 15vmax;
  background: #607D8B;
  width: auto;
  margin: 0;
  padding: 0;
}
.tools:hover{
    background-image:linear-gradient(270deg,#b02727,#27a9b0,#b027ab) !important;
    background-size:600% 100% !important;
    -webkit-box-direction: normal !important;
    -webkit-animation: bg-pan-left 3s infinite both !important;
	        animation: bg-pan-left .5s infinite both !important;
            
}
.footer{
    background-image:linear-gradient(270deg,#b02727,#27a9b0,#b027ab) !important;
    background-size:600% 100% !important;
    -webkit-box-direction: normal !important;
    -webkit-animation: bg-pan-left 3s infinite both !important;
	        animation: bg-pan-left 3s infinite both !important;
}

@-webkit-keyframes bg-pan-left {
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@keyframes bg-pan-left {
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}


.tool-icon {
  color: white;
  transform: translate(-50%,-50%);
  position: absolute;
  left:50%;
  top:50%;
}
</style>