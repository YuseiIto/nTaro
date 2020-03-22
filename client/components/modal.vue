<template>
<div v-bind:class="[value ? 'is-active' : '','modal']">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">{{title}}</p>
      <button class="delete" aria-label="close" v-on:click="close"></button>
    </header>
    <section class="modal-card-body">
        <slot></slot>
    </section>

    <footer v-if="(footer==='remove')" class="modal-card-foot">
      <button class="button is-danger" v-on:click="onSave">削除</button>
      <button class="button" v-on:click="close">Cancel</button>
    </footer>
    <footer v-else class="modal-card-foot">
      <button class="button is-success" v-on:click="onSave">Save changes</button>
      <button class="button" v-on:click="close">Cancel</button>
    </footer>
  </div>
</div>
</template>
<script>



export default{
    name:"modal",
    props:{
        value:Boolean,
        title:String,
        footer:String
    },
    methods:{
    onSave:function(){
      this.$emit('save');
      this.$emit('input',false);
    },
    close:function(){
        this.$emit('input',false);
    }}

}

</script>