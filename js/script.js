/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const vm = new Vue({
  el: "#app",
  data: {
    cards_info: [
      {
        url: "img/audi-q3.jpg",
        title: "Audi Q3 2019",
        content: "The second generation Q3’s body is bigger by 10cm, better-proportioned and a lot roomier than before. It had to grow really, just to open up a gap between it and the Q2, which arrived late in the old Q3’s life and rendered it largely redundant.",
        category: "Audi",
        moreContent: "It launches with more petrol engines than diesel. In fact just one diesel, the familiar 2.0 TDI with 150bhp. The petrols are the 1.5-litre 150bhp and a 2.0 with power of 190 or 230bhp."
      },
      {
        url: "img/genesis-g70.jpg",
        title: "Genesis G70",
        content: "The exceptional 2019 Genesis G70 effectively serves two demanding masters—driving enthusiasts and luxury aficionados. Surprisingly, this is the first attempt by the upstart Genesis brand to build a legitimate sports sedan. The G70 immediately received praise from all of us who got behind the wheel—followed up by a spot on our 10Best Cars and Editors' Choice lists. ",
        category: "Genesis",
        moreContent: "HTRAC ensures a stable drive while accelerating and turning, and even while driving on slippery roads. It balances braking power between the left and right wheels."
      },
      {
        url: "img/mercedez-glz.jpg",
        title: "Mercedez-Benz GLS 350",
        content: "The GLS is engineered and equipped to set the bar for 7-passenger luxury SUVs. Its legacy of leadership includes benchmarks like the S-Class sedan and iconic G-Class. And it's eager to lead your family anywhere in bold and brilliant style, from it LED lighting, to wheels from 19 to 22 inches, to a body that's at once muscular and aerodynamic.",
        category: "Mercedez-Benz",
        moreContent: "Responsive V6 and V8 biturbo engines make more power torque from less gasoline, with advanced Direct Injection and multispark ignition that self-tune every few milliseconds."
      }
    ],
    knowMore: false
  }

});