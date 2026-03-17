// Print the following pattern

// 1
// 12
// 123
// 1234
// 12345



for (let i = 1; i <=5; i++){
    let res = "";
    for(j=1; j<=i; j++){
        // console.log("i", j);
        res = res +j;
    }
    console.log(res);  
//1
// 12
// 123
// 1234
// 12345

}

for(i =1; i<=5; i++){
    let res= '';
    for(j=1; j<=i; j++){
        res = res + 1;
    }
    console.log(res);  
    
 //1
// 11
// 111
// 1111
// 11111
}


//next question--
// 12345
// 1234
// 123
// 12
// 1
for(i= 5; i>=5; i++){
    let result = '';
    for(j = 1; j>= i; j){
        res =res + 1;
    }
    console.log(res); 
}


