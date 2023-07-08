<template>
  <button class="dy-button" :class="buttonStyle"><slot /></button>
</template>
<script setup lang="ts" name="dy-button">
  import './style/index.less'
  import { computed } from 'vue'
  type ButtonProps = {
    type?: string
  }
  const buttonProps = defineProps<ButtonProps>()

  const buttonStyle = computed(() => {
    return { [`dy-button--${buttonProps.type}`]: buttonProps.type }
  })
</script>
