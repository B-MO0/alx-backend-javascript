export default function createIteratorObject(report) {
  const empList = [];
  for (const emp of Object.values(report.allEmployees)) {
    empList.push(...emp);
  }

  return {
    [Symbol.iterator]() {
      let count = 0;
      return {

        next() {
          if (count < empList.length) {
            count += 1;

            return { done: false, value: empList[count - 1] };
          }
          return { done: true };
        },
      };
    },
  };
}
