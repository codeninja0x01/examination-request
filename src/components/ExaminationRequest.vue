<template>
  <div id="app">
    <v-row justify="center">
      <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
        <template v-slot:activator="{ on }">
          <v-btn color="primary" dark v-on="on">Examination Request</v-btn>
        </template>
        <v-card>
          <v-toolbar dark color="primary">
            <v-btn icon dark @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Examination Request</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn dark text @click="submit">Save</v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <v-card-title>
            <v-subheader>Clinical Dignosis</v-subheader>
          </v-card-title>
          <v-card-text ref="formContainer">
            <v-overlay :value="overlay">
              <v-progress-circular indeterminate size="64"></v-progress-circular>
            </v-overlay>
            <v-form>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6">
                    <v-autocomplete
                      :items="specimenTypes"
                      v-model="patientSpecimenTypes"
                      item-text="title"
                      item-value="value"
                      label="Specimen Type"
                      multiple
                    ></v-autocomplete>
                  </v-col>
                  <v-col cols="12" sm="6" justify>
                    <header>Priority</header>
                    <v-radio-group row v-model="priority">
                      <v-radio value="0" label="STAT"></v-radio>
                      <v-radio value="1" label="Routine"></v-radio>
                      <v-radio value="3" label="Urgent"></v-radio>
                    </v-radio-group>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" sm="6" v-for="test in tests" :key="test.id">
                    <v-autocomplete
                      :items="test.sub"
                      v-model="patientTests"
                      filled
                      chips
                      item-text="title"
                      item-value="value"
                      :label="test.title"
                      multiple
                    >
                      <template v-slot:selection="data">
                        <v-chip
                          v-bind="data.attrs"
                          :input-value="data.selected"
                          close
                          @click="data.select"
                          @click:close="remove(data.item)"
                        >{{ data.item.title }}</v-chip>
                      </template>
                    </v-autocomplete>
                  </v-col>
                </v-row>
                <v-col cols="12" md="6">
                  <v-textarea outlined v-model="note" name="input-7-4" label="Notes"></v-textarea>
                </v-col>
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
    patientTests: [],
    patientSpecimenTypes: [],
    priority: "0",
    note: "",
    dialog: false,
    overlay: false,
    fullPage: false
  }),
  methods: {
    remove(item) {
      const index = this.patientTests.indexOf(item.value);
      if (index >= 0) this.patientTests.splice(index, 1);
    },
    submit() {
      let loader = this.$loading.show({
        // Optional parameters
        container: this.$refs.formContainer,
        canCancel: false
      });
      // simulate AJAX
      setTimeout(() => {
        loader.hide();
      }, 5000);
    }
  },
  computed: {
    ...mapState({
      tests: state => state.labRequestModule.labTests,
      specimenTypes: state => state.labRequestModule.specimenTypes
    })
  },
  created() {
    this.$store.dispatch("fetchTests").then(() => {
      this.overlay = false;
    });
    this.$store.dispatch("fetchSpecimentType").then(() => {
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