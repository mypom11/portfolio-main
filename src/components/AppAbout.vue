<template>
  <section>
    <div class="about-wrap">
      <div class="profile-img">
        <div class="img-wrap">
          <img src="../assets/images/memogi.png" alt="" />
          <div class="typing-wrap">
            <div class="typing">
              <p class="text" ref="text"></p>
            </div>
          </div>
        </div>
      </div>
      <div class="profile-text">
        <h1>
          MIN JEONGKI
          <p>FRONTEND DEVELOPER</p>
        </h1>
        <ul class="tab">
          <li @click="tabNum = 0" :class="{ active: tabNum === 0 }">PROFILE</li>
          <li @click="tabNum = 1" :class="{ active: tabNum === 1 }">SKILLS</li>
        </ul>
        <ul class="text-box">
          <li>
            안녕하세요! 저는 Vue를 사용하여 뛰어난 웹을 만드는 2년차 열정적인
            프런트 엔드 개발자입니다. <br />제 전문 분야는
            <b>역동적이고 매력적인 사용자 인터페이스</b>를 만드는 웹 개발입니다.
            <br /><br />
            저의 특징 중 하나는 배움에 대한 끝없는 열정입니다. 저는 첫 회사에
            퍼블리셔로서 입사하였지만
            <b
              >3개월만에 SPA를 사용하는 프로젝트에서 저 스스로 선택하여
              프론트엔드 개발자로 전향</b
            >
            하였습니다. 첫 번째 회사에 재직하는 동안 저는 1년 동안 10개 이상의
            프로젝트를 퍼블리싱 및 프론트엔드 개발에 착수하였으며, 디자이너와
            백엔드, 기획 사이에서 개발자와 비개발자간의 원할한 의사소통을 돕고
            프로젝트를 발전시키기 위해 노력했습니다. 그러한 노력의 결과로 제
            의사로 퇴사를 했음에도 전 회사의 대표님의 요청에 프리랜서로 6개월
            동안 일 할 수 있는 기회를 얻었습니다. <br /><br />
            저는 특별한 기회로 S-ONE이란 대기업 내의 SI프로젝트에 참가할 수
            있었으며 이 프로젝트를 하며 전 회사와는 다른 환경에서 프로젝트를
            진행했었습니다. 이 곳에서 프론트엔드의 역할 뿐 아니라 백엔드와
            DBA에게 필요한 사항을 요청하고 웹 파트의 일정을 지휘하고 회의에
            참가해 의견을 이야기 하는 등
            <b>전반적인 리더의 역할을 수행</b>했습니다. <br /><br />

            <b class="c-black fw-900"
              >저는 새로운 것을 배우고 도전하는 것을 좋아합니다. 또한 저의
              능숙한 의사소통 능력은 동료들과 원활하게 협업하고, 팀워크를
              조성하고, 프로젝트를 성공으로 이끌 수 있는 소중한 자산입니다.</b
            >
          </li>
          <li :class="{ on: tabNum === 1 }">
            <ul class="skills">
              <li v-for="(skill, i) in skills" :key="i">
                <p>{{ skill.name }}</p>
                <div class="percent">
                  <span
                    :style="[
                      tabNum === 1
                        ? { width: `${skill.percent}%` }
                        : { width: '0%' },
                    ]"
                  ></span>
                  <b>{{ skill.percent }}%</b>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AppAbout",
  mounted() {
    this.typingStart();
  },
  data() {
    return {
      tabNum: 0,
      skills: [
        {
          name: "HTML5",
          percent: 80,
        },
        {
          name: "CSS3/Scss",
          percent: 70,
        },
        {
          name: "JavaScript",
          percent: 80,
        },
        {
          name: "VueJs",
          percent: 60,
        },
        {
          name: "React",
          percent: 20,
        },
        {
          name: "jQuery",
          percent: 40,
        },
        {
          name: "Node.js",
          percent: 40,
        },
        {
          name: "XD/Figma",
          percent: 60,
        },
      ],
    };
  },
  methods: {
    typingStart() {
      const text = this.$refs.text;
      const letters = [
        "HELLO WORLD!",
        "HTML5\nCSS3\nJAVASCRIPT",
        "REACT\nVUEJS\nANGULAR\nFLUTTER\nSVELTE",
      ];
      const speed = 100;
      let i = 0;

      function wait(ms) {
        return new Promise((res) => setTimeout(res, ms));
      }
      const remove = async () => {
        const letter = changeLineBreak(letters[i].split(""));
        while (letter.length) {
          await wait(speed);

          letter.pop();
          text.innerHTML = letter.join("");
        }
        i = !letters[i + 1] ? 0 : i + 1;
        typing();
      };
      const changeLineBreak = (letter) => {
        return letter.map((text) => (text === "\n" ? "<br>" : text));
      };
      const typing = async () => {
        const letter = changeLineBreak(letters[i].split(""));

        while (letter.length) {
          await wait(speed);
          text.innerHTML += letter.shift();
        }
        await wait(800);
        remove();
      };
      typing();
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~@/assets/scss/_variables.scss";
section {
  background: #4682b4;
  width: 100vw;
  height: 100vh;
}

.about-wrap {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 70%;
}
.profile-img {
  width: 40%;
  height: 100%;
  position: relative;
  .img-wrap {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: rgba($color: $white, $alpha: 0.4);
    width: 20vw;
    height: 20vw;
    border-radius: 50%;
  }
  .typing-wrap {
    position: absolute;
    left: 50%;
    bottom: 80%;
    @keyframes cursor {
      from {
        border-right: 2px solid #222;
      }
      to {
        border-right: 2px solid #777;
      }
    }
    .text {
      white-space: nowrap;
    }
    .text:after {
      content: "";
      margin-left: 0.6rem;
      border-right: 2px solid #777;
      animation: cursor 0.9s infinite steps(2);
    }
  }
}
.profile-text {
  width: 55%;
  h1 {
    font-size: rem(80);
    font-weight: 900;
    margin-bottom: 5%;
    p {
      font-size: rem(20);
      font-weight: 600;
      color: $gray;
    }
  }
  .tab {
    display: flex;
    gap: 10px;
    margin-bottom: 2%;
    > li {
      font-size: rem(20);
      font-weight: 500;
      cursor: pointer;
      position: relative;
      transition: 0.2s ease-in;
      &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        height: 1px;
        width: 0%;
        background: $orange;
        transition: 0.2s ease-in;
      }
      &:hover,
      &.active {
        color: $orange;
        &:after {
          width: 100%;
        }
      }
    }
  }
  .text-box {
    overflow: hidden;
    position: relative;
    display: flex;
    > li {
      padding: 2%;
      height: 100%;
      transition: 0.2s ease-in;
      transform: translateX(0);
      font-size: rem(20);
      word-break: keep-all;
      line-height: 1.5;
      letter-spacing: 0.8px;

      > b {
        font-weight: 600;
        color: orange;
      }
      &:nth-child(2) {
        position: absolute;
        width: 100%;
        height: 100%;
        transform: translateX(101%);
      }
      &.on {
        background: #4682b4;
        transform: translateX(0%);
      }
    }
  }
}
.skills {
  > li {
    color: $black;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    &:last-child {
      margin-bottom: 0;
    }
    p {
      font-weight: 600;
      width: 140px;
      text-align: center;
      background: rgba($color: $orange, $alpha: 0.7);
      padding: 5px;
    }
    .percent {
      position: relative;
      width: calc(100% - 120px);
      background: rgba($color: $white, $alpha: 0.2);
      text-align: right;
      padding-right: 20px;
      line-height: 30px;
      font-family: "PinyonScript";
      span {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 0%;
        transition: 0.5s 1s ease-in;
        background: $orange;
      }
    }
  }
}
</style>
