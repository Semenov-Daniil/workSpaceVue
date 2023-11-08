<template>
  <select
    name="city"
    id="city_list"
    class="filter__form_item__input"
    style="width: 100%"
    :value="modelValue"
    @change="changeOption"
  >
    <option disabled value="">Выбрать город</option>
    <option
      v-for="option in options"
      :key="option.value"
      :value="option.value"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "my-select",
  props: {
    modelValue: {
      type: String
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    changeOption(event) {
      this.$emit('update:modelValue', event.target.value);
    }
  }
};
</script>

<style></style>
