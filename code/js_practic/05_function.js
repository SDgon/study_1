// function auth() {
//     const token = String(Math.floor(Math.random() * 1000000)).padStart(6,"0")
//     document.getElementById("target").innerText = token
// }

let auth = () => {
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6,"0")
    document.getElementById("target").innerText = token
    document.getElementById("target").style.color = "#" + token;

    
    // var colorCode = "target"+Math.round(Math.random() * 0xffffff).toString(16);
         
    // target.style.color = "ffffff"; 
}

// function myFunction {
// };