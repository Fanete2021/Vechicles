<script setup>
import ChevronLeft from "@/shared/assets/icons/chevron_left.svg";
import ChevronRight from "@/shared/assets/icons/chevron_right.svg";

const props = defineProps({
  allPage: {
    type: Number,
    default: 0
  },
  modelValue: {
    type: Number,
    default: 0
  }
})

const emit = defineEmits(['update:modelValue']);

const decrementPage = () => {
  if (props.modelValue > 1) {
    emit('update:modelValue', props.modelValue - 1);
  }
};

const incrementPage = () => {
  if (props.modelValue < props.allPage) {
    emit('update:modelValue', props.modelValue + 1);
  }
};
</script>

<template>
  <div class="Paginator">
    <button class="prev" @click="decrementPage">
      <img :src="ChevronLeft" width="24px" height="24px" alt="prev"/>
    </button>

    <div class="current">
      {{ modelValue }}
    </div>

    <div class="separator">
      of
    </div>

    <div class="all">
      {{ allPage }}
    </div>

    <button class="next" @click="incrementPage">
      <img :src="ChevronRight" width="24px" height="24px" alt="prev"/>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.Paginator {
  display: flex;
  gap: 12px;
  align-items: center;
}

.prev,
.next {
  display: flex;
  align-items: center;
  justify-content: center;
}

.current,
.all {
  padding: 5px 6px;
  min-width: 32px;
  min-height: 32px;
  border: 1px solid #E4E4E4;
  text-align: center;
  border-radius: 6px;
  user-select: none;
}
</style>