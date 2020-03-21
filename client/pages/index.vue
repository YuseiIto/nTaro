<template>
<div>
  <ntaro_headder/>
  <list/>
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
  }
}

</script>
