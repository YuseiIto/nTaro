<template>
<div class="tile is-vertical is-12">
    <div class="tile">
      <div class="tile is-parent is-vertical">
        <card v-for="(item,index) in records" :key="item.id" :title="item.name"  :datetime="item.datetime" :content="item.content" :id="index+1" v-on:click="promptRemove"></card>
      </div>
    </div>
    <askRemove v-model="modal" :message="delMsg" :id="target_id" v-on:remove="delFnc"/>
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
                delMsg:"",
                target_id:0
        }
    },
    created:async function(){
        this.records=await ntaroGet();
    },
    methods:{
      promptRemove:function(e){
        this.modal=true;
        this.delMsg=e.name;
        this.target_id=e.id;
      },
      delFnc:async function(id){
        ntaroRemove(this.records[id-1]._id);
        this.records=await ntaroGet();
      },
      reload:async function(){
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