import Vue from 'vue';

export default Vue.extend({
  name: 'FlowyDragHandle',

  render(h) {
    return h('div', {
      staticClass: this.draggable ? 'flowy-drag-handle': '',
    }, this.$slots.default);
  },
  props: {
    draggable: {
      type: Boolean,
      default: true
    }
  }
});
