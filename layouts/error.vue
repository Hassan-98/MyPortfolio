<template>
  <div class="error">
    <div class="content">
      <i class="fas fa-exclamation-triangle"></i>
      <h1> Are you lost ?</h1>
      <NuxtLink to="/">Return To Home Page</NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .error {
    min-height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    .content {
      text-align: center;
      i {
        font-size: 150px;
        @include sm {
          font-size: 100px;
        }
      }
      h1 {
        font-size: 70px;
        @include sm {
          font-size: 40px;
        }
      }
      a {
        padding: 10px 50px;
        border-radius: 25px;
        border: 1px solid #ccc;
        margin: 20px 0;
        display: inline-block;
        text-decoration: none;
          background: #fff;
          color: #3A3C41;
        @include sm {
          padding: 8px 30px;
        }
        &:hover {
          background: #3A3C41;
          color: #fff;
        }
      }
    }
  }
</style>

<script>
export default {
  props: ['error'],
  created () {
    const self = this
    setTimeout(() => {
      self.$store.commit('endLoading')
    }, 1000)
  }
}
</script>
