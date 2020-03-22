<template>
<div>
  <ntaro_headder v-on:change="reloadList"/>
  <list ref="list"/>
</div>
</template>
<script>
import ntaro_headder from "../components/ntaro_headder.vue"
import list from "../components/list.vue"

import 'bulma/css/bulma.css'; 
export default {
  components:{
      ntaro_headder,
      list
  },
  head() {
    return {
      title: 'index'
    }
  },
  methods:{
    reloadList:function(){
      this.$refs.list.reload();
      console.log("Reload!")
    }
  }
}

</script>
