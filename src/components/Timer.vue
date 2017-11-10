<template>
  <div class="digit">
    {{ remains }}
  </div>
</template>

<script>
  const padZero = n => n.toString().padStart(2, '0');
  const nowInSec = () => Math.trunc(Date.now() / 1000);

  export default {
    mounted() {
      if (!isNaN(this.endInSec) && nowInSec() <= this.endInSec) {
        this.intervalId = window.setInterval(() => {
          this.now = nowInSec();
        }, 1000);
      }
    },

    beforeDestroy() {
      if (this.intervalId) {
        window.clearInterval(this.intervalId);
        this.intervalId = undefined;
      }
    },

    props: {
      end: String
    },

    data() {
      return {
        now: nowInSec(),
        intervalId: undefined,
      };
    },

    computed: {
      endInSec() {
        return Date.parse(this.end) / 1000;
      },
      remains() {
        if (isNaN(this.endInSec)) {
          return 'N/A';
        }

        const remainInSec = Math.trunc(this.endInSec - this.now);
        if (remainInSec <= 0) {
          return '00:00:00';
        }

        const seconds = padZero(remainInSec % 60);
        const minutes = padZero(Math.trunc(remainInSec / 60) % 60);
        const hours = padZero(Math.trunc(remainInSec / 3600));
        return `${hours}:${minutes}:${seconds}`;
      }
    }
  };
</script>

<style scoped>
  @import url(https://fonts.googleapis.com/css?family=Roboto);

  .digit {
    color: lightseagreen;
    font-size: 70px;
    font-weight: 700;
    font-family: 'Roboto', serif;
    margin: 10px;
    text-align: center;
  }
</style>
