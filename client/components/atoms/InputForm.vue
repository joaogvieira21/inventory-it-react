<template>
  <input :id="id" :name="name" :type="type" :placeholder="placeholder" :required="required" class="input-form">
</template>
  
<script>
  export default {
    props: {
      id: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      type: {
        type: String,
        required: true
      },
      placeholder: {
        type: String,
        required: false,
        default: ''
      },
      required: {
        type: Boolean,
        required: false,
        default: false
      }
    }
  }
  </script>
  
<style>

  .input-form {
    width: 100%;
    height: 32px;
    border: 1px solid gray
  }


</style>