import { createStore } from "vuex";

export default createStore({
  state: {
    posX: 0,
    posY: 0,
    ani: false,
    view: false,
  },
  getters: {},
  mutations: {
    setPos(state, payload) {
      state.ani = true;
      state.posX += payload.x;
      state.posY += payload.y;

      console.log(state.posX, state.posY);
      setTimeout(() => {
        state.ani = false;
      }, 600);
    },
    zoomOut(state) {
      state.posX = 0;
      state.posY = 0;
      state.view = true;
    },
    zoomIn(state, payload) {
      state.ani = true;
      state.posX = -payload.x;
      state.posY = -payload.y;
      state.view = false;
      setTimeout(() => {
        state.ani = false;
      }, 600);
    },
  },
  actions: {},
  modules: {},
});
