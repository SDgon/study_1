const email = "qzom1425@naver.com"
//undefined
email.includes("@")
//true
email.split("@")
//(2) ['qzom1425', 'naver.com']
email.split("@")[0]
//'qzom1425'
email.split("@")[1]
//'naver.com'
let userMail = email.split("@")[0]
//undefined
userMail
//'qzom1425'
let company = email.split("@")[1]
//undefined
company
//'naver.com'
let maskingMail = []
//undefined
maskingMail.push(userMail[0])
//1
maskingMail.push(userMail[1])
//2
maskingMail.push(userMail[2])
//3
maskingMail.push(userMail[3])
//4
maskingMail
//(4) ['q', 'z', 'o', 'm']
maskingMail.push("*")
//5
maskingMail.push("*")
//6
maskingMail.push("*")
//7
maskingMail.push("*")
//8
maskingMail
//(8) ['q', 'z', 'o', 'm', '*', '*', '*', '*']
maskingMail.join('')
//'qzom****'
maskingMail.join("") + "@" + company
//'qzom****@naver.com'
let emain = maskingMail.join("") + "@" + company
//undefined
emain
//'qzom****@naver.com'