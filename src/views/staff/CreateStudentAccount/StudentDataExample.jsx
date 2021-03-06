import React from "react";
import DownloadExampleData from "../../../shared/DownloadExampleData";

export default function StudentDataExample() {
  const title = "Mẫu file dữ liệu Sinh viên";
  const fileName = "v1.2/sinh-vien-example.xlsx";
  const head = [
    "MSSV*",
    "Họ tên*",
    "Ngày sinh*",
    "Giới tính*",
    "Email*",
    "CMT/CCCD*",
    "Khoa/Viện*",
    "Mã CTĐT*",
    "Tên CTĐT*",
    "Số Tín chỉ*",
    "Số năm tối thiểu*",
    "Số năm tối đa*",
    "Khóa công khai",
  ];
  const body = [
    [
      20195753,
      "Đỗ Hòa An",
      "09/24/2001",
      "Nam",
      "an.dh295753@sis.hust.edu.vn",
      125810987,
      "Viện Công nghệ Thông tin và Truyền thông",
      "KTMT-1125",
      "Kỹ thuật máy tính - K64",
      156,
      4,
      8,
      "03870c5a3a1add1875fa125f2194c563f27f75c806cb6a30826caafb1bad8f8a15",
    ],
    [
      20195754,
      "Hoàng Đình Lương An",
      "12/26/2001",
      "Nam",
      "an.hdl195755@sis.hust.edu.vn",
      125810988,
      "Viện Công nghệ Thông tin và Truyền thông",
      "KHMT-1128",
      "Khoa học máy tính - K64",
      156,
      4,
      8,
    ],
    [
      20195755,
      "Bùi Hải Anh",
      "03/08/2001",
      "Nam",
      "anh.bh955755@sis.hust.edu.vn",
      125810989,
      "Viện Công nghệ Thông tin và Truyền thông",
      "MMT-1124",
      "Mạng máy tính - K64",
      156,
      4,
      8,
      "032992facb0305156288c226048b0fc657ec454c9854547b0829de5cc5026c625a",
    ],
    [
      20195756,
      "Bùi Quang Anh",
      "11/14/2001",
      "Nam",
      "anh.bq5756@sis.hust.edu.vn",
      125810990,
      "Viện Công nghệ Thông tin và Truyền thông",
      "KTMT-1125",
      "Kỹ thuật máy tính - K64",
      156,
      4,
      8,
      "03a4700a378d5c47cb4be263312188768e82226e1af90e31cb518d46b53591cdf9",
    ],
    [
      20196277,
      "Đào Hoàng Anh",
      "07/17/2001",
      "Nam",
      "anh.dh196277@sis.hust.edu.vn",
      125810991,
      "Viện Công nghệ Thông tin và Truyền thông",
      "KHMT-1128",
      "Công nghệ phần mềm - K64",
      156,
      4,
      8,
    ],
    [
      20196278,
      "Đào Lương Duy Anh",
      "07/20/2001",
      "Nam",
      "anh.dld296278@sis.hust.edu.vn",
      125810992,
      "Viện Công nghệ Thông tin và Truyền thông",
      "MMT-1124",
      "Kỹ thuật máy tính - K64",
      156,
      4,
      8,
    ],
  ];
  return <DownloadExampleData {...{ title, fileName, head, body }} minWidth={"2500px"}></DownloadExampleData>;
}
