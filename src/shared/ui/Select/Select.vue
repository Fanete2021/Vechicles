<script setup>

const props = defineProps({
  modelValue: String,
  options: Array
})

const emit = defineEmits(['update:modelValue']);
</script>

<template>
  <select
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
  >
    <option v-for="option in options" v-bind:value="option">{{ option }}</option>
  </select>
</template>

<style scoped lang="scss">
select {
  border-radius: 8px;
  border: 1px solid #E4E4E4;
  outline: none;
  font-size: 16px;
  line-height: 22px;
  color: #293148;
  padding: 9px 57px 9px 16px;
  appearance: none;
  background: url('@/shared/assets/icons/chevron_down.svg') no-repeat right 16px center;
  background-size: 24px;
}
</style>