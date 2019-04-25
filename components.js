/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

/* Global coomponent */
Vue.component("simple_comp", {
  template: "#temp",
  data() {
    return {
      message: "I don't have props. yet" + " " + this.prop
    };
  },
  props: ["prop"],
  methods: {}
});

const vm = new Vue({
  el: "#app",
  data: {
    vue_data: "but now i do!!"
  },
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