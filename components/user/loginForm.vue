<template>
  <el-form
    ref="form"
    :model="form"
    :rules="rules"
    class="form"
  >
    <el-form-item class="form-item" prop="username">
      <el-input
        v-model="form.username"
        placeholder="用户名/手机"
      />
    </el-form-item>

    <el-form-item class="form-item" prop="password">
      <el-input
        v-model="form.password"
        @keydown.enter.native="handleLoginSubmit"
        placeholder="密码"
        type="password"
      />
    </el-form-item>

    <p class="form-text">
      <nuxt-link to="#">
        忘记密码
      </nuxt-link>
    </p>

    <el-button
      @click="handleLoginSubmit"
      class="submit"
      type="primary"
    >
      登录
    </el-button>
  </el-form>
</template>

<script>
export default {
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            tarigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    handleLoginSubmit () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          // 使用vuex发送请求
          this.$store.dispatch('user/login', this.form).then((res) => {
            this.$message({
              message: '登录成功,正在跳转',
              type: 'success'
            })
            setTimeout(() => {
              this.$router.replace('/')
              // console.log(res)
            }, 1000)
          })
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
    .form{
        padding:25px;
    }

    .form-item{
        margin-bottom:20px;
    }

    .form-text{
        font-size:12px;
        color:#409EFF;
        text-align: right;
        line-height: 1;
    }

    .submit{
        width:100%;
        margin-top:10px;
    }
</style>
