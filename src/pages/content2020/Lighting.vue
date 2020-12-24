<template>
    <div class="Headernav">
    <Header msg="Hello!" />
    
    </div>


</template>

<script>
// @ is an alias to /src
import Header from '@/components/page/Header.vue'


export default {
  name: 'Lighting',
  components: {
      Header
  }
}
</script>