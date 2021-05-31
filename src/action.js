
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
    }
};
