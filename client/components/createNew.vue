<template>
<modal v-bind:value="value" @input="updateValue()" title="New Notification" v-on:save="saveData">
      <input type="text" v-model="name" class="input" placeholder="event title">
       <VueCtkDateTimePicker v-model="datetime" />
       <textarea class="textarea is-primary" placeholder="Note" v-model="content"></textarea>
       <div v-bind:style="{height:(isMobile?'20vh':'100vh')}"></div>
</modal>
</template>
<script>
import modal from "./modal.vue"
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';
import {ntaroAdd}from "../modules/nTaroAPI"

export default{
    name:"createNew",
    props: {
        value:Boolean
    },
    data: function(){
        return {
            isMobile:false,
            name:"",
            datetime:null,
            content:""
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
        },
        saveData:function(){
            ntaroAdd(this.name,this.datetime,this.content);
        }
    }
}
 </script>
<style>
</style>