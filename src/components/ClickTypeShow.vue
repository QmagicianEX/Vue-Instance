<template>
  <div>
    <!-- infinite loop -->
    <vue-typed-js :strings="['awesome', 'brilliant']" :loop="true" :showCursor="false">
      <h2>We are a <span class="typing"></span> company!</h2>
    </vue-typed-js>

    <!-- type pausing -->
    <vue-typed-js :strings="['This is text ^1000 which gets paused for 1 second', 'wow, interesting']">
      <h2 class="typing"></h2>
    </vue-typed-js>

    <!-- output html -->
    <vue-typed-js :strings="['<p>Paragraph</p>', '<span>Span</span>']" :contentType="'html'">
      <h2 class="typing"></h2>
    </vue-typed-js>
  </div>
</template>

<script>
  //import VueTypedJs from 'vue-typed-js'
  export default {
    // components: {
    //   'vue-type-js':VueTypedJs
    // },
    data() {
      return {
      }
    },
    created() {
    },
    methods: {
      
    }
  }
</script>