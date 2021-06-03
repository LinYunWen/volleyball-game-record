
export const commonAction = {
    setDateAndTime(date, time) {
        return {
            type: "SET_DATE_AND_TIME",
            payload: {
                date: date,
                time: time
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
