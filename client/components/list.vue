<template>
<div class="tile is-vertical is-12">
    <div class="tile">
      <div class="tile is-parent is-vertical">
        <article class="tile is-child notification is-primary">
          <p class="title">Vertical...</p>
          <p class="subtitle">Top tile</p>
        </article>
        <article class="tile is-child notification is-warning">
          <p class="title">...tiles</p>
          <p class="subtitle">Bottom tile</p>
        </article>
      </div>
    </div>
</div>
</template>
<script>
export default{
    name:"list",
    data:()=>{
        return {
          
        }
    },
    props: {
      count: Number
    }
}
</script>

<style>
.control{
  margin-top:10px;
}
</style>