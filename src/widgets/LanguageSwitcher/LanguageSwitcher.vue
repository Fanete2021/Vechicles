<script setup>
import UK from "./model/icons/uk.svg";
import ChevronDown from "@/shared/assets/icons/chevron_down.svg";
</script>

<template>
  <div class="LanguageSwitcher">
    <img :src="UK" width="24px" height="24px" class="flag"/>

    <div class="selected-language">
      En
    </div>

    <img :src="ChevronDown" width="24px" height="24px" class="chevron" />
  </div>
</template>

<style lang="scss" scoped>
.LanguageSwitcher {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.flag {
  width: 24px;
  height: 24px;
}

.selected-language {
  color: #293148;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  margin-left: 14px;
}

.chevron {
  margin-left: 3px;
  width: 24px;
  height: 24px;
}
</style>