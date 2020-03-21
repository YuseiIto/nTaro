<template>
<div>
  <ntaro_headder/>


</div>
</template>
<script>
import ntaro_headder from "../components/ntaro_headder.vue"
import 'bulma/css/bulma.css'; 
export default {
  components:{
      ntaro_headder
  },
  head() {
    return {
      title: 'index'
    }
  }
}

</script>
