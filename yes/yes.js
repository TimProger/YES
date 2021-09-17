const fs = require("fs");
let coolArr = []
let coolArrDateSorted = []

fs.readFile(
    "ppl.csv",
    {
        encoding: "utf-8",
    },
    function (err, data) {
        if (err) {
            throw new Error(err);
        } else {
            class Person {
                constructor(name, surname, fullname, birthday, gender) {
                  this.name = name;
                  this.surname = surname;
                  this.fullname = fullname;
                  this.birthday = birthday;
                  this.gender = gender;

                }
              }
            const reg1 = /\n+/g;
            const reg2 = /\r+/g;
            let arr = data.replace(reg1, '').replace(reg2, '').split(";;;;")
            arr.pop()

            for (i = 1; i < arr.length; i++) {
                let map = arr[i].split(';')
                let person = new Person(map[0], map[1], map[0] + " " + map[1], map[3], map[2])
                coolArr.push(person)
            }
            coolArrDateSorted = coolArr.sort(function(a,b){
                return new Date(b.birthday) - new Date(a.birthday);
              });
            console.log(coolArr)
            console.log(coolArrDateSorted)

        }
    }
);
