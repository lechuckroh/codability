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
    <v-card color="secondary" flat>
      <v-card-text>
        <v-container fluid>
          <v-layout row wrap>
            <v-flex xs6>
              <v-select
                v-bind:items="languages"
                v-model="e1"
                label="Language"
                dark
                item-value="text"
              ></v-select>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
    </v-card>
    <code-editor></code-editor>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        endTime: undefined,
        languages: [
          { text: 'C++' },
          { text: 'Java' },
          { text: 'JavaScript' },
          { text: 'Groovy' },
          { text: 'Scala' },
          { text: 'Go' },
        ]
      };
    },

    props: {},

    computed: {},

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
