
import Icon from './icon'

const defaultConfig = {
  type: 'error',
  timeout: 2,
  position: 'tc'
}

class Notification {
  constructor (config) {
    Object.assign(this, defaultConfig, config)
    this.init()
    this.open()
  }
  getContainer () {
    // create container subject to position
    const containerId = 'notify-container--' + this.position
    let container = document.getElementsByClassName(containerId)[0]
    if (!container) {
      container = document.createElement('div')
      container.className = 'notify-container ' + containerId
      document.body.appendChild(container)
    }
    return container
  }
  open () {
    window.requestAnimationFrame(() => this.notification.classList.add('notify-notification--opened'), 0)
  }
  close () {
    this.notification.classList.remove('notify-notification--opened')
    setTimeout(() => this.notification.parentNode.removeChild(this.notification), 500)
  }
  init () {
    this.getContainer()
    const notification = document.createElement('div')
    notification.className = `notify-notification notify-notification--${this.type}`
    notification.innerHTML = `<div class='notify-notification__header'>${Icon(this.type)}</div>
    <div class='notify-notification__body'>${this.msg}</div>`

    const container = this.getContainer()
    container.insertBefore(notification, container.firstChild)

    this.notification = notification
    if (this.timeout) {
      setTimeout(() => this.close(), this.timeout * 1000)
    }
  }
}

/**
 * display notification
 * @param {string|object} msg - msg or config options
 * @param {string} [type='error'] - msg type: 'error', 'success' or 'info'
 * @param {number} [timeout=2] - how long the msg will hide in seconds
 */
const notify = (msg, type = defaultConfig.type, timeout = defaultConfig.timeout, position = defaultConfig.position) => {
  const config = typeof msg === 'object' ? msg : { msg, type, timeout }
  return new Notification(config)
}

export default notify
