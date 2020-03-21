<template>
<modal v-bind:value="value" @input="updateValue()" title="New Notification">
      <input type="text" class="input" placeholder="event title">
       <VueCtkDateTimePicker v-model="datetime_model" />
       <textarea class="textarea is-primary" placeholder="Note"></textarea>
       <div v-bind:style="{height:(isMobile?'20vh':'100vh')}"></div>
</modal>
</template>
<script>
import modal from "./modal.vue"
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';
export default{
    name:"createNew",
    props: {
        value:Boolean
    },
    data: function(){
        return {
            isMobile:false,
            datetime_model:null
        }
    },
    components:{
        modal,
        VueCtkDateTimePicker
    },
    updated:function(){
            const ua = navigator.userAgent;
            if (window.matchMedia('(max-width: 1200px)').matches) {
            this.isMobile=true;
            }
    },
    methods:{
        updateValue:function(e){
            this.$emit('input',e)
        }
    }
}
 </script>
<style>
</style>