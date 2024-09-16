<script setup>
import Avatar from "./model/img/avatar.png";
</script>

<template>
  <div class="Avatar">
    <img :src="Avatar" width="46px" height="46px" class="image"/>

    <div class="name">
      John Doe
    </div>
  </div>
</template>

<style lang="scss" scoped>
.Avatar {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
}

.image {
  width: 46px;
  height: 46px;
}

.name {
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  color: #293148;
}
</style>