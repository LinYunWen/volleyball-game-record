
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
