const wrapper = document.getElementById("wrapper")

 // *****test aggiungo elemento al Dom tramite metodo append***

// const myDiv = document.getElementById('myDiv');
// const newDiv = document.createElement('div');

for (let i = 1; i <= 100; i++) {   
    
    if (i % 5 == 0 && i % 3 == 0) {
        console.log(`FizzBuzz: ${i}`);
        wrapper.innerHTML += `<div class="box fizzBuzz">${"FizzBuzz"}</div>`;
    } else if (i % 5 == 0) {
        console.log(`Buzz: ${i}`);
        wrapper.innerHTML += `<div class="box buzz">${"Buzz"}</div>`;
    } else if (i % 3 == 0) {
        console.log(`Fizz: ${i}`);
        wrapper.innerHTML += `<div class="box fizz">${"Fizz"}</div>`;
    } else {
        console.log(i);
        wrapper.innerHTML += `<div class="box">${i}</div>`;
    }

//    ***test metodo append***
    
    // newDiv.append(i);
    // myDiv.append(newDiv);
}







