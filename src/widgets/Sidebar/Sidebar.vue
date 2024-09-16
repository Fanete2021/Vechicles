<script setup>
import User from "@/shared/assets/icons/user.svg";
import Rim from "@/shared/assets/icons/rim.svg";
import Settings from "@/shared/assets/icons/settings.svg";
import Wave from "@/shared/assets/img/wave.png";
</script>

<template>
  <div class="Sidebar">
    <h1 class="title">
      Demo Test
    </h1>

    <ul class="items">
      <li class="item">
        <img :src="User" class="item__icon" width="24" height="24" />

        <span class="item__title">Profile</span>
      </li>

      <li class="item item-active">
        <img :src="Rim" class="icon" width="24" height="24" />

        <span class="item__title">Vechicles</span>
      </li>

      <li class="item">
        <img :src="Settings" class="icon" width="24" height="24" />

        <span class="item__title">Setting</span>
      </li>
    </ul>

    <img class="wave" :src="Wave"/>
  </div>
</template>

<style lang="scss" scoped>
.Sidebar {
  height: 100vh;
  width: 256px;
  background: #282828;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
}

.title {
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  color: white;
  text-align: center;
  margin-top: 30px;
}

.items {
  margin-top: 102.5px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.item {
  height: 48px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  padding-left: 30px;
}

.item-active {
  background: #FFFFFF33;
  border-left: 2px solid #D90E32;

  .item__title {
    color: white;
  }
}

.item__icon {
  width: 24px;
  height: 24px;
}

.item__title {
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #FFFFFF73;
}

.wave {
  margin-top: auto;
}

</style>