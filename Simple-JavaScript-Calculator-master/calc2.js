let inputDOM = document.querySelector(`#answer`);
let equalBtnDOM = document.querySelector(`.equalBtn`)
let backspaceDOM = document.querySelector(`#backspace`)
let backspaceİconDOM = document.querySelector(`.bi`)
let ButtonsDOM = document.querySelectorAll(`button`)
///////////////////////////////////////////////////////////////
for (item of ButtonsDOM){
  item.addEventListener(`click`,clickBtn)
  
  function clickBtn (event) {
/* console.log(event.target); */       
    let buttonText = event.target.innerText
    if (!(isNaN(buttonText))){///It means if it is number do that
      buttonText = parseInt(buttonText)
      inputDOM.value +=buttonText
    }
    else{
    
     if(buttonText == `X`){
      inputDOM.value += `*`
    }
    else if(buttonText == `=` ){
      result=eval(inputDOM.value)
     inputDOM.value=result
    }
    else if(buttonText == `C`){
      inputDOM.value = ` `
    }
    else{
        inputDOM.value +=buttonText
    }
  }
}
}
////////////////////////////////////////////////////////////////////  


inputDOM.addEventListener(`keydown`, (event ) => {
  if (event.key == `Enter` || event.key == `=` ){
    event.preventDefault()
    result=eval(inputDOM.value)
   inputDOM.value=result
  }   
  else if(event.key == `*` || event.key == `+` || event.key == `/` || event.key == `%` || event.key == `(` || event.key == `)` || event.key == `-` || event.key == `.` || event.key == `(` || event.key == `)` || event.key == `-` || event.keyCode == `39` || event.keyCode == `37` || event.key == `Backspace`){
    console.log(`These must work`);
  }
  else if(  event.key == `,`){
    event.preventDefault()
    inputDOM.value += `.`
  }
 else  if(!(isNaN(event.key))){//Nan = not a number !isNan = number
    let newNumber =   parseFloat( event.key)
    console.log(newNumber);
  }
  else{
    event.preventDefault()
  /*   alert(`You don't have to use string!`) */
  }

})  
backspaceDOM.addEventListener(`click`,function (event){ 
let newString=String(inputDOM.value)
    console.log(newString.slice(0,-4));
   inputDOM.value = newString.slice(0,-4)
   
 
})
//a problem: after i click any button i can not write number by keyboard