<template>
    <div class="filter__form__item__input__section">
        <input 
            type="checkbox" 
            class="filter__form_item__checkbox" 
            name="format_office"
            id="format_office" 
            :checked="modelValue"
            @change="$emit('update:modelValue', $event.target.checked)"
        />
        <label for="format_office">{{ title }}</label>
    </div>
</template>

<script>
export default {
    name: 'my-checkbox',
    props: {
        title: {
            type: String,
            default: "",
        },
        modelValue: {
            type: Boolean,
        },
    },
    methods: {
        changeCheckbox(event) {
            this.checkbox.value = event.target.checked;
            this.$emit("update", this.checkbox);
        }
    }
}
</script>

<style>

</style>