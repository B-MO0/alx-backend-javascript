export default function iterateThroughObject(reportWithIterator) {
  const tobeJoined = [];
  for (const item of reportWithIterator) {
    tobeJoined.push(item);
  }
  return tobeJoined.join(' | ');
}
