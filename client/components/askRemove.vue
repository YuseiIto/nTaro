<template>
<modal v-bind:value="value" @input="$emit('input',false)" footer="remove" title="警告" v-on:save="$emit('remove',id)">
<h1>{{(message!="")&&(message!=null)&&(message!=undefined)?`「${message}」`:'この通知'}}を消去してよろしいですか?</h1>
</modal>
</template>
<script>
import modal from "./modal"
export default{
name:"askRemove",
components:{
modal
},
props: {
    value:Boolean,
    message:String,
    id:Number
}
} 
</script>
<style></style>