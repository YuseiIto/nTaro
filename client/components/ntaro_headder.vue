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
      <p class="modal-card-title">New Notification</p>
      <button class="delete" aria-label="close" v-on:click="flip"></button>
    </header>
    <section class="modal-card-body">
      <input type="text" class="input" placeholder="event title">
       <VueCtkDateTimePicker v-model="datetime_model" />
       <textarea class="textarea is-primary" placeholder="Note"></textarea>

       <div v-bind:style="{height:(isMobile?'20vh':'100vh')}"></div>

    </section>
    <footer class="modal-card-foot">
      <button class="button is-success" v-on:click="save">Save changes</button>
      <button class="button">Cancel</button>
    </footer>
  </div>
</div>
</div>
</template>
<script>

import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';

export default{
    name:"ntaro_headder",
    components:{
      VueCtkDateTimePicker
    },
    data:()=>{
        return {isActive:false,datetime_model:null,isMobile:false}
    },
    updated:function(){
        const ua = navigator.userAgent;
         if (window.matchMedia('(max-width: 1200px)').matches) {
           this.isMobile=true;
        }
    },
    methods:{
    flip:function(event){
      this.isActive=!this.isActive;
    },
    save:function(event){
      alert(this.datetime_model);
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