<template>
  <section
    @wheel="wheelRotate($event)"
    @mousedown="startDrag"
    @mousemove="drag"
    @mouseleave="endDrag"
    @mouseup="endDrag"
    @touchstart="startDrag"
    @touchmove="drag"
    @touchend="endDrag"
  >
    <div class="wheel-container">
      <ul
        class="wheel-cards"
        ref="wheel"
        :style="{
          transform: `translate(-50%,-50%) rotate(${rotateDegree * 90}deg)`,
        }"
      >
        <IntersectionObserver
          v-for="(project, i) in projects.slice().reverse()"
          :key="i"
          :style="{
            transform: transform(i),
            backgroundImage: `url(${project.img})`,
          }"
          :class="{ active: observer === i }"
          @triggerFadeIn="classOn(i)"
        >
        </IntersectionObserver>
      </ul>
    </div>

    <div class="project-desc">
      <h1>{{ projects.slice().reverse()[observer].name }}</h1>
      <ul class="use-skill">
        <li
          v-for="skill in projects.slice().reverse()[observer].skill"
          :key="skill"
          :class="skill"
        ></li>
      </ul>
      <p v-html="projects.slice().reverse()[observer].desc"></p>
      <div class="button-container">
        <button
          v-if="projects.slice().reverse()[observer].learn !== null"
          @click="location(projects.slice().reverse()[observer].learn)"
        >
          <span>Learn More</span>
        </button>
        <button @click="location(projects.slice().reverse()[observer].git)">
          <span>GitHub</span>
        </button>
        <button @click="location(projects.slice().reverse()[observer].demo)">
          <span>Demo</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import IntersectionObserver from "@/components/InterctionObserver.vue";
