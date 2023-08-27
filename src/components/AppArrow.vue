<template>
  <div
    class="arrow-container"
    :style="{ pointerEvents: ani ? 'none' : 'auto' }"
    v-if="!view"
  >
    <div
      class="top"
      @click="setPos({ x: 0, y: 1 })"
      v-if="posX === 0 && posY < 1"
    >
      <font-awesome-icon :icon="['fas', 'angle-up']" />
      <p v-if="posX !== 0 || posY !== 0">MAIN</p>
      <p v-else>ABOUT ME</p>
    </div>
    <div
      class="right"
      @click="setPos({ x: -1, y: 0 })"
      v-if="posX > -1 && posY === 0"
    >
      <p v-if="posX !== 0 || posY !== 0">MAIN</p>
      <p v-else>PROJECT</p>
      <font-awesome-icon :icon="['fas', 'angle-right']" />
    </div>
    <div
      class="bottom"
      @click="setPos({ x: 0, y: -1 })"
      v-if="posX === 0 && posY > -1"
    >
      <p v-if="posX !== 0 || posY !== 0">MAIN</p>
      <p v-else>CONTACT</p>
      <font-awesome-icon :icon="['fas', 'angle-down']" />
    </div>
    <div
      class="left"
      @click="setPos({ x: 1, y: 0 })"
      v-if="posX < 1 && posY === 0"
    >
      <font-awesome-icon :icon="['fas', 'angle-left']" />
      <p v-if="posX !== 0 || posY !== 0">MAIN</p>
      <p v-else>CARRER</p>
    </div>
    <div class="view" @click="zoomOut">
      <p>VIEW ALL</p>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "AppArrow",
  methods: {
    ...mapMutations(["setPos", "zoomOut"]),
  },
  computed: {
    ...mapState(["ani", "posX", "posY", "view"]),
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/_variables.scss";
.arrow-container {
  > div {
    z-index: 10;
    position: fixed;
    color: $white;
    opacity: 0.4;
    font-size: rem(30);
    padding: 20px;
    cursor: pointer;
    text-align: center;
    &:hover {
      opacity: 1;
      > p {
        color: $orange;
      }
    }
    > p {
      font-size: rem(20);
      font-weight: 900;
      transition: 0.2s;
    }
    > svg {
      color: $orange;
      transition: 0.2s ease-in;
    }
    &.left {
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      display: flex;
      > p {
        transform: rotate(-90deg);
      }
      svg {
        transform: translateX(0);
      }
      &:hover {
        svg {
          transform: translateX(-50%);
        }
      }
    }
    &.right {
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      display: flex;
      > p {
        transform: rotate(90deg);
      }
      svg {
        transform: translateX(0);
      }
      &:hover {
        svg {
          transform: translateX(50%);
        }
      }
    }
    &.top {
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      svg {
        transform: translateY(0);
      }
      &:hover {
        svg {
          transform: translateY(-50%);
        }
      }
    }
    &.bottom {
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      svg {
        transform: translateY(0);
      }
      &:hover {
        svg {
          transform: translateY(50%);
        }
      }
    }
  }
}
</style>
