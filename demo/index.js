
import './demo.styl'

import Vue from 'vue'

import notify from '../dist/'

// eslint-disable-next-line
const app = new Vue({
  el: '#root',
  data: {
    notify: null
  },
  methods: {
    showNotify: (type) => {
      const msg = {
        success: '保存成功',
        warning: '警告提示',
        error: '保存失败',
        info: '消息提示'
      }[type]
      notify({
        msg,
        type: type
      })
    }
  }
})
