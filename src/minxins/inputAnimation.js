export default {
  data() {
    return {
      blurTag: false,
      focusTag: false,
      input_num: 0,
      value_one: false,
      value_two: false,
    }
  },
  methods: {
    awaken_focus(v, name) {
      // console.log('vvvvvvvvvvv', v, name)
      this.getFocus(v)
      let that = this
      setTimeout(() => {
        that.$nextTick(() => {
          this.$refs[`input${v}`].focus()
        })
      }, 200);
    },
    getInput(event, e) {
      console.log('event', event, e, this.focusTag)
      // setTimeout(() => {
      if (!event) {
        if (e == 1) {
          this.value_one = true
        } else if (e == 2) {
          this.value_two = true
        }
      }
      // }, 200);

    },
    getBlur(e) {
      this.input_num = e
      this.blurTag = true
      this.focusTag = false
      this.value_one = false
      this.value_two = false
      console.log('getBlur', this.focusTag)


    },
    getFocus(e) {
      if (this.$refs[`input${e}`].value) {
        return
      }
      this.input_num = e
      this.blurTag = false
      this.focusTag = true
      console.log('getFocus', this.focusTag)

    }
  },

  created() {
    console.log('混入created')
  }
}
