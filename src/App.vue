<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">Clinic Examination Request</div>
    </v-app-bar>

    <v-content>
      <LoadingOverlay/>
      <ExaminationRequest />
      <ImagingRequest />
    </v-content>
  </v-app>
</template>

<script>
import ExaminationRequest from "./components/ExaminationRequest";
import ImagingRequest from "./components/ImagingRequest";
import LoadingOverlay from "./components/LoadingOverlay";

export default {
  name: "App",

  components: {
    ExaminationRequest,
    ImagingRequest,
    LoadingOverlay,
  },

  data: () => ({
    //
  })
};
</script>
