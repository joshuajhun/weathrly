require('babel-register')
require('babel-polyfill')

global.document = require('jsdom').jsdom(
  "<head> <meta charset='UTF-8'><title>weathrly</title></head><body><div id='application'></div>"
)
global.window = document.defaultView // if we have to go to the window (Event bubbling, referencing the window)
global.navigator = window.navigator // if something is paginated this allows us to go from page to page
