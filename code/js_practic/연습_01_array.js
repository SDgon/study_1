let classmates = ["철수","영희","훈이"]
// undefined

classmates
// ['철수', '영희', '훈이']
classmates[0]
//'철수'
classmates[1]
//'영희'
classmates[2]
//'훈이'

classmates.includes("훈이")
//true
classmates.includes("맹구")
//false
classmates.length
//3
classmates.push("맹구")
//4
classmates.includes("맹구")
//true
classmates
//['철수', '영희', '훈이', '맹구']
classmates.length
//4
classmates.pop()
//'맹구'
classmates.length
//3
classmates
// ['철수', '영희', '훈이']

let developer = ["개발자", "FE", "웹", "서버", "통신"]
//undefined
let dream = ["커리어점프", "성공", "할수있다"]
//undefined
developer.concat(dream)
//(8) ['개발자', 'FE', '웹', '서버', '통신', '커리어점프', '성공', '할수있다']
let futur = developer.concat(dream)
//undefined
futur
//(8) ['개발자', 'FE', '웹', '서버', '통신', '커리어점프', '성공', '할수있다']