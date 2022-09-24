<script lang="ts">
  import { defineComponent } from 'vue'

  interface Props {
    id:number,
    img: string,
  }
    
  export default defineComponent({
    props: {
      item_data: {
        type: Object as () => Props,
        default: () => {}
      }
    },
  })

</script>
    
<template>
  <div>
    <img class="carousel__image" :src="'/src/assets/images/'+item_data.img" alt="">
  </div>
</template>