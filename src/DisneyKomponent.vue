<template>
  <input type="text" v-model="feedbackText" />

  <div v-if="feedbackText !== ''">
    <button @click="feedClick">Ge feedback</button>
  </div>

  <div v-if="feedbackSubmitted !== false">
    <!-- Tack för feedbacken -->
  </div>

  <input
    v-if="feedbackSubmitted !== false"
    type="text"
    :value="namn"
    placeholder=""
  />
</template>

<script>
export default {
  created() {},

  data() {
    return {
      feedbackText: "",
      feedbackSubmitted: false,
      namn: "",
    };
  },

  methods: {
    feedClick() {
      this.feedbackSubmitted = true;
      this.namn = "Tack för din feedback ";
    },
  },
};
</script>
