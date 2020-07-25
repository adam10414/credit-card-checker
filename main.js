// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]
const valid6 = [4, 5, 3, 9, 6, 8, 9, 8, 8, 7, 7, 0, 5, 7, 9, 8]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:

//Checks for valid credit card numbers. 
//Returns true if valid and false if not. 
//Uses the Luhn algorithum
function validateCred(array){

    //i = index. 
    //Starting index out at second to last digit in array, will iterate -2 every step and double the number. If this number > 9, then will -9 from result. 
    for(let i = array.length -2; i >= 0; i = i - 2){
        array[i] = array[i] * 2;

        if(array[i] > 9){
            array[i] = array[i] - 9;
        }
    }//closing for loop

    //summing all digits in array
    let arraySum = 0;
    for(let i = 0; i < array.length; i++){
        arraySum = arraySum + array[i];
    }

    //Does the sum return a remainder of 0 when devided by 100? 
    if(arraySum % 10 === 0){
        return true;
    }

    else return false;


}

//logging function
function print(array){
    if(validateCred(array)){
        return console.log(`The array is valid!`);
    }

    else return console.log('The array is not valid. :( ');
}

print(mystery1);
print(mystery2);
print(mystery3);
print(mystery4);
print(mystery5);

/*
I will use this later to see if the function works. 
console.log(`This should be valid and return TRUE: ${validateCred(valid1)}`);
console.log(`This should be invalid and return FALSE: ${validateCred(invalid1)}`);

*/