<template>
  <div class="vld-parent">
    <loading :active.sync="isLoading" :is-full-page="fullPage"></loading>
  </div>
</template>

<script>
// Import component
import Loading from "vue-loading-overlay";
// Import stylesheet
import "vue-loading-overlay/dist/vue-loading.css";
import { mapState } from "vuex";

export default {
  data() {
    return {
      fullPage: true
    };
  },
  components: {
    Loading
  },
  computed: {
    ...mapState({
      isLoading: state => state.isLoading
    })
  }
};
</script>