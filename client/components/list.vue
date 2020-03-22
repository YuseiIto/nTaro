<template>
<div class="tile is-vertical is-12">
    <div class="tile">
      <div class="tile is-parent is-vertical">
        <card v-for="item in records" :key="item.id" :title="item.name"  :datetime="item.datetime" :content="item.content" :id=item.id v-on:click="promptRemove()" v-on:remove="delFnc(item.id)" ></card>
      </div>
    </div>
    <askRemove v-model="modal" />
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
                modal:false
        }
    },
    created:async function(){
        this.records=await ntaroGet();
    },
    methods:{
      promptRemove:function(e){
        this.modal=true;
      },
      delFnc:async function(id){
        ntaroRemove(id);
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