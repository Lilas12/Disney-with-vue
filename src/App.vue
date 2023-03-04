<script>
import CitiesList from "./components/CitiesList.vue";
import HelloWorld from "./components/HelloWorld.vue";
import DisneyKomponent from "./DisneyKomponent.vue";

export default {
  components: {
    CitiesList,
    HelloWorld,
    DisneyKomponent,
  },
};
</script>

<template>
  <nav>
    <ul>
      <li>
        <RouterLink to="medlem">Registrera</RouterLink>
      </li>
      <li>
        <RouterLink to="/loggain">Sign</RouterLink>
      </li>
    </ul>
  </nav>
  <main>
    <RouterView />
  </main>
  <HelloWorld msg="Disney" />
  <h2>
    Disney är en webbsida och en app, man kan ladda ner appen för att titta på
    olika filmer och serier som streamer underhållning från Disney
    Channel.Disney exklusiva olika filmer och serien som man inte hittar på anna
    streamingtkänst utan hittar man de i Disney+
  </h2>
  <CitiesList link="https://api.disneyapi.dev/characters" />
  <DisneyKomponent />
</template>

<style lang="scss">
$background-color: #4b2ce6bb;
$text-color: #000;
$some-color: #fff;
body {
  display: flow-root;
  background-color: $background-color;
  justify-content: center;
  padding: 15px 30px;
}

li {
  font-size: 25px;
  text-align: left;
}

p {
  font-size: 50px;
  text-align: center;
  margin-left: 145pxpx;
}

h1 {
  font-size: 20px;
  text-align: right;
}

img {
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
}

ul li {
  list-style: none;
  font-size: 20px;
  text-align: right;
}

main {
  text-align: right;
}

a {
  color: $text-color;
}

nav,
ul,
li {
  // display: flex;
  width: 50%;
  padding: 2px;
  margin: 6px;
  padding-left: 30px;
}

input {
  font-size: 15px;
  background-color: $some-color;
  padding: 10px;
}

button {
  font-size: 15px;
}

h2 {
  text-align: center;
}
</style>
