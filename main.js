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
let studentIndex = 0; //用來辨別學生與學生之間有沒有同組過的index
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
      const SameGroup = getSameGroup(Students[index], studentIndex);
      group.Students.push({
        Teacher: Teachers[i],
        Student: Students[index],
        SameGroup: SameGroup,
      });
      index += 1;
    }
    studentIndex += perGroupStudents;
    groups.push(group);
  }

  return groups;
};

const getSameGroup = (student, studentIndex) => {
  var SameGroup = [];
  for (let k = 0; k < perGroupStudents; k++) {
    SameGroup.push(Students[studentIndex]);
    studentIndex += 1;
  }
  return SameGroup.filter((g) => g != student);
};

/**
 * Students : 0 : {Teacher : "A", Student : "A1", SameGroup : ["A2","A3","A4","A5"]}
 * Students : 1 : {Teacher : "A", Student : "A2", SameGroup : ["A1","A3","A4","A5"]}
 */

let a = firstGrouping(groups, index);

const randomGrouping = (students) => {
  // console.log(randomGroup);
};

console.log(a);

randomGrouping(a);
