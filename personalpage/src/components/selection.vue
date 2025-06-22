<template>
          <div id="lightDiv" class="flex-con type3">
            <div v-show="lightOn"></div>  
            <img src="./images/offroadlogo.png" v-on:click=" lightOn =! lightOn "></img>
          </div>  

          <div id="lightDiv" class="flex-con type3">
            <div v-show="lightOn"></div>                   
            <img src="./images/hikinglogo.png" v-on:click=" lightOn =! lightOn "></img>
          </div>  
</template>

<script setup>
  const app = ref({
    data() {
      return {
        lightOn: false
      }
    }
  })
</script>

<style>
    .template {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      width: 80%;
      border: dashed black 1px;
    }
    #app > div {
      display: block;
      flex-basis: 80px;
      aspect-ratio: 1;
      margin: 5px;
    }
    div > img {
      box-sizing: border-box;
      width: 100%;
      padding: 3px;
      border: solid white 4px;
      border-radius: 5px;
    }
    img:hover {
      cursor: pointer;
    }
    .selClass {
      border: solid brown 4px;
      background-color: lightpink;
    }
  </style>