export default {
  name: "AppProject",
  mounted() {
    this.wheel = this.$refs.wheel;
  },
  data() {
    return {
      projects: [
        {
          name: "이상형 월드컵 사이트",
          skill: ["html", "css", "scss", "js", "vue", "aws", "node", "mongo"],
          desc: "- mongoDB와 node를 활용하여 DB와 서버를 구현<br/>- 게임을 등록하고 조회 가능한 UI구현<br/>- 비 로그인 방식으로 게임을 진행, 댓글 기능 구현<br/>- 게임목록의 정렬 및 검색 기능 구현<br/> - intractiveObserver를 활용한 스크롤 애니메이션 구현",
          git: "https://github.com/mypom11/IdealWorldCup",
          learn: null,
          demo: "http://13.124.59.247",
          img: require("@/assets/images/project/project1-1.png"),
          num: 0,
        },
        {
          name: "영화 및 OTT 검색 사이트",
          skill: ["html", "css", "scss", "js", "vue", "aws", "node"],
          desc: "- TMDB Api를 이용해 영화와 TV시리즈의 정보를 보여줌<br/>- 애플의 홈페이지와 비슷한 느낌의 스크롤 이벤트 구현<br/>- 영화, TV시리즈 검색 기능 구현<br/>- 예전 Ipod의 CoverFlow 느낌의 컴포넌트 구현<br/>- node를 이용한 기본적인 서버 구현",
          git: "https://github.com/mypom11/movie-web",
          learn: null,
          demo: "http://54.180.43.106",
          img: require("@/assets/images/project/project2-1.png"),
          num: 1,
        },
        {
          name: "전기차 충전소 검색 사이트",
          skill: ["html", "css", "scss", "js", "vue", "aws", "node"],
          desc: "- 공공데이터를 사용하여 행정 구역 별 충전소 상태 및 위치를 확인하는 웹<br/>- 카카오 맵 api를 연동하여 선택된 충전소 위치를 지도에 표시하는 기능<br/>- 검색기능으로 충전소 검색 가능<br/>- 충전소 상세 정보 확인 및 지도 상 위치로 이동 - AWS서버를 활용하여 서버 구현",
          git: "https://github.com/mypom11/ev-charger",
          learn: "https://www.notion.so/ce7c4e91d433448fb03a67ba2624e6c0",
          demo: "http://13.209.206.3",
          img: require("@/assets/images/project/project3-1.png"),
          num: 2,
        },
        {
          name: "기존 포트폴리오",
          skill: ["html", "css", "scss", "js", "jquery"],
          desc: "- 반응형 웹 구현<br/>- jQurey를 활용하여 원페이지 스크롤 페이지 제작<br/>- 가로스크롤 이벤트 작성<br/>- mac Finder 모양의 GUI 작성<br/>- 신입 시절 만들었던 프로젝트들 포함",
          git: "https://github.com/mypom11/new-portfolio",
          learn: null,
          demo: "https://mypom11.github.io/new-portfolio/",
          img: require("@/assets/images/project/project4-1.png"),
          num: 3,
        },
      ],
      observer: 0,
      rotateDegree: 0,
      wheel: "",
      wheelDetected: false,
      mouseDrag: false,
      initialMousePos: null,
      rotationApplied: true,
    };
  },
  methods: {
    transform(i) {
      const radius = this.wheel.offsetWidth / 2;
      const angle = (i * (2 * Math.PI)) / this.projects.length;

      return `translate(-50%,-50%) translate(${
        radius + radius * Math.sin(angle)
      }px, ${radius - radius * Math.cos(angle)}px ) rotate(${
        angle + 1.5708
      }rad`;
    },
    wheelRotate(e) {
      e.preventDefault();
      if (!this.wheelDetected) {
        this.wheelDetected = true;
        if (e.deltaY > 0) {
          this.rotateDegree++;
        } else {
          this.rotateDegree--;
        }
        setTimeout(() => {
          this.wheelDetected = false;
        }, 2000);
      }
    },
    classOn(num) {
      this.observer = num;
    },
    startDrag(event) {
      this.mouseDrag = true;
      if (event.clientY === undefined) {
        this.initialMousePos = event.changedTouches[0].clientY;
      } else {
        this.initialMousePos = event.clientY;
      }
      setTimeout(() => {
        this.rotationApplied = false;
      }, 300);
    },
    drag(event) {
      if (this.mouseDrag && !this.rotationApplied) {
        let delta;
        if (event.clientY === undefined) {
          delta = event.changedTouches[0].clientY - this.initialMousePos;
        } else {
          delta = event.clientY - this.initialMousePos;
        }
        if (delta < 0) {
          this.rotateDegree++;
        } else {
          this.rotateDegree--;
        }
        this.rotationApplied = true;
      }
    },
    endDrag() {
      this.mouseDrag = false;
      this.initialMousePos = null;
      this.rotationApplied = true;
    },
    location(url) {
      window.open(url);
    },
  },

  components: {
    IntersectionObserver,
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/_variables.scss";

section {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: #2f4f4f;
}

.wheel-container {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  color: $white;
  height: 100vh;
}
.wheel-cards {
  position: absolute;
  width: 100vh;
  height: 100vh;
  max-width: 60vw;
  max-height: 60vw;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(0);
  background: $gray;
  border-radius: 50%;
  transition: 1s ease-in;
  will-change: transform;
  > li {
    position: absolute;
    top: 0;
    left: 0;
    width: 40vw;
    height: 30vw;
    aspect-ratio: 1 / 1;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    filter: blur(5px);
    &.active {
      z-index: 1;
      filter: none;
    }
  }
}

.project-desc {
  position: absolute;
  left: 15%;
  top: 50%;
  transform: translateY(-50%);
  width: rem(600);
  h1 {
    font-size: rem(50);
    font-weight: 700;
    margin-bottom: rem(10);
  }
  p {
    margin-top: rem(40);
    margin-bottom: rem(40);
    line-height: 1.5;
    font-size: rem(20);
    word-break: keep-all;
  }
}
</style>
