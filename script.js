/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const vm = new Vue({
  el: "#app",
  data: {
    info_set: [
      {
        url: "img/chimp.jpg",
        alt: "funny monky",
        title: "Monkeys are funniest than humans",
        summary: "Monkeys are so funny. They can be very smart, very strong, very dangerous, but in the same time they produce a lot of laughing.",
        summary2: "Did you know monkeys can eat more bananas in a day than a human in a month?",
        category: "animals"
      },
      {
        url: "img/motor.jpg",
        alt: "motor",
        title: "The most powerful motor on the road",
        summary: "The most powerful motor on the road is the 3xwdT series. It is capable of create more than 400 hp in just seconds",
        summary2: "Did you know the 3xwdt series motor was named like that just for fun?",
        category: "cars"
      },
      {
        url: "img/wolf.jpg",
        alt: "husky",
        title: "Don't try to fool your dog",
        summary: "Your dog is not stupid. It's more smart and has more loyalty than you. So, don't try to hide its food",
        summary2: "Did you know your dog watch you while you're sleeping?",
        category: "animals"
      },
    ],
    didYouKnow: false,
    message: "hello, input"
  },
  methods: {
    sayHi() {
      alert("Hello, World!");
    }
  }
});

const nvm = new Vue({
  el: "#app2",
  data: {
    setData: "initial data", //this obj. stores the data.
    user_info: [
      {
        name: "Hector Perea Mosquera",
        occupation: "Web Developer"
      },
      {
        name: "Francis de Gaulle",
        occupation: "Visual Designer"
      },
      {
        name: "Irina Kapranikova",
        occupation: "Sales Manager"
      },
      {
        name: "Soraya Montero",
        occupation: "Digital Marketer"
      },

    ]
  }
});

const vm2 = new Vue({
  el: "#app3",
  data: {
    message: "User-submitted data...",
    limit: "50",
  },
  computed: {
    remain() {
      return this.limit - this.message.length;
    }
  },
  methods: {
    check() {
      if (this.remain < 0) {
        this.message = this.message.substr(0, this.limit);
        alert("You reach the maximum characters allow.");
      }
    }
  }
});