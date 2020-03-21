<template>
        <article class="tile is-child notification is-primary">
          <p class="title">{{title}}</p>
          <p class="subtitle">{{content}}</p>
          <p class="is-small date">Scheduled:{{datetime}}</p>
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
    content:String
}
} </script>
<style>
.date{
    text-align:right;
}
</style>