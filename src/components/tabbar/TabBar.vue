<template>
  <div id="tab-bar">
    <slot></slot>    
  </div>
</template>

<script>
export default {
  name: "TabBar"
};
</script>

<style scoped>
#tab-bar {
  display: flex;
  background-color: #ccc;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  box-shadow: 0 -4px 1px rgba(100, 100, 100, 0.08);
}

</style>

