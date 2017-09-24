<template>
  <div>
      <header>
          <top />
      </header>
      <div>
        <left />
      </div>
      <router-view></router-view>
  </div>
</template>
<script>
import top from './Top';
import left from './Left'
export default {
  components:{top, left}
}
</script>
