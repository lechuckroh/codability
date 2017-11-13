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

    <div class="codemirror">
      <codemirror ref='codeEditor'
                  v-model="code"
                  :options="editorOptions"></codemirror>
    </div>
  </div>
</template>

<script>
  // require active-line.js
  require('codemirror/addon/selection/active-line.js');
  // styleSelectedText
  require('codemirror/addon/selection/mark-selection.js');
  require('codemirror/addon/search/searchcursor.js');
  // hint
  require('codemirror/addon/hint/show-hint.js');
  require('codemirror/addon/hint/show-hint.css');
  require('codemirror/addon/hint/javascript-hint.js');
  require('codemirror/addon/selection/active-line.js');
  // highlightSelectionMatches
  require('codemirror/addon/scroll/annotatescrollbar.js');
  require('codemirror/addon/search/matchesonscrollbar.js');
  require('codemirror/addon/search/searchcursor.js');
  require('codemirror/addon/search/match-highlighter.js');
  // keyMap
  require('codemirror/mode/clike/clike.js');
  require('codemirror/addon/edit/matchbrackets.js');
  require('codemirror/addon/comment/comment.js');
  require('codemirror/addon/dialog/dialog.js');
  require('codemirror/addon/dialog/dialog.css');
  require('codemirror/addon/search/searchcursor.js');
  require('codemirror/addon/search/search.js');
  require('codemirror/keymap/sublime.js');
  // foldGutter
  require('codemirror/addon/fold/foldgutter.css');
  require('codemirror/addon/fold/brace-fold.js');
  require('codemirror/addon/fold/comment-fold.js');
  require('codemirror/addon/fold/foldcode.js');
  require('codemirror/addon/fold/foldgutter.js');
  require('codemirror/addon/fold/indent-fold.js');
  require('codemirror/addon/fold/markdown-fold.js');
  require('codemirror/addon/fold/xml-fold.js');

  export default {
    data() {
      return {
        endTime: undefined,
        code: 'const a = 10;',
        editorOptions: {
          tabSize: 4,
          styleActiveLine: true,
          lineNumbers: true,
          line: true,
          foldGutter: true,
          styleSelectedText: true,
          gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
          highlightSelectionMatches: {showToken: /\w/, annotateScrollbar: true},
          mode: 'text/javascript',
          hintOptions: {
            completeSingle: false
          },
          keyMap: "sublime",
          matchBrackets: true,
          showCursorWhenSelecting: true,
          theme: "monokai",
          extraKeys: {"Ctrl": "autocomplete"}
        }
      };
    },

    props: {},

    computed: {
      editor() {
        return this.$refs.codeEditor.editor;
      }
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
