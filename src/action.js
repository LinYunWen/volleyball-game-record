
export const commonAction = {
    setDateAndTime(date, time) {
        return {
            type: "SET_DATE_AND_TIME",
            payload: {
                date: date,
                time: time
            }
        };
    },
    setAthletes(normals, liberos) {
        return {
            type: "SET_ATHLETES",
            payload: {
                normals: normals,
                liberos: liberos
            }
        };
    },
    setAlertDialog(key, value) {
        return {
            type: "SET_ALERT_DIALOG",
            payload: {
                key: key,
                value: value
            }
        };
    }
}

export const settingAction = {
    setCompetitor(competitor) {
        return {
            type: "SET_COMPETITOR",
            payload: competitor
        };
    },
    setComment(comment) {
        return {
            type: "SET_COMMENT",
            payload: comment
        };
    }
}

export const recordAction = {
    modifyScore(side, delta) {
        return {
            type: "MODIFY_SCORE",
            payload: {
                side: side,
                delta: delta
            }
        };
    },
    addRecord(athlete, reason, isGet) {
        return {
            type: "ADD_RECORD",
            payload: {
                athlete: athlete,
                reason: reason,
                isGet: isGet
            }
        };
    },
    changeSelectedAthlete(event, selectedAthlete) {
        return {
            type: "CHANGE_SELECTED_ATHLETE",
            payload: selectedAthlete
        };
    },
    toggleRecordDrawer(bool) {
        return {
            type: "TOGGLE_RECORD_DRAWER",
            payload: bool
        };
    },
    showRecordSnackbar(message, isGet) {
        return {
            type: "SHOW_RECORD_SNACKBAR",
            payload: {
                message: message,
                isGet: isGet
            }
        }
    },
    closeRecordSnackbar() {
        return {
            type: "CLOSE_RECORD_SNACKBAR",
        }
    }
};
