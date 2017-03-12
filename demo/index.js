
import './demo.styl'

import Vue from 'vue'

import notify from '../app'

// eslint-disable-next-line
const app = new Vue({
  el: '#root',
  data: {
    notify: null
  },
  methods: {
    toggleNotify: () => {
      if (this.notify) {
        this.notify[this.notify.notification.classList.contains('notification--opened') ? 'close' : 'open']()
      } else {
        this.notify = notify('保存成功', 'success')
      }
    },
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

app.toggleNotify()
