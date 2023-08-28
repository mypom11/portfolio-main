<template>
  <section>
    <div
      class="slide-container"
      @wheel="scrollEvent($event)"
      @mousedown="startDrag"
      @mousemove="drag"
      @mouseleave="endDrag"
      @mouseup="endDrag"
      @touchstart="startDrag"
      @touchmove="drag"
      @touchend="endDrag"
    >
      <ul
        class="slide"
        :style="{
          width: `${50 * projects.length}vw`,
          left: `${-scroll}%`,
        }"
      >
        <InterctionObserver
          v-for="(project, i) in projects"
          :key="i"
          :threshold="0.7"
          @isFade="isIntrecting($event, i)"
          :class="{ active: project.fade }"
        >
          <div class="slide-inner">
            <div
              class="img-wrap"
              :style="{ backgroundImage: `url(${project.img})` }"
            >
              <!-- <span></span>
              <span></span>
              <span></span> -->
            </div>
            <div class="text-wrap">
              <span>{{ project.company }}</span>
              <h1>
                {{ project.name }}
              </h1>
              <ul class="use-skill">
                <li
                  v-for="skill in project.skill"
                  :key="skill"
                  :class="skill"
                ></li>
              </ul>
              <h3>{{ project.period }}</h3>
              <h4>{{ project.formation }}</h4>
              <p class="desc" v-html="project.desc"></p>
              <div class="button-container">
                <button
                  v-if="project.learn !== null"
                  @click="location(project.learn)"
                >
                  <span>Learn More</span>
                </button>
                <button
                  v-if="project.demo !== null"
                  @click="location(project.demo)"
                >
                  <span>Demo</span>
                </button>
              </div>
            </div>
          </div>
        </InterctionObserver>
      </ul>
      <div class="progress-bar dn-m">
        <span
          :style="{
            width: `${(scroll / (this.projects.length - 1)) * 2}%`,
          }"
        ></span>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import InterctionObserver from "./InterctionObserver.vue";

