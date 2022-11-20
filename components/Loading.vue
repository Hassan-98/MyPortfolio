<template>
  <div class="loading-modal" @click.stop="closeModal">
    <img src="/imgs/back/wish.svg" class="background" style="top:25%;left:35%">
    <img src="/imgs/back/space.svg" class="background" style="top:30%;left:5%">
    <img src="/imgs/back/space.svg" class="background" style="top:70%;left:90%">
    <img src="/imgs/back/space2.svg" class="background" style="top:20%;left:90%">
    <img src="/imgs/back/space2.svg" class="background" style="top:50%;left:10%">
    <img src="/imgs/back/space3.svg" class="background" style="top:75%;left:5%">
    <img src="/imgs/back/space3.svg" class="background" style="top:55%;left:85%">
    <img src="/imgs/back/space4.svg" class="background" style="top:0%;left:68%">
    <img src="/imgs/back/space4.svg" class="background" style="top:10%;left:15%">
    <img src="/imgs/back/space5.svg" class="background" style="top:76%;left:42%">
    <img src="/imgs/back/missile.svg" class="background" style="top:77%;left:20%">
    <img src="/imgs/back/missile.svg" class="background" style="top:22%;left:60%">
    <img src="/imgs/back/asteroid.svg" class="background" style="top:45%;left:58%">
    <img src="/imgs/back/asteroid.svg" class="background" style="top:42%;left:90%">
    <img src="/imgs/back/wish.svg" class="background" style="top:60%;left:32%;transform:rotate(180deg)">
    <h1><span>H</span></h1>
    <div class="lds-ripple"><div></div><div></div></div>
  </div>
</template>

<style lang="scss" scoped>
  img.background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 100px;
  }
  .loading-modal {
    width: 100%;
    height: 100%;
    background: rgba($color: #3A3C41, $alpha: 1);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999999;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 45px;
    font-weight: bold;
    h1 {
      span {
        position: relative;
        z-index: 99999999;
        font-family: "Piedra", cursive;
        font-size: 150px;
        transform: rotate(-10deg);
      }
    }
    .lds-ripple {
      display: inline-block;
      position: relative;
      width: 70px;
      height: 70px;
    }
    .lds-ripple div {
      position: absolute;
      border: 3px solid #fff;
      opacity: 1;
      border-radius: 50%;
      animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    }
    .lds-ripple div:nth-child(2) {
      animation-delay: -0.5s;
    }
    @keyframes lds-ripple {
      0% {
        top: 36px;
        left: 36px;
        width: 0;
        height: 0;
        opacity: 1;
      }
      100% {
        top: 0px;
        left: 0px;
        width: 72px;
        height: 72px;
        opacity: 0;
      }
    }
  }
</style>

<script>
export default {
  name: "loading",
  methods: {
    closeModal (e) {
      if (e.target.classList.contains('chat-modal') || e.target.tagName === 'I') { this.$store.commit('closeModal') }
    }
  }
}
</script>
