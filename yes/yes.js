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
            const reg1 = /\n+/g;
            const reg2 = /\r+/g;
            let arr = data.replace(reg1, '').replace(reg2, '').split(";;;;")
            arr.pop()

            for (i = 1; i < arr.length; i++) {
                let map = arr[i].split(';')
                let person = {
                    name: map[0],
                    surname: map[1],
                    fullname: map[0] + map[1],
                    birthday: map[3],
                    gender: map[2]
                }
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
