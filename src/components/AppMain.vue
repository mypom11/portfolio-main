<template>
  <section>
    <div class="intro">
      <marquee direction="left" scrollamount="20">FRONT-END DEVELOPER</marquee>
      <marquee scrollamount="20" direction="right">FRONT-END DEVELOPER</marquee>
      <marquee scrollamount="30" direction="left">FRONT-END DEVELOPER</marquee>
      <marquee scrollamount="30" direction="right">FRONT-END DEVELOPER</marquee>
      <h1>
        <span class="aniText" v-for="(spell, i) in name.split('')" :key="i">{{
          spell
        }}</span>
      </h1>
    </div>

    <div class="main">
      <h1>PORTFOLIO <span></span><span></span></h1>
      <h2>Min's</h2>
    </div>
  </section>
</template>

<script>
import gsap from "gsap";

export default {
  name: "AppMain",
  mounted() {
    this.introAni();
  },
  data() {
    return {
      name: "MINJEONGKI",
    };
  },
  methods: {
    introAni() {
      gsap.from(".aniText", {
        opacity: 0,
        x: -100,
        color: "#14B3C5",
        stagger: 0.3,
        ease: "back",
      });
      gsap.to(".intro", {
        delay: 5,
        duration: 1,
        y: "-100%",
        ease: "power3",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/_variables.scss";
section {
  background: $black;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}
.intro {
  height: 100vh;
  background: $black;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  z-index: 1;
  marquee {
    line-height: 0.8;
    font-size: rem(260);
    color: $white;
    font-weight: 900;
    opacity: 0.2;
  }
  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateX(100px);
      color: $orange;
    }
    to {
      opacity: 1;
      transform: translateX(0);
      color: $white;
    }
  }
  h1 {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: $white;
    word-break: keep-all;
    white-space: nowrap;
    font-size: rem(200);
    font-weight: 900;
    span {
      display: inline-block;
      opacity: 1;
      transform: translateX(0);
    }
  }
}

@keyframes letter {
  from {
    letter-spacing: 0px;
  }
  to {
    letter-spacing: rem(30);
  }
}
@keyframes liner {
  from {
    width: 0;
    opacity: 0;
    left: 0;
  }
  to {
    width: 95%;
    opacity: 1;
    left: 0;
  }
}
@keyframes opacity {
  from {
    opacity: 0.5;
  }
  to {
    opacity: 1;
  }
}
.main {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  letter-spacing: rem(10);
  h1 {
    font-size: rem(60);
    font-weight: bold;
    text-align: center;
    color: $orange;
    letter-spacing: 0px;
    position: relative;
    padding: 10px;
    cursor: default;
    animation: letter 2s 5s ease-in forwards;
    span {
      content: "";
      position: absolute;
      height: 7px;
      width: 0px;
      background: $orange;
      transition: 300ms;
      opacity: 0.3;
      left: 50%;
      animation: liner 2s 5s ease-in forwards;
      &:nth-child(1) {
        bottom: 0;
      }
      &:nth-child(2) {
        top: 0;
      }
    }
  }
  h2 {
    color: #fff;
    font-family: "PinyonScript", cursive;
    font-size: rem(100);
    font-weight: 100;
    bottom: 60%;
    position: absolute;
    opacity: 0.5;
    width: 100%;
    animation: opacity 2s 5s ease-in forwards;
  }
}
</style>
