export function prettyContent(content = []) {
  const res = content.join(', ');
  const index = res.lastIndexOf(',');
  return res.slice(0, index + 1) + ' y' + res.slice(index + 1);
}
