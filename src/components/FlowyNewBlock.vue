<template lang="html">
  <div class="flowy-block mr-24px relative">
    <draggable
        :with-handle="false"
        :draggable-mirror="{ xAxis: false, appendTo: 'body' }"
        group="flowy"
        @start="onStart(nodeData)"
        @stop="onStop(nodeData)"
        :data="{ type: 'new', ...nodeData }"
      >
      <slot name="preview"></slot>
    </draggable>
  </div>
</template>

<script setup>
import {ref, computed, onMounted, onUnmounted, useSlots} from 'vue';

const node = ref({
  componentName: '',
  props: {},
});

const slots = useSlots();
onMounted(() => {
  const nodeSlot = slots.node()[0];
  if (nodeSlot && nodeSlot.type === Object) {
    node.value.componentName = nodeSlot.componentOptions.tag;
    node.value.props = {
      ...nodeSlot.componentOptions.propsData,
      ...nodeSlot.data.attrs,
    };
  }
});

const nodeData = computed(() => node.value);

const emit = defineEmits(['drag-start', 'drag-stop'])
const onStart = (data) => {
  emit('drag-start', data);
};

const onStop = (data) => {
  emit('drag-stop', data);
};
</script>
