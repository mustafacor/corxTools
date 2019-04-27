<template>
 <div class="row">
    <div class="col-12 col-md-8 offset-md-2 tool-main">
      <span class="badge badge-danger col-12" v-if="hata">Enter Url only!</span>
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          @keydown.enter="getData"
          v-model="url"
          autocomplete="true"
          autofocus
          placeholder="url"
        >
        <div class="input-group-append">
          <button class="btn btn-danger" @click="getData" type="button" id="button-addon2">GET Images</button>
        </div>
      </div>

      <div>
        <div v-if="bekleme" class="col-12 text-center">
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
        <div class="row bg-light">
          <div
            class="col-4 resimm"
            v-for="item in resimler"
          >
         
            <img  class="col-12 text-center" v-bind:src="item">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name:"getsiteimage",
    data(){
        return{
            hata:false,
            bekleme:false,
            url:'',
            resimler:[]
        }
    },
    methods: {
        async getData(){
            this.bekleme = true;
            this.resimler = [];
            const urlKalip = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
            let isUrl = urlKalip.test(this.url);
            if(this.url=="" ||isUrl == false){
                this.hata = true;
                setTimeout(() => {
                    this.hata=false;
                }, 3000);
            }else{
              await fetch("https://cors-anywhere.herokuapp.com/" +this.url).then(res=>{
                    return res            
                }).then(res=>{
                   return res.text()  
                }).then(res=>{
                    var el = document.createElement( 'html' );
                    el.innerHTML = res;
                    console.log(el);
                    for(let i = 0;i<el.getElementsByTagName("img").length-1;i++){
                       console.log(el.getElementsByTagName("img")[i].src);
                      this.resimler[i]=el.getElementsByTagName("img")[i].src
                    }
                    
                    })
                    this.bekleme = false;
            }
        }
    },
};
</script>
<style scope>
  .resimm{
      border: 1px black solid;
  }  
</style>