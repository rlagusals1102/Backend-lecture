import { checkString } from "./string";

const idRegex = /^[0-9a-zA-Z]{4,20}$/;

export function checkId(input: unknown): input is string {
  if (!checkString(input)) return false;

  return idRegex.test(input);
}

const res = "rlagusals1102";
console.log(checkId(res));

//id

// [0-9a-zA-Z]{4,20}
