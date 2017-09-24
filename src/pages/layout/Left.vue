<template>
  <el-menu theme="dark" :default-active="activePath" class="el-menu-demo" mode="vertical" router>
    <template v-for="(item, index) in leftNav">
      <el-submenu :key="index" :index="activeTop+'/'+item.path">
        <template slot="title">{{item.title}}</template>
        <el-menu-item :index="activeTop+'/'+item.path+'/'+subItem.path" v-for="(subItem,index) in item.children" :key="index">{{subItem.title}}</el-menu-item>
      </el-submenu>
    </template>
  </el-menu>
</template>
<script>
import { mapGetters, mapState } from 'vuex'
export default {
  name: 'leftNav',
  computed: {
    ...mapGetters('nav', ['leftNav']),
    ...mapState('nav', ['activeTop','activePath'])
    // ...mapState('nav', {
    //   activeTop: state=>state.activeTop,
    //   activePath:state=>state.activePath
    // })

  }
}
</script>
