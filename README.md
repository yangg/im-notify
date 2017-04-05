# msg-notify
<!--[![Build Status](https://travis-ci.org/yangg/msg-notify.svg?branch=master)](https://travis-ci.org/yangg/msg-notify)-->
[![npm:](https://img.shields.io/npm/v/msg-notify.svg?style=flat)](https://www.npmjs.com/packages/msg-notify)

Display notifications to your app

[Online Demo](https://yangg.github.io/msg-notify/dist/demo.html)

![msg-notify](https://cloud.githubusercontent.com/assets/409225/24689787/954531c8-19fb-11e7-92e0-28f0879e57da.gif)

## Installation
```bash
npm install --save msg-notify
```

## Usage
First import `msg-notify/lib/notify.styl` or `msg-notify/dist/notify.css`, then
```js
import notify from 'msg-notify'

notify('notification msg', 'success')
notify('error msg', 'error')
```
## API

### `notify(config)`
  * `config {object}` - the config object
  * `config.msg {string}` - notification msg
  * `[config.type = 'error'] {stirng}` - notify type: default error, or success, info, warning,
  * `[config.timeout = 2] {number}` - timeout to hide (in seconds)
  * `[config.position = 'tc'] {string}` - position: default 'tc'(top center), or 'tl'(top left), 'tr'(top right)
### `notify(msg[, type='error'[, timeout=2[, position='tc']]])`

## License
MIT