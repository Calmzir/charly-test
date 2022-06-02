<template>
  <div class="index">
      <Filters />
      <List :companies="companies"/>
  </div>
</template>

<script>
import List from './../components/List.vue'
import Filters from './../components/Filters.vue'
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
export default {
    name: 'Index',
    components: {
        List,
        Filters
    },
    setup() {
        const store = useStore()

        onMounted(() => {
            store.dispatch('getCompanies')
        })

        const companies = computed(() => store.state.companies)

        return {
            companies
        }
    }
}
</script>

<style lang="scss">
    .index {
        width: 100%;
        height: 100%;
        position: relative;
    }
</style>