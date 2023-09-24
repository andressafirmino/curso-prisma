import prisma from "./database";

(async () => {
  const students = await prisma.student.groupBy({
    by: ["class"],
    _count: {id: true},
    orderBy: {_count: {id: "desc"}}
  })
  /* SELECT COUNT(id), "class" FROM students s
GROUP BY "class"
ORDER BY COUNT(id) desc; */

  //console.log(students);

  const stu = await prisma.student.groupBy({
    by: ["class"],
    _count: {id: true},
    where: {
      jobId: null
    },
    orderBy: {_count: {id: "desc"}}
  })
  /* SELECT COUNT(*), s."class" FROM students s
WHERE s."jobId" is null
GROUP BY s."class"
ORDER BY COUNT(*) desc */
console.log(stu);
})()