function joinUniqueArray<T>(arr1: T[], arr2: T[]): T[] {
  const res = arr1.concat(arr2.filter((item) => arr1.indexOf(item) < 0));

  return res;
}

function deduplicateArray<T>(arr1: T[], arr2: T[]): T[] {
  const res = arr1.filter((o) => !arr2.includes(o));

  return res;
}

function stringToArray(str: string) {
  const res = str.replaceAll(/\s/gu, '');

  if (res.length) {
    return res.split(',');
  }

  return null;
}

function hasSpecialChar(str: string) {
  const format = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/u;

  return format.test(str);
}

function paginateArray<T>(array: T[], perPage: number, page: number): T[] {
  return array.slice((page - 1) * perPage, page * perPage);
}

export { deduplicateArray, joinUniqueArray, stringToArray, hasSpecialChar, paginateArray };
