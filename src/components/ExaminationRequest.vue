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
        <v-card-text>
          <v-form>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-autocomplete
                    :items="specimen_types"
                    v-model="patient_specimen_types"
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
                    v-model="patient_tests"
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
                <v-textarea
                  outlined
                  v-model="note"
                  name="input-7-4"
                  label="Notes"
                ></v-textarea>
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
export default {
  data: () => ({
    patient_tests: [],
    patient_specimen_types: [],
    priority: "",
    note: "",
    dialog: false
  }),
  methods: {
    remove(item) {
      const index = this.patient_tests.indexOf(item.value);
      if (index >= 0) this.patient_tests.splice(index, 1);
    },
    submit() {
      let data = {
        patient_tests: this.patient_tests,
        patient_specimen_types: this.patient_specimen_types,
        priority: this.priority,
        note: this.note,
      }
      // Implement posting to remote 
      // On Success Close modal
      console.log(data);
    }
  },
  computed: {
    tests() {
      return this.$store.state.tests;
    },
    specimen_types() {
      return this.$store.state.specimen_types;
    }
  },
  created() {
    this.$store.dispatch("fetchTests").then(() => {});
    this.$store.dispatch("fetchSpecimentType").then(() => {});
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