<script lang="ts">
  import { defineComponent } from 'vue'
  import '../styles/homePage.scss'
  import SliderView from '../components/SliderView.vue'
    
  export default defineComponent({
    data() {
        return {};
    },
    methods: {},
    components: { SliderView }
  })
</script>
    
<template>
  <div class="home">
    <SliderView />
  </div>
</template>