//TBD 模組化
const StudentsDOM = document.querySelector(".students");

const Teachers = ["A", "B", "C", "D", "E"];

const Students = [
  "A1",
  "A2",
  "A3",
  "A4",
  "A5",
  "B1",
  "B2",
  "B3",
  "B4",
  "B5",
  "C1",
  "C2",
  "C3",
  "C4",
  "C5",
];

const groups = [];

let index = 0; // 用來取得學生學號的index
let studentSameGroupIndex = 0; //用來辨別學生與學生之間有沒有同組過的index
let perGroupStudents = 3; // 每個組別的學生數

const firstGrouping = (groups, index) => {
  for (let i = 0; i < Teachers.length; i++) {
    // 組別初始化 先為一個組別分配一個老師
    var group = {
      Teacher: Teachers[i],
      Students: [],
    };

    for (let j = 0; j < perGroupStudents; j++) {
      //將學生輸入至組別 並在SameGroup的欄位把除了自己以外的學生輸入進去 日後方便辨別這位學生是否已經有跟某位學生同組過
      //Teacher欄位紀載學生已經被哪位老師指導過
      const SameGroup = getSameGroup(Students[index], studentSameGroupIndex);
      group.Students.push({
        Teacher: Teachers[i],
        Student: Students[index],
        SameGroup: SameGroup,
      });
      index += 1;
    }
    studentSameGroupIndex += perGroupStudents;
    groups.push(group);
  }

  return groups;
};

const getSameGroup = (student, studentSameGroupIndex) => {
  var SameGroup = [];
  for (let k = 0; k < perGroupStudents; k++) {
    SameGroup.push(Students[studentSameGroupIndex]);
    studentSameGroupIndex += 1;
  }
  return SameGroup.filter((g) => g != student);
};

/**
 * Students : 0 : {Teacher : "A", Student : "A1", SameGroup : ["A2","A3","A4","A5"]}
 * Students : 1 : {Teacher : "A", Student : "A2", SameGroup : ["A1","A3","A4","A5"]}
 */

let a = firstGrouping(groups, index);

// console.log(a);

const randomGrouping = (students) => {
  let reandomGroup = [];
  let studentIndex = 0;
  var g = [];
  students.map((student) => {
    student.Students.map((student) => {
      // {Teacher: 'A', Student: 'A1', SameGroup: [A2,A3]}
      //RUN 3 次
      let gIndex = 0;
      var sIndex = 0;
      for (let i = 0; i < Students.length; i++) {
        if (g.length == 0) {
          if (student.SameGroup.includes(Students[sIndex]) != true) {
            // A1 include [A2,A3] -> false -> push g
            g.push(student); //A1
            sIndex += 1;
          }
        } else if (g.length < 3) {
          sIndex++;
          if (g[gIndex].SameGroup.includes(Students[sIndex]) != true) {
            const member = students
              .map((student) =>
                student.Students.find((s) => s.Student == Students[sIndex])
              )
              .filter((f) => f != undefined);

            g.push(member[0]); // B1
            gIndex++;
          }
        } else if (g.length == 3) {
          console.log(g.length);
        }
        // console.log(g);
      }
    });
    reandomGroup.push(g);
  });
  console.log("------------------------------------------");
  console.log(reandomGroup);
};

// console.log(a);

randomGrouping(a);
