<template>
    <div class="filter__form__item">
        <label for="" class="filter__form__item__label">{{ title }}</label>
        <my-checkbox 
            v-for="(checkbox, index) in checkboxList"
            :key="index"
            v-model:value="checkbox.value"
            :title="checkbox.title"
            :id="checkbox.id"
            @change="$emit('update:checkboxList', JSON.parse(JSON.stringify(checkboxList)))"
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
        checkboxList: {
            type: Array,
            required: true,
            default: () => []
        },
        title: {
            type: String, Number,
            default: ''
        }
    }, 
    methods: {

    },
}
</script>

<style>

</style>