<template>
        <article class="tile is-child box card" v-on:click="$emit('click',`#${id}　${title}`)">
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

.card{
    transition: box-shadow .5s;
    box-shadow: 2px 2px 2px rgba(55,55, 55, 0.1);
}
.card:hover{

    box-shadow: 4px 4px 4px rgba(55,55, 55, 0.5);
}
</style>