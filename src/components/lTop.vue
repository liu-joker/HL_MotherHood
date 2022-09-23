<template>
  <div class="t_top">
    <div class="t_top_nav">
      <div class="t_top_title">
        Welcome ！ <span @click="toLogin">Join Free </span>or <span  @click="toLogin">Sign in</span>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  methods:{
    toLogin(){
      this.$router.push('/login')
    }
  }
}
</script>

<style lang='scss' scoped>
.t_top {
  width: 100%;
  background-color: #262626;
  color: #aaa;
  border-bottom: 1px solid #313131;
  font-size: 14px;
  .t_top_nav {
    max-width: 1200px;
    margin: 0 auto;
  }
  .t_top_title {
    padding: 9px 0;
    text-align: left;
    > span {
      cursor: pointer;
      &:hover {
        color: #f7a900;
      }
    }
  }
}
</style>