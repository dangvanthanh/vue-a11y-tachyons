<template>
  <div>
    <div class="tabs">
      <ul class="list pl0 mb0">
        <li v-for="tab in tabs" :key="tab" class="dib">
          <a
            :href="tab.href"
            @click="selectTab(tab)"
            :class="{ 'red bt br bl': tab.isActive }"
            class="db link underline-hover dark-gray f5 f4-ns lh-copy pt2 pb2 pl3 pr3 dib relative z-1">
            {{ tab.name }}
          </a>
        </li>
      </ul>
    </div>
    <div class="tabs-details pl3 pr3 ba relative z-0">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tabs',
  data () {
    return {
      tabs: []
    }
  },
  created () {
    this.tabs = this.$children;
  },
  methods: {
    selectTab (selectedTab) {
      this.tabs.forEach(element => {
        tab.isActive = (tab.name == selectedTab.name)
      });
    }
  }
}
</script>

