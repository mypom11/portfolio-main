<template>
  <section>
    <div class="card-wrap">
      <div class="card" :class="{ active: back }">
        <div class="card-back">
          <div class="bookmark" @click="back = !back">
            <span>&lt;/&gt;</span>
          </div>
          <div class="line-numbers">
            <div v-for="index in 14" :key="index">{{ index }}</div>
          </div>
          <code>
            <form
              action="https://formspree.io/f/mbjqqjqb"
              method="POST"
              target="_blank"
            >
              <span class="variable">function </span>
              <span class="method">메일 보내기</span>
              <!-- <span class="operator">= </span> -->
              <span class="function">()</span>
              <span>{</span>
              <div class="indent">
                <span class="property">회사 이름</span>
                <span class="operator">: </span>
                <span class="string">
                  <input
                    type="text"
                    name="name"
                    class="name"
                    placeholder="Company Name"
                /></span>
                <span>,</span>
              </div>
              <div class="indent">
                <span class="property">회신 메일</span>
                <span class="operator">: </span>
                <span class="string">
                  <input
                    type="email"
                    class="email"
                    name="email"
                    placeholder="Company Email"
                /></span>
                <span>,</span>
              </div>
              <div class="indent">
                <span class="property">메일 내용</span>
                <span class="operator">: </span>
                <span class="string">
                  <textarea name="message" placeholder="Message"></textarea>
                </span>
              </div>
              <span>}</span>
              <div class="indent">
                <span class="method">
                  <button type="submit" class="submit">
                    메일보내기()
                  </button></span
                >
              </div>
            </form>
          </code>
        </div>
        <div class="card-front">
          <div class="bookmark" @click="back = !back">
            <span>&lt;/&gt;</span>
          </div>
          <div class="line-numbers">
            <div v-for="index in 9" :key="index">{{ index }}</div>
          </div>

          <code>
            <span class="variable">const </span>
            <span class="function">연락처 </span>
            <span class="operator">= </span>
            <span>{</span>
            <div class="indent">
              <span class="property">이름</span>
              <span class="operator">: </span>
              <span class="string">'민정기'</span>
              <span>,</span>
            </div>
            <div class="indent">
              <span class="property">직책</span>
              <span class="operator">: </span>
              <span class="string">'프론트엔드 개발자'</span>
              <span>,</span>
            </div>
            <div class="indent">
              <span class="property">연락처</span>
              <span class="operator">: </span>
              <span>{</span>
              <div class="indent">
                <span class="property">전화번호</span>
                <span class="operator">: </span>
                <span class="string"
                  ><a href="tel:010-8787-4700">'010-8787-4700'</a></span
                >
                <span>,</span>
              </div>
              <div class="indent">
                <span class="property">email</span>
                <span class="operator">: </span>
                <span class="string"><a href="">'mypom11@gmail.com'</a></span>
                <span>,</span>
              </div>
              <div class="indent">
                <span class="property">github</span>
                <span class="operator">:</span>
                <span class="string"
                  ><a href="https://github.com/mypom11" target="_blank"
                    >'https://github.com/mypom11'</a
                  ></span
                >
              </div>
              <span>}</span>
            </div>
            <span>}</span>
          </code>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AppContact",
  data() {
    return {
      back: false,
    };
  },
};
</script>

<style lang="scss" scoped="scoped">
// Colors
$blue: #29b6f6;
$green: #9ccc65;
$purple: #ba68c8;
$yellow: #fdd835;
$orange: #f57c00;
$red: #ef5350;
$cyan: #4dd0e1;
$pink: #e91e63;
$black-dark: #101010;
$black-light: #2c3e50;
$bg1: #e91e63;
$bg2: #9c27b0;
$white: whitesmoke;

section {
  background: $black-light;
  height: 100vh;
}
.card-wrap {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.card {
  position: relative;
  width: 40rem;
  height: 30rem;
  perspective: 150rem;
  transition: 0.5s;
  span {
    vertical-align: middle;
  }

  &-back,
  &-front {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    border-radius: 5px;
    box-shadow: 0 1.5rem 4rem rgba(black, 0.4);
    transition: 0.9s cubic-bezier(0.25, 0.8, 0.25, 1);
    backface-visibility: hidden;
    overflow: hidden;
    .bookmark {
      position: absolute;
      top: -40px;
      right: -40px;
      width: 80px;
      height: 80px;
      background-color: rgba(white, 0.08);
      transform: rotate(45deg);
      z-index: 1;
      cursor: pointer;
      span {
        position: absolute;
        color: $white;
        bottom: 10px;
        left: 20px;
        font-size: rem(18);
        transform: rotate(-45deg);
        z-index: 2;
      }
    }
  }
  &-front {
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, $black-dark, $black-light);
    &:after {
      color: darken($black-light, 6%);
    }
  }
  &-back {
    background: linear-gradient(-45deg, $black-dark, $black-light);
    transform: rotateY(180deg);
    &:after {
      color: darken($black-light, 15%);
    }
  }
  &.active {
    .card-front {
      transform: rotateY(-180deg);
    }
    .card-back {
      transform: rotateY(0deg);
    }
  }
  .line-numbers {
    @extend code;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    margin: 0;
    padding: 0 10px;
    background-color: rgba(white, 0.03);
    font-size: rem(13);
    > div {
      padding: 2.5px 0;
      opacity: 0.15;
    }
  }
  code {
    color: $white;
  }
  .indent {
    padding-left: 30px;
  }
  .operator {
    color: $cyan;
  }
  .string {
    color: $green;
  }
  .variable {
    color: $purple;
  }
  .property {
    color: $red;
  }
  .method {
    color: $blue;
  }
  .function {
    color: $yellow;
  }
  .boolean {
    color: $cyan;
  }
}

input {
  border-bottom: 1px solid $white;
  background: inherit;
  margin-bottom: 10px;
  padding: 5px 10px;
}
textarea {
  resize: none;
  height: 100px;
  background: inherit;
  padding: 5px;
  border-radius: 2px;
  border: 1px solid $white;
}
button {
  background: inherit;
}
</style>
