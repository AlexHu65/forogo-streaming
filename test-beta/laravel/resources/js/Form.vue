<template>
  <div id="form">
    <h1>Basic form validation with Vuelidate</h1>
    <form-component />
  </div>
</template>

<script>
import FormComponent from "./components/FormComponent.vue";

export default {
  name: "Form",
  components: {
    FormComponent
  }
};
</script>
