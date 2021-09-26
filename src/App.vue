<template>
  <h1>Finger Reflex Timer</h1>
  <button v-on:click="start" :disabled="isPlaying">Play</button>
  <Block v-if="isPlaying" :delay="delay" v-on:end="endGame" />
  <Results v-if="showScore" :score="score" />
</template>

<script>
import Block from "./components/Block.vue";
import Results from "./components/Rezults.vue";

export default {
  name: "App",
  components: { Block, Results },
  data() {
    return {
      isPlaying: false,
      delay: null,
      score: null,
      showScore: false,
    };
  },
  methods: {
    start() {
      this.delay = 2000 + Math.random() * 5000;
      this.isPlaying = true;
      this.showScore = false;
    },
    endGame(reactionTime) {
      this.score = reactionTime; //add the reactTime to the score data
      this.isPlaying = false;
      this.showScore = true;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
}

button {
  background-color: #0faf87;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 16px;
  letter-spacing: 1px;
  cursor: pointer;
  margin: 10px;
}
button[disabled] {
  cursor: not-allowed;
  opacity: 0.2;
}
</style>
