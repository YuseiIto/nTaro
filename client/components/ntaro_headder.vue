<template>
<div>
<header style="margin:1em;">
    <h1 class="title is-1 centre top-title">7組太郎</h1>
    <button type="button" class="button is-primary is-light centre" v-on:click="flip">通知の登録はここから</button>
</header>
<div v-bind:class="[isActive ? 'is-active' : '','modal']">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Modal title</p>
      <button class="delete" aria-label="close" v-on:click="flip"></button>
    </header>
    <section class="modal-card-body">
      <!-- Content ... -->
    </section>
    <footer class="modal-card-foot">
      <button class="button is-success">Save changes</button>
      <button class="button">Cancel</button>
    </footer>
  </div>
</div>
</div>
</template>
<script>
export default{
    name:"ntaro_headder",
    data:()=>{
        return {isActive:false}
    },
    methods:{
    flip:function(event){
      this.isActive=!this.isActive;
    }}
}


</script>

<style>
.top-title{
  margin-top: 0.8em;
}

.centre{
       margin-bottom: 0.8em;
}
</style>