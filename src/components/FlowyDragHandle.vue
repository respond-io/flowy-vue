<template>
  <div class="draggable" :class="{ 'flowy-drag-handle': draggable }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "FlowyDragHandle",
  props: {
    draggable: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style></style>
