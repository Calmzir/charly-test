<template>
  <div class="list">
    <div class="list-item" v-for="companie in companies" :key="companie.id">
        <span class="item-data__name">
            {{companie.name}}
        </span>
        <span class="item-data__date">
            {{companie.date}}
        </span>
        <span class="item-data__status">
            {{companie.status}}
        </span>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'List',
        props: {
            companies: {
                type: Array,
                default: []
            }
        }
    }
</script>

<style lang="scss">
    .list {
        display: block;
        margin: 0 auto;
        padding: 2em;
    }

    .list-item  {
        padding: 5px;
        width: 100%;
        border: 1px solid grey;
        border-radius: 10px;
        margin: 10px 0;
        display: flex;
        justify-content: space-between;
    }
</style>