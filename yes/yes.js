const fs = require("fs");
let coolArr = [];
let coolDateSorted = "";
class Person {
  constructor(name, surname, gender, birthday) {
    this.name = name;
    this.surname = surname;
    this.gender = gender;
    this.birthday = birthday;
    this.fullname = `${name.split("")[0]}. ${surname}`;
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
        let person = new Person(...map);
        coolArr.push(person);
      }
      console.log(coolArr);
      let sorted = coolArr.sort(function (a, b) {
        return new Date(a.birthday) - new Date(b.birthday);
      });
      sorted.forEach((el) => {
        coolDateSorted += `${el.fullname} - ${el.birthday.replace(/-/g,".")}\n`;
      });
      console.log(coolDateSorted);
    }
  }
);
