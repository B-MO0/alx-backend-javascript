export default function getStudentIdsSum(studentList) {
  return Object.values(studentList).reduce((total, { id }) => total + id, 0);
}
