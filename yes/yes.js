const fs = require("fs");

let coolArr = [];
let coolDateSorted = "";
class Person {
  constructor(name, surname, fullname, birthday, gender) {
    this.name = name;
    this.surname = surname;
    this.fullname = fullname;
    this.birthday = birthday;
    this.gender = gender;
  }
}
fs.readFile(
  "ppl.csv",
  {
    encoding: "utf-8",
  },
  function (err, data) {
    if (err) {
      throw new Error(err);
    } else {
      const reg1 = /\n+/g;
      const reg2 = /\r+/g;
      let arr = data.replace(reg1, "").replace(reg2, "").split(";;;;");
      arr.pop();

      for (i = 1; i < arr.length; i++) {
        let map = arr[i].split(";");
        let person = new Person(
          map[0],
          map[1],
          map[0].split("")[0] + ". " + map[1],
          map[3],
          map[2]
        );
        coolArr.push(person);
      }
      console.log(coolArr);

      let sorted = coolArr.sort(function (a, b) {
        return new Date(b.birthday) - new Date(a.birthday);
      });
      sorted.forEach((el) => {
        coolDateSorted += `${el.fullname}, ${el.birthday}\n`;
      });
      console.log(coolDateSorted);
    }
  }
);
