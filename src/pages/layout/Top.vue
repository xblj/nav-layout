<template>
  <div>
    <el-menu router theme="dark" :default-active="activeTop" mode="horizontal" @select="changeTop">
      <el-menu-item :index="item.path" v-for="item in topNav" :key="item.path">{{item.title}}</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
import { mapGetters, mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState('nav', {
      activeTop: state => state.activeTop
    }),
    ...mapGetters('nav', ['topNav', 'leftNav'])
  },
  methods: {
    ...mapMutations('nav', ['changeTopNav']),
    changeTop(path) {
      this.changeTopNav(path)
    }
  },
  watch: {
    leftNav: {
      handler: function(val) {
        console.log(val)
      }
    }
  },
  mounted() {
    console.log(this.leftNav)
  }
}
</script>
