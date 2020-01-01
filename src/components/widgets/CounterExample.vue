<template lang="pug">
  fieldset.example
    legend count: {{ value }}
    button(@click="increment") +
    button(@click="decrement") -
    slot(:count="value")
</template>

<script>
export default {
  data() {
    const value = parseInt(this.value)
    return {
      count: isNaN(value) ? 0 : value
    };
  },
  props:{
    value:{
      type:[String,Number],
      required:false,
      default:0
    }
  },
  methods: {
    increment() {
      const count = this.count + 1;
      this.$emit('input',count);
      this.count = count;
    },
    decrement() {
      const count = this.count - 1;
      this.$emit('input',count);
      this.count = count;
    }
  }
};
</script>