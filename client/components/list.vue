<template>
<div class="tile is-vertical is-12">
    <div class="tile">
      <div class="tile is-parent is-vertical">
        <card v-for="item in records" :key="item.id" :title="item.name"  :datetime="item.datetime" :content="item.content" :id=item.id v-on:click="delFnc(item.id)"></card>
      </div>
    </div>
</div>
</template>
<script>
import card from "./card"
import {ntaroRemove,ntaroGet} from "../modules/nTaroAPI.js"

export default{
    name:"list",
    components:{
      card
    },
    data:()=>{
        return {
                records:[{
                            "name": "Lorem Ipsum",
                            "datetime": "2020/01/01 08:00",
                            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                            "id": 0
                        }]
        }
    },
    methods:{
      delFnc:function(id){
        ntaroRemove(id);
        this.records=ntaroGet();
      }
    }
}
</script>

<style>
.control{
  margin-top:10px;
}
</style>