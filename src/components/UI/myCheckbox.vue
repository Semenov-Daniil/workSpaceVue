<template>
    <div class="filter__form__item__input__section">
        <input 
            type="checkbox" 
            class="filter__form_item__checkbox" 
            name="format_office"
            id="format_office" 
            :checked="checkbox.value"
            @change="changeCheckbox"
        />
        <label for="format_office">{{ checkbox.title }}</label>
    </div>
</template>

<script>
export default {
    name: 'my-checkbox',
    props: {
        checkbox: {
            type: Object,
            default: {'title': '', 'value': false}
        }
    },
    methods: {
        changeCheckbox(event) {
            this.checkbox.value = event.target.checked;
        }
    }
}
</script>

<style>

</style>