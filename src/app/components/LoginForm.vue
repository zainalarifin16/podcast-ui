<template>
  <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex>
            <v-card class="elevation-12">
              <v-toolbar dark color="secondary">
                <v-toolbar-title>Login form</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" name="login" label="Login" type="text" v-model="email" ></v-text-field>
                  <v-text-field id="password" prepend-icon="lock" name="password" label="Password" type="password" v-model="password" ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="accent" @click="onSubmit(email, password)" >Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
</template>

<script>

  import { mapState } from 'vuex';
  import { LOGIN } from "../stores/actionTypes";

  export default {
    name: "login",
    data(){
      return {
        email: null,
        password: null
      }
    },
    methods: {
      onSubmit(email, password){
        this.$store
          .dispatch(LOGIN, {email, password})
          .then(() => this.$router.push({name: "HomePage"}));
      }
    },
    computed: {
      ...mapState({
        errors: state => state.auth.errors
      })
    }
  }
</script>