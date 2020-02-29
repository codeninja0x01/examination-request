<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        Clinic Examination Request
      </div>

    </v-app-bar>

    <v-content>
      <ExaminationRequest/>
    </v-content>
  </v-app>
</template>

<script>
import ExaminationRequest from './components/ExaminationRequest';

export default {
  name: 'App',

  components: {
    ExaminationRequest,
  },

  data: () => ({
    //
  }),
};
</script>
