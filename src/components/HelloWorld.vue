<script>
export default {
  props: {
    msg: String,
  },
};
</script>

<style lang="css">
p {
  font-weight: bold;
}
</style>

<template>
  <img alt="" src="/assets/disney.jpg" />
  <p>{{ msg }}</p>
</template>
