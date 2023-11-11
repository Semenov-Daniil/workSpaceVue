<template>
  <section class="work-list">
    <work-item 
      v-for="(workItem, index) in workList"
      :key="index"
      :workCard="workItem"
    />    
  </section>
</template>

<script>
import workItem from './workItem.vue';

export default {
  components: { workItem },
  props: {
    workList: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style>

</style>