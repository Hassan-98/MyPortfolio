<template>
  <div class="pic-modal" @click.stop="closeModal">
    <div class="pic-modal-body">
      <i class="fas fa-times-circle" title="Close Modal" @click="closeModal" />
      <img :src="$store.state.modalImg" alt="chat-img">
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .pic-modal {
    width: 100%;
    height: 100vh;
    background: rgba($color: #000, $alpha: 0.8);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999999;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    .pic-modal-body {
      background: rgba($color: #000, $alpha: 0.5);
      width: 90%;
      height: 90%;
      @include md {
        width: 90%;
        height: 70%;
      }
      @include sm {
        width: 90%;
        height: 55%;
      }
      @include xs {
        width: 95%;
        height: 45%;
      }
      padding: 2px;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 1px 1px 10px rgba($color: #000, $alpha: 0.2);
      position: relative;
      i{
        position: absolute;
        top: 5px;
        right: 5px;
        color: #fff;
        font-size: 28px;
        border-radius: 50%;
        box-shadow: 0 0 5px rgba($color: #000, $alpha: 0.2);
        cursor: pointer;
      }
      img{
        width: auto;
        max-height: 100%;
      }
    }
  }
</style>

<script>
export default {
  methods: {
    closeModal (e) {
      if (e.target.classList.contains('chat-modal') || e.target.tagName === 'I') { this.$store.commit('closeModal') }
    }
  }
}
</script>
