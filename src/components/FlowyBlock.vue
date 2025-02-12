<template>
  <div class="flowy-block mr-24px relative" :data-id="`node-${node.id}`"
       :class="{
      'no-children': noChildren || null,
      [node.customClass]: true
    }">
    <slot></slot>
    <component
      :is="component"
      v-bind="{ ...$props, ...$attrs, ...passedProps }"
      ref="block"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  node: {
    type: Object,
    required: true,
  },
  remove: {
    type: Function,
    required: true,
  },
  noChildren: Boolean,
});

const component = computed(() => props.node.nodeComponent);
const passedProps = computed(() => props.node.data);
</script>
