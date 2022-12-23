
if(1+1 === 2) {
    console.log("정답입니다")
} else {
    console.log("틀렸습니다")
}
// 정답입니다
//undefined
if(true) {
    console.log("정답입니다")
} else {
    console.log("틀렸습니다")
}
// 정답입니다
//undefined
if(!true) {
    console.log("정답입니다")
} else {
    console.log("틀렸습니다")
}
// 틀렸습니다
//undefined
if(0) {
    console.log("정답입니다")
} else {
    console.log("틀렸습니다")
}
// 틀렸습니다
//undefined

const profile = {
    name : "철수",
    age : 10,
    school : "다람쥐초등학교"
}

if (profile.age >= 20) {
    console.log("성인입니다");
} else if (profile.age >= 8) {
    console.log("학생입니다");
} else if (profile.age > 0) {
    console.log("어린이입니다");
} else {
    console.log("잘못 입력하셨습니다");
}
//학생입니다

const children = ["철수","영희","훈이"]
for(let i = 0; i < children.length; i++) {
    console.log(children[i]+"입니다");
}
//철수입니다
//영희입니다
//훈이입니다

let persons = [
    {name: "철수", age: 17},
    {name: "영희", age: 22},
    {name: "도우너", age: 5},
    {name: "그루트", age: 65},
    {name: "도비", age: 3}
]

for (let old = 0; old < persons.length; old++){
    if(persons[old].age >= 19) {
        console.log(persons[old].name+"님은 성인입니다");
    }else{
        console.log(persons[old].name+"님은 미성년자입니다");
    }

}

