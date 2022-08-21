export function convertNullPropertyToEmptyObject(obj) {
  Object.keys(obj).forEach((k) => (obj[k] = obj[k] === null ? {} : obj[k]));
  return obj;
}
