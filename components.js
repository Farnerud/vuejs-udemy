/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

/* Global coomponent */
Vue.component("simple_comp", {
  template: "#temp",
  data() {
    return {
      message: "I don't have props. yet"
    };
  },
  props: [],
  methods: {}
});

const vm = new Vue({
  el: "#app",
  data: {},
  /* Local component */
  components: {
    nw_comp: {
      template: "#temp2",
      data() {
        return {
          msg: "This is a local component"
        };
      },
      props: [],
      methods: {}
    }
  }
});