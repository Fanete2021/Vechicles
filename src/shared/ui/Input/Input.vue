<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  icon: String,
  placeholder: String,
});

const emit = defineEmits(['update:modelValue']);
</script>

<template>
  <div class="Input">
    <input
        v-bind="$attrs"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :placeholder="placeholder"
    />

    <img
        v-if="icon"
        :src="icon"
        width="24px"
        height="24px"
        class="icon"
    />
  </div>
</template>

<style scoped lang="scss">
.Input {
  width: max-content;
  position: relative;

  input {
    border-radius: 8px;
    border: 1px solid #E4E4E4;
    outline: none;
    padding: 9px 83px 9px 16px;
    font-size: 16px;
    line-height: 22px;
    color: #293148CC;
  }

  .icon {
    width: 24px;
    height: 24px;
    position: absolute;
    right: 16px;
    top: 9px;
  }
}
</style>
