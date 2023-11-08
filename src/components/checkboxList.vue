<template>
    <div class="filter__form__item">
        <label for="" class="filter__form__item__label">{{ checkboxData.title }}</label>
        <my-checkbox 
            v-for="checkbox in checkboxData.checkboxList"
            :key="checkbox.title"
            :checkbox="checkbox"
          
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
        checkboxData: {
            type: Object,
            required: true,
            default: {labelText: '', checkboxList: []}
        }
    },
    methods: {
        changeCheckbox(checkbox) {
            console.log(checkbox, this.checkboxData);
        }
    }
    
}
</script>

<style>

</style>