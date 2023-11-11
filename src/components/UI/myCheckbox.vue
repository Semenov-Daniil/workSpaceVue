<template>
    <div class="filter__form__item__input__section">
        <input 
            type="checkbox" 
            class="filter__form_item__checkbox" 
            :id="id" 
            :checked="value"
            @change="$emit('update:value', $event.target.checked)"
        />
        <label :for="id">{{ title }}</label>
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
        value: {
            type: Boolean,
            default: false
        },
        id: {
            type: String, Number,
            default: "",
        }
    },
}
</script>

<style>

</style>