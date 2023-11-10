<template>
    <div class="filter__form__item">
        <label for="" class="filter__form__item__label">{{ modelValue.title }}</label>
        <my-checkbox 
            v-for="(checkbox, index) in modelValue.checkboxList"
            :key="checkbox.title"
            :checkbox="checkbox"
            @update="changeCheckbox(index, $event)"
        />
    </div>
</template>

<script>
import myCheckbox from './UI/myCheckbox.vue';

export default {
    name: "checkbox-list",
    components: {
        myCheckbox
    },
    props: {
        modelValue: {
            type: Object,
            required: true,
            default: {title: '', checkboxList: []}
        }
    },
    methods: {
        changeCheckbox(index, $event) {
            this.$emit('update:modelValue', this.modelValue);
        }
    }
    
}
</script>

<style>

</style>