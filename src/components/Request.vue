<template>
  <a-layout>
    <a-layout-content>
      <a-row>
        <a-col :span="22">
          <a-input defaultValue="mysite">
            <a-select slot="addonBefore" defaultValue="GET">
              <a-select-option value="GET">GET</a-select-option>
              <a-select-option value="POST">POST</a-select-option>
            </a-select>
          </a-input>
        </a-col>
        <a-col :span="2">
          <a-button  type="primary" icon="thunderbolt"></a-button>
        </a-col>
      </a-row>
      <div style="width: 100%">
        <a-tabs defaultActiveKey="1" :tabPosition="mode" :style="{ height: '200px'}">
          <a-tab-pane tab="Header" key="header">

          </a-tab-pane>
          <a-tab-pane tab="Body" key="body">Body</a-tab-pane>
          <a-tab-pane tab="Auth" key="auth">Content of tab 3</a-tab-pane>
          <a-tab-pane tab="Depencency" key="depencency">Content of tab 4</a-tab-pane>
          <a-tab-pane tab="Docs" key="docs">docs</a-tab-pane>
          <a-tab-pane tab="Tab 6" key="6">Content of tab 6</a-tab-pane>
          <a-tab-pane tab="Tab 7" key="7">Content of tab 7</a-tab-pane>
          <a-tab-pane tab="Tab 8" key="8">Content of tab 8</a-tab-pane>
          <a-tab-pane tab="Tab 9" key="9">Content of tab 9</a-tab-pane>
          <a-tab-pane tab="Tab 10" key="10">Content of tab 10</a-tab-pane>
          <a-tab-pane tab="Tab 11" key="11">Content of tab 11</a-tab-pane>
        </a-tabs>
      </div>
    </a-layout-content>
  </a-layout>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.url_input {
}
</style>