export default {
  name: "AppCareer",
  data() {
    return {
      projects: [
        {
          name: "통합 SI솔루션 구축 시스템",
          company: "삼성 S-ONE(프리랜서)",
          period: "2022.11 ~ 2023.05 (6개월)",
          formation: "FrontEnd Developer / Web Team Leader",
          skill: ["html", "css", "scss", "js", "vue"],
          fade: true,
          desc: "위젯화 된 대시보드를 사용자가 원하는 대로 수정해서 사용 할 수 있는 모듈 구현 및 화면에 맞는 DB 구조 설계 변경, 각종 라이브러리를 삼성에서 원하는 UI로 변경하고 기능을 추가하였으며 정부기관에서 요구하는 웹 접근성에 맞게 페이지를 구성, 보안 및 QC에 알맞은 코드 생성.",
          learn: null,
          demo: null,
          img: require("@/assets/images/career/career1-1.png"),
        },
        {
          name: "Logme 건강관리 솔루션",
          company: "코리아 소프트(프리랜서)",
          period: "2022.12 ~ 2023.2 (3개월)",
          formation: "FrontEnd Developer / Web Team Leader / Web Publisher",
          skill: ["html", "css", "scss", "js", "vue"],
          fade: true,
          desc: "건강 관련 설문 및 불안/우울 등 많은 데이터를 DB에 작성함에 있어 백엔드와의 소통을 통해 데이터 입력 방식을 구체화 하며 클라이언트의 요청에 알맞는 차트와 도표를 구현, ES6문법을 활용하여 각종 설문 데이터를 입력하는 부분을 모듈화 하였으며 차트를 구현하는 과정에서 많은 로직을 활용할 수 있었음.",
          learn: null,
          demo: null,
          img: require("@/assets/images/career/career2-1.png"),
        },
        {
          name: "MCS 안전 관리 시스템",
          company: "코리아 소프트",
          period: "2022-06-01 ~ 2022-08-01 (2개월)",
          formation: "FrontEnd Developer / Web Publisher",
          skill: ["html", "css", "scss", "js", "vue"],
          fade: false,
          desc: "-한국 전력 공사와 한국 전력 공사MCS간의 공사를 등록하고 공사에 대한 안전 감시원을 배치, 안전 감시원의 안전 감시 내역을 관리할 수 있는 통합 관리 시스템 개발.<br/>- kakao Map Api를 활용하여 공사 위치 및 현재 공사 상태를 지도에 표시<br/>- 엑셀 데이터를 받아 DB의 양식과 맞게 변경 후 Backend Api서버에 POST<br/>- DB에서 내려받은 데이터를 EXCEL 문서로 변환 및 다운로드 기능 제공",
          learn: null,
          demo: null,
          img: require("@/assets/images/career/career3-1.png"),
        },
        {
          name: "LASVEGAS MANIA",
          company: "코리아 소프트",
          period: "2022-03-01 ~ 2022-08-01(5개월)",
          formation: "FrontEnd Developer / Web Publisher",
          skill: ["html", "css", "scss", "js", "vue"],
          fade: false,
          desc: "- restApi를 활용하여 상품 노출 및 상품 상세 페이지 제작.<br/>- squareUp Api를 활용하여 결제 모듈 설치",
          learn: null,
          demo: null,
          img: require("@/assets/images/career/career4-1.png"),
        },
        {
          name: "KUSF/STS 모바일 앱",
          company: "코리아 소프트",
          period: "2022-01-01 ~ 2022-08-01(7개월)",
          formation: "FrontEnd Developer / Web Publisher",
          skill: ["html", "css", "scss", "js", "vue"],
          fade: false,
          desc: "- WebView 방식을 활용한 모바일 어플리케이션 프론트엔드 작업, 관리자 페이지 프론트엔드 작업<br/>- google, apple, facebook OAuth 방식을 이용한 로그인 구현.<br/>- 변수를 활용하여 문자 인증 로직을 프론트에서 처리",
          learn: null,
          demo: "https://apps.apple.com/kr/app/kusf/id1628094344",
          img: require("@/assets/images/career/career5-1.png"),
        },
        {
          name: "세브란스 병원 - 로봇 관제 시스템",
          company: "코리아 소프트",
          period: "2022-03-01 ~ 2022-06-01(3개월)",
          formation: "FrontEnd Developer / Web Publisher",
          skill: ["html", "css", "scss", "js", "vue"],
          fade: false,
          desc: "-용인 세브란스 병원 내에서 움직이는 LG AI로봇의 API를 연결하여 로봇 등록 및 현재 상태, 위치 관리를 통합으로 할 수 있는 통합 관제 시스템 제작.<br/>- JavaScript를 활용하여 로봇의 VisionMap과 도면을 매핑 시키고 매핑 시킨 도면을 기준으로 현재 로봇의 위치를 실시간으로 표시.<br/>- 로봇에 특정 작업들을 순서대로 할 수 있는 서비스 생산 및 등록 가능하게 만듬.<br/>- 로봇의 활동 내역을 데이터로 받아 그래프 및 통계로 표시",
          learn:
            "https://www.notion.so/206a3b090edb42aba4df276851c55f07?pvs=12",
          demo: null,
          img: require("@/assets/images/career/career6-1.png"),
        },
        {
          name: "AIoT Station",
          company: "코리아 소프트",
          period: "2021-12-01 ~ 2022-03-01 (3개월)",
          formation: "FrontEnd Developer / Web Publisher",
          skill: ["html", "css", "scss", "js"],
          fade: false,
          desc: "- 인천대학교입구역 기준 역 주변 정보 및 내부 시설 내용 날씨 정보를 사용자에게 알려주는 App 개발.<br/>- kakao API를 활용하여 역 주변 정보 및 카테고리에 따른 데이터를 지도에 표시 및 라이브러리 내부 CSS수정 하여 표시<br/>- 화장실 센서 사용 정보를 api로 받아 각 칸 별로 화장실 사용 여부를 화면에 표시<br/>- chart.js 라이브러리를 활용하여 관리자 통합 시스템 내 통계 자료 그래프로 표현",
          learn: null,
          demo: "https://apps.apple.com/kr/app/aiot-station/id1603393211",
          img: require("@/assets/images/career/career7-1.png"),
        },
        {
          name: "경남대학교 캡스톤 디자인 사이트",
          company: "코리아 소프트",
          period: "2022-03-01 ~ 2022-03-21(3주)",
          skill: ["html", "css", "scss", "js", "jquery"],
          formation: "Web Publisher",
          fade: false,
          desc: "- Jquery를 활용한 무한 스크롤 리스트 제작<br/>- JavaScript를 활용한 슬라이드 제작 및 숫자 이펙트 제작<br/>- 데스크탑, 태블릿, 모바일 버전의 반응형 웹 제작",
          learn: null,
          demo: null,
          img: require("@/assets/images/career/career8-1.png"),
        },
        {
          name: "Gallery XR",
          company: "코리아 소프트",
          period: "2021-12-01 ~ 2022-02-01(3개월)",
          formation: "FrontEnd Developer / Web Publisher",
          skill: ["html", "css", "scss", "js", "vue"],
          fade: false,
          desc: "- vue-router, vuex를 활용한 상태 관리<br/>- rest-api 방식으로 backend api서버와 통신을 통한 데이터 입력 및 표현<br/>- jwt-token을 활용한 로그인 관리",
          learn: null,
          demo: null,
          img: require("@/assets/images/career/career9-1.png"),
        },
        {
          name: "허니 아케이드",
          company: "코리아 소프트",
          period: "2021-09-01 ~ 2021-12-01(3개월)",
          skill: ["html", "css", "scss", "js", "boot"],
          formation: "Web Publisher",
          fade: false,
          desc: "- 사용자 페이지 및 관리자 페이지 퍼블리싱 작업.<br/>- BootStrap을 활용한 관리자 웹사이트 퍼블리싱",
          learn: null,
          demo: "https://honeyarcade.com/Location?QRLocation=2&QRSeq=614&linkType=2&buildName=H%EB%B9%84%EC%A6%88%EB%8B%88%EC%8A%A4%ED%8C%8C%ED%81%AC",
          img: require("@/assets/images/career/career10-1.png"),
        },
      ],
      scroll: 0,
      mouseDrag: false,
      initialMousePos: null,
    };
  },
  methods: {
    scrollEvent(e) {
      if (!this.isMobile) {
        e.preventDefault();
        if (e.deltaY > 0) {
          if (this.scroll < 50 * (this.projects.length - 1)) {
            this.scroll++;
          }
        } else {
          if (this.scroll > 0) {
            this.scroll--;
          }
        }
      }
    },
    isIntrecting(boolean, i) {
      this.projects[i].fade = boolean;
    },
    location(url) {
      window.open(url);
    },
    startDrag(event) {
      this.mouseDrag = true;
      if (event.clientX === undefined) {
        this.initialMousePos = event.changedTouches[0].clientX;
      } else {
        this.initialMousePos = event.clientX;
      }
    },
    drag(event) {
      if (!this.isMobile) {
        if (this.mouseDrag) {
          let delta;
          if (event.clientX === undefined) {
            delta = event.changedTouches[0].clientX - this.initialMousePos;
          } else {
            delta = event.clientX - this.initialMousePos;
          }
          if (delta < 0) {
            if (this.scroll < 50 * (this.projects.length - 1)) {
              this.scroll++;
            }
          } else {
            if (this.scroll > 0) {
              this.scroll--;
            }
          }
        }
      }
    },
    endDrag() {
      this.mouseDrag = false;
      this.initialMousePos = null;
    },
  },
  computed: {
    ...mapState(["isMobile"]),
  },
  components: { InterctionObserver },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/_variables.scss";

section {
  width: 100vw;
  height: 100vh;
  background: #1a1a3a;
  position: relative;
  overflow: hidden;
}
.slide-container {
  position: relative;
  height: 100vh;
  overflow: hidden;
  width: 100vw;
  cursor: grab;
  @include mobile() {
    overflow-y: scroll;
    cursor: default;
  }
}
.slide {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  display: flex;
  width: 600vw;
  height: 100vh;
  will-change: left;

  > li {
    position: relative;
    height: 100%;
    width: 50vw;
    padding: 25vh 0;
    &:nth-child(2n) {
      padding: 35vh 0 15vh;
    }
    .slide-inner {
      height: 100%;
      position: relative;
      width: 100%;
      padding-left: 20vw;
    }
    .text-wrap {
      position: absolute;
      top: 0;
      left: 10%;
      width: 90%;
      h1 {
        font-size: rem(40);
        padding-top: rem(20);
        font-weight: 700;
        margin-bottom: rem(10);
        transform: translateX(rem(100));
        opacity: 0;
        transition: 0.2s ease-in;
        text-shadow: 3px 3px 6px rgba($color: $black, $alpha: 0.25);
      }
      > span {
        position: absolute;
        left: -5%;
        color: $gray;
        font-size: rem(16);
        transform: translateY(rem(100));
        opacity: 0;
        transition: 0.2s 0.2s ease-in;
      }
      h3 {
        font-size: rem(16);
        color: $gray;
        margin-bottom: rem(40);
        transform: translateY(rem(-100));
        opacity: 0;
        transition: 0.2s 0.2s ease-in;
      }
      h4 {
        color: orange;
        font-weight: 600;
        font-size: rem(16);
        margin-bottom: rem(10);
        opacity: 0;
        transition: 0.2s 0.2s ease-in;
      }
      .use-skill {
        opacity: 0;
        transition: 0.2s 0.2s ease-in;
      }
      .desc {
        width: 70%;
        font-size: rem(16);
        margin-bottom: rem(40);
        max-height: 0;
        overflow: hidden;
        transition: 0.4s 0.2s ease-in;
        line-height: 1.5;
      }
      .button-container {
        opacity: 0;
        transition: 0.6s 0.2s ease-in;
      }
    }

    .img-wrap {
      position: relative;
      right: 0;
      height: 70%;
      width: 30vw;
      background-color: #1a1a3a;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: contain;
      //   filter: blur(5px);
      &:after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba($color: #1a1a3a, $alpha: 0.5);
      }
      //   span {
      //     display: block;
      //     width: 100%;
      //     height: 34%;
      //     background: $black;
      //     &:nth-child(2n) {
      //       position: relative;
      //       right: 0;
      //     }
      //     @for $i from 0 to 4 {
      //       &:nth-child(#{$i}) {
      //         transition: #{$i * 0.1}s 0.2s ease-in;
      //       }
      //     }
      //   }
    }
    &.active {
      .img-wrap {
        > span {
          width: 0%;
        }
      }
      .text-wrap {
        h1 {
          transform: translateX(0);
          opacity: 1;
        }
        > span {
          transform: translateY(rem(-10));
          opacity: 1;
        }
        h3 {
          transform: translateY(0);
          opacity: 1;
        }
        h4 {
          opacity: 1;
        }
        .use-skill {
          opacity: 1;
        }
        .desc {
          max-height: rem(400);
        }
        .button-container {
          opacity: 1;
        }
      }
    }
  }
  @include mobile() {
    display: block;
    width: 100% !important;
    height: auto;
    top: 0;
    left: 0 !important;
    transform: none;
    padding-top: 10vh;
    > li {
      height: 50vh;
      width: 100%;
      padding: 0 2vw;
      &:nth-child(2n) {
        padding: 0 2vw;
      }
      .slide-inner {
        padding: 0;
      }
      .img-wrap {
        width: 100%;
        height: 100%;
      }
      .text-wrap {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        text-align: center;
        padding: rem(30) 0;
        background: rgba($color: #1a1a3a, $alpha: 0.8);
        > span {
          left: 5%;
        }
        .desc {
          padding: 0 rem(20);
          width: 100%;
        }
        .use-skill {
          justify-content: center;
        }
        .button-container {
          justify-content: center;
        }
      }
    }
  }
}
.progress-bar {
  position: absolute;
  bottom: 8%;
  left: 50%;
  height: 1px;
  width: 80%;
  transform: translateX(-50%);
  background: rgba($color: $white, $alpha: 0.25);
  span {
    position: absolute;
    left: 0;
    top: 50%;
    height: 1px;
    transform: translateY(-50%);
    width: 10%;
    background: $white;
  }
}
</style>
