<template>
    <div class="row">
        <div class="col-12 tool-main text-center">
            <input type="text" placeholder="click to generate" v-model="password" class="form-control">
           <div class="form-check form-check-inline badge badge-secondary">
            <input class="form-check-input" v-model="s" type="checkbox" id="inlineCheckbox1" value="option1">
            <label class="form-check-label" for="inlineCheckbox1">Number</label>
            </div>
            <div class="form-check form-check-inline badge badge-dark">
            <input class="form-check-input" v-model="k"  type="checkbox" id="inlineCheckbox2" value="option2">
            <label class="form-check-label"  for="inlineCheckbox2">Karakter</label>
            </div>
             <div class="form-group text-white">
            <label for="formControlRange ">password lenght</label>
            <input type="range" class="custom-range" min="4" max="100" v-model="uzunluk" id="formControlRange">
            <p>{{uzunluk}}</p>
            </div>
            <button @click="generate(uzunluk,s,k)" class="btn btn-dark text-white mt-2 col-12 col-md-6">Generate</button>
        </div>
    </div>
</template>
<script>
export default {
    name:"passwordgenerator",
    data(){
        return {
        harfler: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
                "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
        sayilar:[0,1,2,3,4,5,6,7,8,9],
        noktalama:["+",",",".","-","'","\"","&","!","?",":",";","#","~","=","/","$","£","^","(",")","_","<",">"],
        password:'',
        passArray:'',
        s:false,
        k:false,
        uzunluk:8
        }
    },
      created() {
           // console.log(Math.floor(Math.random() * 10))
         this.generate();
         
          
        },
    methods: {
          shuffle(a) {
            for (let i = a.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [a[i], a[j]] = [a[j], a[i]];
            }//kopyala yapıştır ama mantığını anladım kendimde yazabiliyorum...
            return a;
        },
        generate(uzunluk,s,k){
            let araDizi = [];
            if (s==true) {
                araDizi = araDizi.concat(this.sayilar); 
            }
            if(k==true){
                araDizi = araDizi.concat(this.noktalama);
            }
            araDizi = araDizi.concat(this.harfler);
            this.shuffle(araDizi);
            console.log(araDizi);
            this.password = "";
            
            for (let i = 0; i < uzunluk; i++) {
                this.password += araDizi[Math.floor(Math.random()*araDizi.length)];  
            }
        }
    },
}
</script>
<style>
    
</style>