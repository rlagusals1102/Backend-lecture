import { checkString } from "./string";

const passwordRegex =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*(){}[\]\-+=~:?><]).{6,20}$/;

export function checkPassword(input: unknown): input is string {
  if (!checkString(input)) return false;

  return passwordRegex.test(input);
}

const res = "As1!@#$";
console.log(checkPassword(res));
//Password
// 영어 대문자 하나 이상
// 영어 소문나 하나 이상
// 숫자 하나 이상
// 특수문자 하나 이상
// !@#$%^&*(){}[]-+=~:?><
// 6 ~ 20
