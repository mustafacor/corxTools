<template>
 <div class="row">
    <div class="col-12 col-md-8 offset-md-2 tool-main">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          @keydown.enter="getData"
          autocomplete="true"
          autofocus
          v-model="kelime"
          placeholder="Search gif on giphy"
        >
        <div class="input-group-append">
          <button class="btn btn-danger" @click="getData" type="button" id="button-addon2">Search ❤</button>
        </div>
      </div>

      <div>
          <div class="form-group text-white">
            <label for="miktar">how many would you like ?</label>
            <input type="range" class="custom-range" min="2" max="101" v-model="miktar" id="miktar">
            <p>{{miktar-1}}</p>
            </div>
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
             
            <img v-bind:src="item" class="col-12" >
           
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
            durum:'',
            bekleme:false,
            kelime:'',
            resimler:[],
            apiKey:"7Y8cLPi5XV945F47UOs6JxMRPwSBfoxL",
            miktar:2
        }
    },
    methods: {
        async getData(){
            this.bekleme = true;
            this.resimler = [];
            
            if(this.url==""){
                return;
            }else{
              await fetch(`http://api.giphy.com/v1/gifs/search?q=${this.kelime}&api_key=${this.apiKey}&limit=${this.miktar}`).then(res=>{
                    return res            
                }).then(res=>{
                   return res.json()  
                }).then(res=>{
                    console.log(res.data);
                    for (let i = 0; i < res.data.length-1; i++) {
                        this.resimler[i] = res.data[i].images.fixed_width_downsampled.url;     
                    }
                    
                    })
                    this.bekleme = false;
            }
        }
    },
};
</script>
<style scope>
  
</style>