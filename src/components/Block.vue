<template>
  <div class="block" v-if="showBlock" v-on:click="stopTimer">
    click me
  </div>
</template>

<script>
export default {
  // what we want to recive from outside
  props: ["delay"],
  data() {
    return {
      showBlock: false,
      timer: null,
      reactionTime: 0,
    };
  },
  mounted() {
    console.log("component is mounted");
    setTimeout(() => {
      this.showBlock = true;
      this.startTimer(); //start timer when the block is showed
    }, this.delay);
  },
  updated() {
    console.log("component updated");
  },
  methods: {
    startTimer() {
      // add 10ms to reactionTime when this func is called
      this.timer = setInterval(() => {
        this.reactionTime += 10;
      }, 10);
    },
    stopTimer() {
      clearInterval(this.timer); //when click on the block clear timer
      console.log(this.reactionTime);
      this.$emit("end", this.reactionTime); // emit (creating custom event) = send attr 'end' to parent compotent with the reactionTime
    },
  },
};
</script>

<style>
.block {
  width: 400px;
  border-radius: 20px;
  background: #0faf87;
  color: white;
  text-align: center;
  padding: 100px 0;
  margin: 40px auto;
}
</style>
