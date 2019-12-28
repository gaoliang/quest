<template>
  <a-layout>
    <a-layout-sider
      class="sider"
      :style="{ overflow: 'auto', height: '100vh' }"
    >
      <a-button type="primary" block>工作区设置</a-button>

  <a-list itemLayout="horizontal" :dataSource="data">
    <a-list-item slot="renderItem" slot-scope="item">
      <a-list-item-meta
        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
      >
        <a slot="title" href="https://www.antdv.com/">{{item.title}}</a>
        <a-avatar
          slot="avatar"
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        />
      </a-list-item-meta>
    </a-list-item>
  </a-list>
      <div class="bottom-container">
        <a-button type="danger" block>删除当前工作区</a-button>
      </div>
    </a-layout-sider>
    <a-layout>
      <!-- <a-layout-header>Header</a-layout-header> -->
      <a-layout-content>
        <div>
          <a-row>
            <a-col :span="12">
              <request/>
            </a-col>
            <a-col :span="12">col-12</a-col>
          </a-row>
        </div>
      </a-layout-content>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<style lang="less" scoped>
@import "~@/assets/styles/var.less";

.sider {
  background: @primary-bg;
  // background: linear-gradient(to bottom, #434343, #000000);
  &::-webkit-scrollbar {
    width: 0;
  }
}

.bottom-container {
  padding: 24px 32px 8px;
  button {
    margin: 8px 0;
  }
}
</style>
<script>
// @ is an alias to /src
import Request from '@/components/Request'

const data = [
  {
    title: 'Ant Design Title 1'
  },
  {
    title: 'Ant Design Title 2'
  },
  {
    title: 'Ant Design Title 3'
  },
  {
    title: 'Ant Design Title 4'
  }
]
export default {
  name: 'home',
  data () {
    return {
      data
    }
  },
  components: {
    Request
  }
}
</script>
