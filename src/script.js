
let convert = function(){

  let word = document.getElementById('value').value;
  let ascii = ""
  let temp = ""
  for(let count = 0; count < word.length; count++){
    let temp = word[count]

    if(temp === undefined){
      document.getElementById('invalid').style.display = "block"
      return
    }
    console.log("The character that you have entered is " + temp)
    temp = temp.charCodeAt(0)
    ascii += temp
    ascii += " "


}

console.log("The asciiz number is: \n" + ascii)
document.getElementById('statement').style.display = "block"
document.getElementById('asciiz').innerHTML = ascii

}


let clear = function() {
  document.getElementById('statement').style.display = "none"
  document.getElementById('value').value = ""
}
