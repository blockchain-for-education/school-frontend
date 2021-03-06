const { createSlice } = require("@reduxjs/toolkit");

const classSlice = createSlice({
  name: "classSlice",
  initialState: { fetching: true, classes: [], uploading: false, shouldShowCaution: true },
  reducers: {
    setPreloadClasses: (state, action) => {
      state.fetching = false;
      // DataGrid need id field
      if (action.payload.length > 0)
        state.classes = action.payload.map((claxx, index) => ({
          ...claxx,
          id: index + 1,
          teacherName: claxx.teacher.name,
          subjectId: claxx.subject.subjectId,
          subjectName: claxx.subject.subjectName,
        }));
    },
    startUploadFile: (state, action) => {
      state.uploading = true;
    },
    uploadFileSuccess: (state, action) => {
      state.uploading = false;
      state.classes = action.payload.concat(state.classes).map((claxx, index) => ({
        ...claxx,
        id: index + 1,
        teacherName: claxx.teacher.name,
        subjectId: claxx.subject.subjectId,
        subjectName: claxx.subject.subjectName,
      }));
    },
    uploadFileFail: (state, action) => {
      state.uploading = false;
    },
    setShouldShowCaution: (state, action) => {
      state.shouldShowCaution = action.payload;
    },
  },
});

export default classSlice.reducer;
export const { setPreloadClasses, startUploadFile, uploadFileSuccess, uploadFileFail, setShouldShowCaution } = classSlice.actions;
