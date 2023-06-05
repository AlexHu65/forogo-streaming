<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
      <form @submit.prevent="submit">
      <div class="flex justify-center my-6">
        <div
           class="px-4"
           :class="{ 'hasError': $v.form.name.$invalid }">
          <label class="mr-2 font-bold text-grey">Name</label>
          <input type="text" class="form-control input" v-on:click="clickE($v.form.name)" v-model="form.name">
          <small class="red" v-if="!$v.form.name.required">*Campo requerido</small>         
          <small class="red" v-if="!$v.form.name.min">*Campo debe tener al menos {{$v.form.name.$params.min.min}} caracteres</small>         

        </div>        
        <div
          class="px-4"
          :class="{ 'hasError': $v.form.email.$invalid }">
          <label class="mr-2 font-bold text-grey">Email</label>
          <input type="email" class="form-control input" v-model="form.email">
          <small class="red" v-if="!$v.form.email.required">*Campo requerido</small> 
        </div>
      </div>
      <div class="text-center">
        <button type="submit" class="button">
          Submit
        </button>
      </div>
    </form>
      </div>
      <div class="col-md-6">
      Nombre:
      <pre>
      {{$v.form.name}}
      </pre>
      Email:
      <pre>
      {{$v.form.email}}
      </pre>
      </div>
    </div>
  </div>
  
</template>


<script>
import { required, email, minLength } from "vuelidate/lib/validators";

export default {
  name: "FormComponent",

  data() {
    return {
      form: {
        name: "",
        email: ""
      },
    };
  },

  validations: {
    form: {
      name: { required, min: minLength(10) },
      email: { required, email }
    }
  },

  methods: {
    submit() {
      this.$v.form.$touch();
      if(this.$v.form.$error){
        return;
      } 
      // to form submit after this
      swal('Form submitted')
    },
    clickE(data){
      if(data.$error){
        return false;
      }
      return;
    }
  }
};
</script>
