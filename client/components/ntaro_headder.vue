<template>
<div>
<header style="margin:1em;">
    <h1 class="title is-1 centre top-title">7組太郎</h1>
    <button type="button" class="button is-primary is-light centre" v-on:click="modal_flg=true;">通知の登録はここから</button>
    <createNew v-model="modal_flg"/>
</header>

</div>
</template>
<script>
import createNew from "./createNew"
export default{
name:"ntaro_headder",
components:{
createNew
},
data: () => {
    return {
      modal_flg:false
    }
}
}

</script>

<style>
.top-title{
  margin-top: 0.8em;
}

.centre{
       margin-bottom: 0.8em;
}
</style>