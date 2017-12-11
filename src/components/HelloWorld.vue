<template>
  <div>
    <div align="center">
      <timer :end="endTime"></timer>
      <v-btn v-if="!endTime"
             color="primary"
             @click.native="onStart">
        Start
      </v-btn>
      <v-btn v-if="endTime"
             color="error"
             @click.native="onStop">
        Stop
      </v-btn>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        endTime: undefined,
      };
    },

    props: {},

    computed: {
    },

    methods: {
      onStart() {
        if (!this.endTime) {
          this.endTime = new Date(Date.now() + 4 * 60 * 60 * 1000).toString();
        }
      },
      onStop() {
        if (this.endTime) {
          this.endTime = undefined;
        }
      }
    }
  };
</script>

<style scoped>
</style>
