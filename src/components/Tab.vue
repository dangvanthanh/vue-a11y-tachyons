<template>
  <div v-show="isActive">
    <h1 class="f4 f3-ns mt4">{{ name }}</h1>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Tab',
  props: {
    name: { required: true },
    selected: { default: false }
  },
  data () {
    return {
      isActive: false
    }
  },
  computed: {
    href () {
      return `# ${this.name.toLowerCase().replace(/ /g, '-')}`
    }
  },
  mounted () {
    this.isActive = this.selected
  }
}
</script>
