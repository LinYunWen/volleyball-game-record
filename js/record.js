var setting = new Vue({
    el: '#setting',
    data: {
        seen: true,
        message:　'123',
        buttonValue: 'Next',
        enemyTeam: '',
        ourTeam: '選擇隊伍',
        teamMembers: [
            {text: ""},
            {text: ""},
            {text: ""},
            {text: ""},
            {text: ""},
            {text: ""},
            {text: ""},
        ]
    },
    methods: {
        nextSection: function (event) {
            setting.seen = false;
            selectSection.seen = true;
        }
    }
})

var history = new Vue({
    el: '#history',
    data: {
        seen: true
    },
    methods: {

    }
})

var selectSection = new Vue({
    el: '#select-section',
    data: {
        seen: true
    },
    methods: {
        showHistory: function(event) {
            history.seen = true;
        },
        record: function(event) {
            status = checkStatus();
            if (status == 'get-score') {

            } else if (status == 'loss-score') {

            }
        }
    }
})

var status = null;
var getScore = document.getElementById('get-score');
var lossScore = document.getElementById('loss-score');
function checkStatus() {
    if (getScore.checked) {
        return 'get-score'
    }
    return 'loss-score'
}