<template>
  <div>
    <Waterfall :list="list" hasAroundGutter>
      <template #item="{ url }">
        <div class="card">
          <LazyImg class="card-hover" :url="url" />
          <p class="text">这是具体内容</p>
        </div>
      </template>
    </Waterfall>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { LazyImg, Waterfall } from 'vue-waterfall-plugin-next'
import 'vue-waterfall-plugin-next/dist/style.css'
export default {
  name: 'HomePage',
  components: {
    Waterfall,
    LazyImg,
  }, 
  setup() {
    const data = reactive({
      list: [
        {
          id: '1',
          src: 'https://cdn.shopify.com/s/files/1/2418/2505/files/NA465-HEL1297-LUGGAGE-DEF.webp?v=1720165059',
        },
        {
          id: '2',
          src: 'https://cdn.shopify.com/s/files/1/2418/2505/files/YN565-NAH3629-MkDefault.webp?v=1720161220',
        },
        {
          id: '3',
          src: 'https://cdn.shopify.com/s/files/1/2418/2505/files/NA465-HEL1297-LUGGAGE-DEF.webp?v=1720165059',
        },
        {
          id: '4',
          src: 'https://cdn.shopify.com/s/files/1/2418/2505/files/YN565-NAH3629-MkDefault.webp?v=1720161220',
        },
        {
          id: '5',
          src: 'https://cdn.shopify.com/s/files/1/2418/2505/files/NA465-HEL1297-LUGGAGE-DEF.webp?v=1720165059',
        },
        {
          id: '6',
          src: 'https://cdn.shopify.com/s/files/1/2418/2505/files/YN565-NAH3629-MkDefault.webp?v=1720161220',
        },
        {
          id: '7',
          src: 'https://cdn.shopify.com/s/files/1/2418/2505/files/NA465-HEL1297-LUGGAGE-DEF.webp?v=1720165059',
        },
        {
          id: '8',
          src: 'https://cdn.shopify.com/s/files/1/2418/2505/files/YN565-NAH3629-MkDefault.webp?v=1720161220',
        },
        {
          id: '9',
          src: 'https://cdn.shopify.com/s/files/1/2418/2505/files/NA465-HEL1297-LUGGAGE-DEF.webp?v=1720165059',
        },
        {
          id: '10',
          src: 'https://cdn.shopify.com/s/files/1/2418/2505/files/YN565-NAH3629-MkDefault.webp?v=1720161220',
        },
        {
          id: '11',
          src: 'https://cdn.shopify.com/s/files/1/2418/2505/files/NA465-HEL1297-LUGGAGE-DEF.webp?v=1720165059',
        },
        {
          id: '12',
          src: 'https://cdn.shopify.com/s/files/1/2418/2505/files/YN565-NAH3629-MkDefault.webp?v=1720161220',
        },
        {
          id: '13',
          src: 'https://cdn.shopify.com/s/files/1/2418/2505/files/NA465-HEL1297-LUGGAGE-DEF.webp?v=1720165059',
        },
        {
          id: '14',
          src: 'https://cdn.shopify.com/s/files/1/2418/2505/files/YN565-NAH3629-MkDefault.webp?v=1720161220',
        },
        {
          id: '15',
          src: 'https://cdn.shopify.com/s/files/1/2418/2505/files/NA465-HEL1297-LUGGAGE-DEF.webp?v=1720165059',
        },
      ]
    })
    return {
      ...toRefs(data),
    }
  },
}

</script>
<style scoped>
.card-hover {
  width: 80%;
  height: 80%;
  transform: scale(1);
  transition: all 1s;
}
.card-hover:hover {
  transform: scale(1.2);
}
</style>