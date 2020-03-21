<template>
<div v-bind:class="[value ? 'is-active' : '','modal']">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">New Notification</p>
      <button class="delete" aria-label="close" v-on:click="close"></button>
    </header>
    <section class="modal-card-body">
        <slot></slot>
    </section>
    <footer class="modal-card-foot">
      <button class="button is-success" v-on:click="save">Save changes</button>
      <button class="button">Cancel</button>
    </footer>
  </div>
</div>
</template>
<script>



export default{
    name:"modal",
    props:{
        value:Boolean
    },
    methods:{
    save:function(){
      this.$emit('input',this.value);
    },
    close:function(){
        this.$emit('input',false);
    }}

}

</script>