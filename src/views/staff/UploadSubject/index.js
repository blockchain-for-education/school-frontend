import { makeStyles } from "@material-ui/core";
import { useSnackbar } from "notistack";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DragnDropZone from "../../../shared/DragnDropZone";
import Page from "src/shared/Page";
import { getToken } from "src/utils/mng-token";
import SubjectDataExample from "./SubjectDataExample";
import { startUploadFile, uploadFileFail, uploadFileSuccess } from "./redux";
import UploadedSubjectTable from "./UploadedSubjectTable";
import { ERR_TOP_CENTER, SUCCESS_BOTTOM_CENTER } from "../../../utils/snackbar-utils";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginBottom: theme.spacing(2),
      "&:last-child": {
        marginBottom: 0,
      },
    },
    paddingBottom: theme.spacing(2.5),
    // height: "calc(150% + 50px)",
  },
}));

export default function UploadSubject() {
  const cls = useStyles();
  const uploading = useSelector((state) => state.subjectSlice.uploading);
  const dp = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  async function hdUploadFile(files) {
    dp(startUploadFile());
    const formData = new FormData();
    formData.append("excel-file", files[0]);
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/v1.2/staff/upload-subjects`, {
      method: "POST",
      headers: { Authorization: getToken() },
      body: formData,
    });
    if (!response.ok) {
      dp(uploadFileFail());
      enqueueSnackbar(`${response.status}: ${await response.text()}`, ERR_TOP_CENTER);
    } else {
      const result = await response.json();
      dp(uploadFileSuccess(result));
      enqueueSnackbar("Upload file thành công!", SUCCESS_BOTTOM_CENTER);
    }
  }

  return (
    <Page title="Upload môn học">
      <div className={cls.root}>
        <SubjectDataExample></SubjectDataExample>
        <DragnDropZone onDropAccepted={hdUploadFile} uploading={uploading}></DragnDropZone>
        <UploadedSubjectTable></UploadedSubjectTable>
      </div>
    </Page>
  );
}
