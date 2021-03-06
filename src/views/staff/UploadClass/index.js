import { makeStyles } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import axios from "axios";
import { useSnackbar } from "notistack";
import { useDispatch, useSelector } from "react-redux";
import Page from "src/shared/Page";
import DragnDropZone from "../../../shared/DragnDropZone";
import { requirePrivateKeyHex } from "../../../utils/keyholder";
import { ERR_TOP_CENTER, SUCCESS_BOTTOM_CENTER } from "../../../utils/snackbar-utils";
import ClassDataExample from "./ClassDataExample";
import { setShouldShowCaution, startUploadFile, uploadFileFail, uploadFileSuccess } from "./redux";
import UploadedClassTable from "./UploadedClassTable";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginBottom: theme.spacing(2),
      "&:last-child": {
        marginBottom: 0,
      },
    },
    paddingBottom: theme.spacing(2.5),
    "& .MuiAlert-icon": {
      alignItems: "center",
    },
  },
}));

export default function Uploadclass() {
  const cls = useStyles();
  const uploading = useSelector((state) => state.classSlice.uploading);
  const shouldShowCaution = useSelector((state) => state.classSlice.shouldShowCaution);
  const dp = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  async function hdUploadFile(files) {
    const privateKeyHex = await requirePrivateKeyHex(enqueueSnackbar);
    dp(startUploadFile());
    const formData = new FormData();
    formData.append("excel-file", files[0]);
    formData.append("privateKeyHex", privateKeyHex);
    try {
      const response = await axios.post("/staff/upload-classes", formData);
      enqueueSnackbar("Upload file thành công!", SUCCESS_BOTTOM_CENTER);
      dp(uploadFileSuccess(response.data));
    } catch (error) {
      console.error(error);
      if (error.response) enqueueSnackbar(JSON.stringify(error.response.data), ERR_TOP_CENTER);
      dp(uploadFileFail());
    }
  }

  return (
    <Page title="Upload lớp học">
      <div className={cls.root}>
        {/* TODO: change to not redundancy version would be better */}
        <ClassDataExample></ClassDataExample>

        {shouldShowCaution && (
          <Alert severity="info" variant="filled" onClose={() => dp(setShouldShowCaution(false))} style={{ fontSize: "1.25rem" }}>
            Lưu ý: Cần tạo Giảng viên và Sinh viên của lớp học tương ứng trước!
          </Alert>
        )}
        <DragnDropZone onDropAccepted={hdUploadFile} uploading={uploading}></DragnDropZone>
        <UploadedClassTable></UploadedClassTable>
      </div>
    </Page>
  );
}
