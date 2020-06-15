<template>
  <div>
    <v-card class="mx-auto" style="padding: 15px" outlined>
      <v-form v-model="valid">
        <v-container>
          <h3>Register Book</h3>
          <v-divider />
          <v-row>
            <v-col cols="12" md="12">
              <v-text-field v-model="form.title" label="Title" :rules="requiredRules" required></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="12">
              <v-text-field v-model="form.author" label="Author" :rules="requiredRules" required></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="12">
              <v-text-field
                v-model.number="form.price"
                label="Price"
                prefix="$"
                :rules="currencyRules"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-menu
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="form.releaseDate"
                  label="Release Date"
                  prepend-icon="mdi-calendar"
                  readonly
                  :rules="requiredRules"
                  v-on="on"
                  required
                ></v-text-field>
              </template>
              <v-date-picker v-model="form.releaseDate" required></v-date-picker>
            </v-menu>
          </v-row>
          <v-row>
            <v-textarea v-model="form.description">
              <template v-slot:label>
                <div>
                  description
                  <small>(optional)</small>
                </div>
              </template>
            </v-textarea>
          </v-row>
          <v-row>
            <v-col align="right">
              <v-btn color="primary" @click="submit" :disabled="!valid">Register</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    form: {
      title: "",
      author: "",
      releaseDate: null,
      price: null,
      description: null
    },
    requiredRules: [v => !!v || "This field is required"],
    currencyRules: [
      v => !!v || "This field is required",
      v => !isNaN(v) || "Price must be a number"
    ]
  }),
  methods: {
    submit: function() {
      this.$emit("submit", this.form);
    }
  }
};
</script>