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

var historySection = new Vue({
    el: '#history',
    data: {
        seen: true,
        records: [
        ]
    },
    methods: {

    }
})

var selectSection = new Vue({
    el: '#select-section',
    data: {
        seen: true,
        picked: '',
        selectPerson: 'default',
        selectGetScore: 'default',
        selectLossScore: 'default',
        historyButton: '顯示歷史紀錄',
    },
    methods: {
        clickHistory: function(event) {
            historyButton = historySection.seen ? "顯示歷史紀錄" : "隱藏歷史紀錄";
            historySection.seen = !historySection.seen;
        },
        clickRecord: function(event) {
            var status = selectSection.picked;
            var tempNum, tempPerson, tempReason;

            for (var i = 0; i < setting.teamMembers.length; i++) {
                var temp = setting.teamMembers[i].text;
                if (selectSection.selectPerson == temp) {
                    tempNum = temp;
                    tempPerson = memberNum[temp];
                    break;
                }
            }

            if (status == 'get-score') {
                for (var i = 0; i < setting.teamMembers.length; i++) {
                    if (selectSection.selectGetScore == getScoreArray[i].value) {
                        tempReason = getScoreArray[i].text;
                        break;
                    }
                }
            } else if (status == 'loss-score') {
                for (var i = 0; i < setting.teamMembers.length; i++) {
                    if (selectSection.selectLossScore == lossScoreArray[i].value) {
                        tempReason = lossScoreArray[i].text;
                        break;
                    }
                }
            }
            historySection.records.push({
                num: tempNum,
                person: tempPerson,
                status: status,
                reason: tempReason
            });

            reset();
        },
        clickFinishButton: function(event) {
            for (var i = 0; i < historySection.records.length; i++) {
                var record = historySection.records[i];
                console.log('record: ', record);
                console.log('status: ', record.status);
                if (record.status == 'get-score') {
                    displaySection.getScore.push(record);
                } else {
                    displaySection.lossScore.push(record);
                }
            }
            console.log('our team: ', setting.ourTeam);
            console.log('get score: ', displaySection.getScore.length);
            console.log('loss score: ', displaySection.lossScore.length);
            if (displaySection.getScore.length > displaySection.lossScore.length) {
                displaySection.winner = setting.ourTeam;
            } else {
                displaySection.winner = setting.enemyTeam;
            }
        }
    }
})

var displaySection = new Vue({
    el: '#display-section',
    data: {
        seen: true,
        winner: '222',
        lossScore: [],
        getScore: []
    },
    methods: {

    }
})

function reset() {
    selectSection.selectPerson = 'default';
    selectSection.selectGetScore = 'default';
    selectSection.selectLossScore = 'default';
}