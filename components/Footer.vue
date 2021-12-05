<template>
  <footer>
    <img src="/imgs/back/license.svg" class="background" style="top:10%;left:8%">
    <img src="/imgs/back/license.svg" class="background" style="top:15%;left:85%">
    <h3>Copyright &copy;2020 | Made By Hassan Ali</h3>
  </footer>
</template>

<style lang="scss">
footer {
  background: #0B0C0C;
  padding: 50px 0;
  position: relative;
  img.background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 100px;
  }
  h3 {
    position: relative;
    z-index: 99;
    margin: 0;
    text-align: center;
  }
}
</style>

<script>
/* eslint-disable */
export default {
  mounted() {
    const options = {
      strings: [
        "Hassan Ali",
        "Hassan Ali",
        "Hassan Ali",
        "Web Developer",
        "Civil Engineer"
      ],
      stringsElement: null,
      // typing speed
      typeSpeed: 25,
      // time before typing starts
      startDelay: 10,
      // backspacing speed
      backSpeed: 40,
      // time before backspacing
      backDelay: 3000,
      // loop
      loop: true,
      // false = infinite
      loopCount: false,
      // show cursor
      showCursor: false,
      // attribute to type (null == text)
      attr: null,
      // either html or text
      contentType: "text"
    };

    new Typed(".header h1 span", options);
  }
};
</script>
