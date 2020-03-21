<template>
<div class="tile is-vertical is-12">
    <div class="tile">
      <div class="tile is-parent is-vertical">
        <card title="lorem Ipsum"  datetime="2020/01/08 08:00" content="Quo usque tandem abutere, Catilina, patientia nostra? Quam diu etiam furor iste tuus nos eludet?"/>
      </div>
    </div>
</div>
</template>
<script>
import card from "./card"
export default{
    name:"list",
    components:{
      card
    },
    data:()=>{
        return {
          
        }
    }
}
</script>

<style>
.control{
  margin-top:10px;
}
</style>