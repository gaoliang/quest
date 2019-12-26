<template>
  <a-layout>
    <a-layout-sider
      class="sider"
      :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }"
    >
      <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <HelloWorld msg="Welcome to Your Vue.js App" />
      </div>
    </a-layout-sider>
    <a-layout class="right-container">
      <div class="content">
        <keep-alive exclude="Loading,Theme">
          <router-view></router-view>
        </keep-alive>
      </div>
    </a-layout>
  </a-layout>
</template>

<style lang="less" scoped>
@import '~@/assets/styles/var.less';

.right-container {
  background: #fff;
  margin-left: 8px 8px 8px 208px;
  padding: 8px 16px 8px 8px;
  position: absolute;
  top: 8px;
  bottom: 8px;
  left: 208px;
  right: 0px;
}

.sider {
  background: @primary-bg;
  // background: linear-gradient(to bottom, #434343, #000000);
  &::-webkit-scrollbar {
    width: 0;
  }
}
</style>
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',

  components: {
    HelloWorld
  }
}
</script>
