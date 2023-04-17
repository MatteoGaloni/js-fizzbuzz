for (let i = 1; i <= 100; i++) {

   
    
    if (i % 5 == 0 && i % 3 == 0) {
        console.log(`Divisibile sia per 5 che per 3: ${i}`);
    } else if (i % 5 == 0) {
        console.log(`Divisibile per 5: ${i}`);
    } else if (i % 3 == 0) {
        console.log(`Divisibile per 3: ${i}`);
    }
    console.log(`Contatore vale: ${i}`);
}





