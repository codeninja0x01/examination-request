<template>
  <div id="app">
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="1500px">
        <template v-slot:activator="{ on }">
          <v-btn color="primary" dark v-on="on">Imaging Request</v-btn>
        </template>
        <v-card>
          <v-toolbar dark color="primary">
            <v-btn icon dark @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Imaging Request</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn dark text @click="submit">Save</v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <v-card-title>
            <v-subheader>Imaging Dignosis</v-subheader>
          </v-card-title>
          <v-card-text>
            <v-overlay :value="overlay">
              <v-progress-circular indeterminate size="64"></v-progress-circular>
            </v-overlay>
            <v-form>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="5">
                    <v-text-field v-model="provisionalDiagnosis" label="Provisional Diagnosis"></v-text-field>
                    <v-row>
                      <v-col cols="12" sm="6">
                        <header>Patient Condition</header>
                        <v-switch
                          v-for="condition in conditions"
                          :key="condition.id"
                          v-model="patientConditions"
                          inset
                          :label="condition.title"
                          :value="condition.id"
                        ></v-switch>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <header>Examination Requested</header>
                        <v-switch
                          v-for="test in tests"
                          :key="test.id"
                          v-model="patienttestTests"
                          inset
                          :label="test.title"
                          :value="test.id"
                        ></v-switch>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col cols="12" sm="6" justify>
                    <v-textarea class="mx-2" label="Clinical Information" rows="1"></v-textarea>
                    <v-textarea
                      outlined
                      v-model="clinicalInfo"
                      name="input-7-4"
                      rows="16"
                      label="Procedure"
                    ></v-textarea>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
            <small>*indicates required field</small>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data: () => ({
    patientImagingTests: [],
    patientConditions: [],
    clinicalInfo: "",
    provisionalDiagnosis: "",
    dialog: "",
    overlay: true,
  }),
  methods: {
    remove(item) {
      const index = this.patient_tests.indexOf(item.value);
      if (index >= 0) this.patiimagingTestsent_tests.splice(index, 1);
    },
    submit() {
      let data = {
        patientImagingTests: this.patientImagingTests,
        patientConditions: this.patientConditions,
        clinicalInfo: this.clinicalInfo,
        provisionalDiagnosis: this.provisionalDiagnosis
      };
      // Implement posting to remote
      // On Success Close modal
      this.overlay = true;
      setTimeout(() => {
        this.overlay = false;
        this.dialog = false;
      }, 1000);
      console.log(data);
    }
  },
  computed: {
    ...mapState({
      conditions: state => state.patientConditions,
      tests: state => state.imagingTests,
    })
  },
  created() {
    this.$store.dispatch("fetchImagingTest").then(() => {
      this.overlay = false;
    });
    this.$store.dispatch("fetchPatientCondition").then(() => {
      this.overlay = false;
    });
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>