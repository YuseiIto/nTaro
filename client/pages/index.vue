<template>
<div>
<h1>title</h1>
<head_logo/>
</div>
</template>
<script>
import head_logo from "../components/head_logo.vue"
export default {
  components:{
      head_logo
  },
  head() {
    return {
      title: 'index'
    }
  }
}

</script>