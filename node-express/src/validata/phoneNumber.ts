import { checkString } from "./string";

const phoneNumberPartRegex = /^\d{4}$/;

export function cheakPhoneNumber(input: unknown): input is string {
  if (!checkString(input)) return false;

  const [localNumber, frontNumber, backNumber] = input.split("-");
  if (localNumber !== "010") return false;
  if (!phoneNumberPartRegex.test(frontNumber)) return false;
  if (!phoneNumberPartRegex.test(backNumber)) return false;

  return true;
}

const result = cheakPhoneNumber("010-4223-5650");
console.log(result);
