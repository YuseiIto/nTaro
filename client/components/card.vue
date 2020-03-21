<template>
        <article class="tile is-child box">
          <p class="title"> #{{id}}　{{title}}</p>
          <p class="content">{{content}}</p>
          <p class="subtitle right">Scheduled:{{datetime}}</p>
        </article>
</template>
<script>
export default{
name:"card",
data: () => {
    return {
    }
},
props: {
    title:String,
    datetime:String,
    content:String,
    id:Number
}
} </script>
<style>
.right{
    text-align:right;
}
</style>