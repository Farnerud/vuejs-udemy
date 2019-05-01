/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

/* Global component */
// Vue.component("simple_comp", {
//   template: "#temp",
//   data() {
//     return {
//       message: "I don't have props. yet" + " " + this.prop
//     };
//   },
//   props: ["prop"],
//   methods: {}
// });

Vue.component("card", {
  template: "#nw_card",
  data() {
    return {
      title: "Light Words",
      msg: "The best thing in life is the ones that last forever. Never give up on your dreams."
    };
  },
  props: [],
  methods: {
    send() {
      this.$emit("relay",this.title,this.msg);
    }
  }
});

Vue.component("card_2", {
  template: "#nw_card_2",
  data() {
    return {
      heading: "Heading from component 1",
      new_msg: "Content from component 1"
    };
  },
  props: [],
  methods: {}
});

const vm = new Vue({
  el: "#app",
  data: {
    heading: "Waiting for data component",
    new_msg: "Waiting for data component"
  },
  methods: {
    allocate(heading, msg) {
      this.heading = heading;
      this.new_msg = msg;
    }
  }
});