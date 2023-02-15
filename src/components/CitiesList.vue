<script>
export default {
  created() {
    // fetch('https://api.disneyapi.dev/characters')
    fetch(this.link)
      .then((response) => response.json())
      .then((disnies) => {
        this.disnies = disnies.data;
        console.log(disnies.data);
      });
  },
  data() {
    return {
      disnies: "",
    };
  },
  props: {
    link: String,
  },
};
</script>

<template>
  <ol>
    <div :key="disney.id" v-for="disney in disnies">
      <img alt="" :src="disney.imageUrl" />
      <li>{{ disney.name }}</li>
    </div>
  </ol>

  <!-- <div>
    <ol>
      <li :key="disney.id" v-for="disney in disnies">{{disney.name}}>
      <img alt="" :src="disney.imageUrl">
      </li>
    </ol>
  </div> -->
</template>
