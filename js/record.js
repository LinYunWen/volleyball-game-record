var setting = new Vue({
    el: '#setting',
    data: {
        seen: true
    }
})

var clickEvent = new Vue({
    el: '#nextButton',
    data: {
        name: 'vue'
    },
    method: {
        nextButton: function (event) {
            setting.seen = false
        }
    }
})

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello'
    }
})