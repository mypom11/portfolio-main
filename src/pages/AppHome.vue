<template>
  <main>
    <div class="site-wrap" :class="{ 'show-all': view }">
      <div
        class="panel-wrap"
        :class="{ animate: ani }"
        :style="{ transform: `translate(${posX}00%,${posY}00%)` }"
      >
        <div
          class="panel"
          v-for="(panel, i) in section"
          :key="i"
          :style="{ top: `${panel.yPos}00%`, left: `${panel.xPos}00%` }"
          @click="zoomPanel(panel.xPos, panel.yPos)"
        >
          <component :is="panel.component"></component>
          <h1>{{ panel.location }}</h1>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import { mapMutations, mapState } from "vuex";

import AppCareer from "@/components/AppCareer.vue";
import AppProject from "@/components/AppProject.vue";
import AppContact from "@/components/AppContact.vue";
import AppAbout from "@/components/AppAbout.vue";
import AppMain from "@/components/AppMain.vue";
export default {
  name: "AppHome",
  data() {
    return {
      section: [
        {
          location: "MAIN",
          xPos: 0,
          yPos: 0,
          component: AppMain.name,
        },
        {
          location: "ABOUT ME",
          xPos: 0,
          yPos: -1,
          component: AppAbout.name,
        },
        {
          location: "CAREER",
          xPos: -1,
          yPos: 0,
          component: AppCareer.name,
        },
        {
          location: "PROJECT",
          xPos: 1,
          yPos: 0,
          component: AppProject.name,
        },
        {
          location: "CONTACT",
          xPos: 0,
          yPos: 1,
          component: AppContact.name,
        },
      ],
    };
  },
  methods: {
    ...mapMutations(["zoomIn"]),
    zoomPanel(x, y) {
      if (this.view) {
        this.zoomIn({ x, y });
      }
    },
  },
  components: {
    AppMain,
    AppAbout,
    AppProject,
    AppContact,
    AppCareer,
  },
  computed: {
    ...mapState(["posX", "posY", "ani", "view"]),
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/_variables.scss";
$fast: 0.3s;
$spacer: 1rem;
$easing: cubic-bezier(0.55, 0, 0.1, 1);
main {
  position: relative;
  overflow: hidden;
  perspective: 1000px;
  background-color: #282a2d;
  width: 100%;
  height: 100vh;
}
.site-wrap {
  transition: transform $fast * 2 $easing;
  &.show-all {
    transform: rotateY(-15deg) scale(0.2);
  }
}

.panel-wrap {
  height: 100vh;
  width: 100vw;
  perspective: 2000px;
  transition: transform $fast $easing;

  &.animate {
    transition: transform $fast $easing $fast;
    .panel {
      transform: scale(0.8) rotateX(25deg);
    }
  }
}

.panel {
  position: absolute;
  transition: transform $fast $easing;
  height: 100vh;
  width: 100vw;
  will-change: transform;
  background-color: #000;
  &:after {
    display: none;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: rgba($color: #000000, $alpha: 0.5);
  }
  &::before {
    background-color: transparent;
    bottom: 0;
    content: "";
    left: 0;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
    transition: background-color $fast $easing;
    z-index: 2;
  }
  h1 {
    display: none;
    color: $white;
    position: absolute;
    pointer-events: none;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: rem(140);
    font-weight: 900;
    z-index: 200;
    text-shadow: 3px 3px 6px rgba($color: #000000, $alpha: 0.25);
  }
  .show-all & {
    &:before {
      pointer-events: auto;
    }
    &:after {
      display: block;
    }
    h1 {
      display: block;
    }
  }
  &:hover {
    .show-all & {
      &:before {
        background-color: rgba(255, 255, 255, 0.1);
        cursor: pointer;
      }
    }
    h1 {
      color: $orange;
    }
  }
}

.panel-zoom {
  cursor: pointer;
  left: 50%;
  opacity: 0.2;
  position: absolute;
  top: 50%;
  transform: translateX(-50%) translateY(-50%) translateY(-12vmin);
  transition: opacity $fast $easing;
  user-select: none;
  z-index: 10;

  &:hover {
    opacity: 1;
  }
  .show-all & {
    pointer-events: none;
  }
}
</style>
