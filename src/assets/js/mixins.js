export function prettyContent(content) {
  let res = '';
  for (let i = 0; i < content.length; ++i) {
    if (i + 1 >= content.length) {
      res += 'y ' + content[i];
    } else {
      res += content[i] + ', ';
    }
  }

  return res;
}
