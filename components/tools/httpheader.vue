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
          <button class="btn btn-danger" @click="getData" type="button" id="button-addon2">GET</button>
        </div>
      </div>

      <div>
        <div v-if="bekleme" class="col-12 text-center">
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
        <ul class="list-group">
          <li
            class="list-group-item d-flex justify-content-between align-items-center"
            v-for="(item,index) in data "
          >
            <span class="badge badge-primary badge-pill">{{index}}</span>
            {{item}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "httpheader",
  data() {
    return {
      url: "",
      data: ["ttet"],
      hata: false,
      bekleme: false
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
        this.bekleme = true;
      let json = {};
      const urlKalip = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
      let isUrl = urlKalip.test(this.url);
      if (this.url == "" || isUrl == false) {
        this.hata = true;
        setTimeout(() => {
          this.hata = false;
        }, 3000);
      } else {
        let data = await fetch(
          "https://cors-anywhere.herokuapp.com/" + this.url
        ).then(res => {
                    
          res.headers.forEach((val, key) => {
            console.log(key + " -> " + val);
            json[key] = val;
          });
        });
        
      }
      this.data = json;
      this.bekleme = false;
    }
  }
};
</script>
<style>
</style>
