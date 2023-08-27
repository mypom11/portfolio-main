<template>
  <li ref="triggerDiv"><slot></slot></li>
</template>

<script>
export default {
  props: {
    threshold: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      observer: null,
      option: {
        threshold: this.threshold,
      },
    };
  },
  methods: {
    handleIntersect(target) {
      if (target.isIntersecting) {
        this.$emit(`triggerFadeIn`);
      }
    },
    isIntersecting(target) {
      const boolean = target.isIntersecting;
      this.$emit("isFade", boolean);
    },
  },
  mounted() {
    this.observer = new IntersectionObserver((entries) => {
      this.handleIntersect(entries[0]);
      this.isIntersecting(entries[0]);
    }, this.option);
    this.observer.observe(this.$refs.triggerDiv);
  },
};
</script>
