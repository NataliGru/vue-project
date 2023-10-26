<script>
export default {
  emits: ['hide'],
  props: {
    active: Boolean,
  },
  methods: {
    hide() {
      this.$emit('hide');
    }
  }
};
</script>

<template>
  <article
    class="message"
    :class="{
      'is-hidden': !active,
    }"
  >
    <div class="message-header">
      <button type="button" class="delete" @click="hide"></button>
    </div>

    <div class="message-body">
      <slot>ERROR</slot>
    </div>
  </article>
</template>
