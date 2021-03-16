<template>
  <nav>
    <router-link to="/money">金钱</router-link>
    <router-link to="labels">标签</router-link>
    <router-link to="statistics">统计</router-link>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Money from '@/views/Money.vue';
import Labels from '@/views/Labels.vue';
import Statistics from '@/views/Statistics.vue';

@Component({
  components: {Statistics, Labels, Money}
})
export default class Nav extends Vue {

}
</script>

<style lang="scss" scoped>

</style>