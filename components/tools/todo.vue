<template>
  <div class="row">
    <div class="col-12 col-md-8 offset-md-2 tool-main">
      <div class="input-group mb-3">
        <input type="text" class="form-control" @keydown.enter="add"  v-model="todoinput" placeholder="todo">
        <div class="input-group-append">
          <button class="btn btn-success" @click="add" type="button" id="button-addon2">Add</button>
        </div>
      </div>
      <div>
        <ul class="list-group">
          <li class="list-group-item d-flex justify-content-between align-items-center" v-for="(item,index) in todos"> {{item}} <span @click="sil(item,index)" class="badge badge-primary badge-pill"><i class="fas fa-check"></i></span></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "todo",
  data() {
    return {
      todos: [],
      todoinput: ""
    };
  },
  methods: {
    add() {
        if(this.todoinput == ''){
            return;
        }
      this.todos.unshift(this.todoinput);
      this.todoinput = '';
    },
    sil(item,index){
        this.todos.splice(index,1);
        
    }
  }
};
</script>
<style>
</style>