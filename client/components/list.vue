<template>
<div class="tile is-vertical is-12">
    <div class="tile">
      <div class="tile is-parent is-vertical">
        <card v-for="(item,index) in records" :key="item.id" :title="item.name"  :datetime="item.datetime" :content="item.content" :id="index+1" v-on:click="promptRemove" v-on:remove="delFnc(item.id)" ></card>
      </div>
    </div>
    <askRemove v-model="modal" :message="delMsg" />
    </div>
</template>
<script>
import card from "./card"
import askRemove from "./askRemove"
import {ntaroRemove,ntaroGet} from "../modules/nTaroAPI.js"

export default{
    name:"list",
    components:{
      card,
      askRemove
    },
    data:function(){
        return {
                records:[],
                modal:false,
                delMsg:""
        }
    },
    created:async function(){
        this.records=await ntaroGet();
    },
    methods:{
      promptRemove:function(name){
        this.modal=true;
        this.delMsg=name
      },
      delFnc:async function(id){
        ntaroRemove(this.records[id-1]);
        this.records=await ntaroGet();
      }
    }
}
</script>

<style>
.control{
  margin-top:10px;
}
</style>