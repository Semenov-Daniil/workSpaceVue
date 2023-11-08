<template>
  <header>
    <my-header/>
  </header>
  <main>
    <router-view></router-view>
  </main>
  <footer>
    <my-footer/>
  </footer>
</template>

<script>
import myHeader from "@/components/header.vue";
import myFooter from "@/components/footer.vue";

export default {
  components: {
    myHeader,
    myFooter,
  }
}
</script>

<style>

</style>