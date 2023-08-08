import { checkString } from "./string";

const emailLocalRegex = /^[0-9a-zA-Z_]{4,20}$/;

export function checkEmail(input: unknown): input is string {
  if (!checkString(input)) return false;

  const [local, domain] = input.split("@");
  if (domain !== "sdh.hs.kr") return false;
  if (!emailLocalRegex.test(local)) return false;

  return true;
}

const res = checkEmail("sdh220307@sdh.hs.kr");
console.log(res);
