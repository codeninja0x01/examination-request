<template>
  <v-app>
    <v-app-bar app color="teal lighten-3" dark>
      <div class="d-flex align-center">Clinic Examination Request</div>
    </v-app-bar>
      <notifications group="alert" position="center right" />

    <v-content>

      <ExaminationRequest />
      <ImagingRequest />
    </v-content>
  </v-app>
</template>

<script>
import ExaminationRequest from "./components/ExaminationRequest";
import ImagingRequest from "./components/ImagingRequest";
import { mapState } from "vuex";
import NProgress from "nprogress";
NProgress.configure({ easing: "ease", speed: 500, showSpinner: false });

export default {
  name: "App",

  components: {
    ExaminationRequest,
    ImagingRequest
  },

  data: () => ({
    //
  }),
  computed: {
    ...mapState({
      isLoading: state => state.isLoading,
      notify: state => state.notification
    })
  },
  watch: {
    isLoading(newVal, oldVal) {
      if (newVal === 0) return NProgress.done();
      if (oldVal === 0) return NProgress.start();
      NProgress.set(1.8 / Math.max(oldVal, newVal));
    },
    notify(newVal) {
      if (newVal !== null) {
        this.$notify({
          group: "alert",
          title: newVal.title,
          text: newVal.message,
          type: newVal.type
        });
      }
    }
  }
};
</script>
