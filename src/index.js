import Tabs from './components/Tabs.vue';
import Tab from './components/Tab.vue';

const components = {
  Tabs,
  Tab
};

const install = function(Vue, opts = {}) {
  Object.values(components).forEach(component => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default Object.assign({}, components, { install });
