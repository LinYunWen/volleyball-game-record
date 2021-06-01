export const defaultState = {
    record: {
        score: {
            competitor: 10,
            us: 20
        },
        athlete: {
            selected: "",
            nums: [1, 2, 3, 4, 5, 6, 7, 8]
        },
        drawer: {
            isOpen: false,
            records: [
                { isGet: true, athlete: 33, type: "攻擊得分" },
                { isGet: false, athlete: 33, type: "攻擊得分" }
            ]
        },
        snackbar: {
            isOpen: false,
            isGet: false,
            message: ""
        }
    }
}