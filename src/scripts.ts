
// Task 1
// Write a function that takes two numbers (a and b) as argument
// Sum a and b
// Return the result
console.log('---------------- task 1 ------------');

const add = (a:number, b:number): number => a + b;

console.log(add(1, 2));
console.log(add(1, 10));
console.log(add(99, 1));


// Task 2
// Write a function that takes a value as argument
// Return the type of the value
console.log('---------------- task 2 ------------');

const findType = (value:any):string => typeof(value);

console.log(findType(1));
console.log(findType(false));
console.log(findType({}));
console.log(findType(null));
console.log(findType('string'));
console.log(findType(['array']));


// Task 3
// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type
console.log('---------------- task 3 ------------');

const isEqual = (a: number | string, b: number | string): boolean => {
    if (a === b && typeof(a) === typeof(b)) {
        return true;
    } else {
        return false;
    }
};

console.log(isEqual(2, 3));
console.log(isEqual(3, 3));
console.log(isEqual(1, '1'));
console.log(isEqual('10', '10'));


// Task 3,5
// Write a function that takes a string (a) and a number (n) as arguments
// Return the nth character of 'a'
console.log('---------------- task 3,5 ------------');

const character = (a: string, b: number): string => a.charAt(b - 1);

console.log(character('abcd',1));
console.log(character('zyxbwpl',5));
console.log(character('gfedcba',3));


// Task 4
// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result
console.log('---------------- task 4 ------------');

const remove = (a: string): string => a.slice(3);

console.log(remove('abcdefg'));
console.log(remove('1234'));
console.log(remove('fgedcba'));


// Task 5
// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result
console.log('---------------- task 5 ------------');

const extracted = (str: string): string => str.slice(- 3)

console.log(extracted('abcdefg'));
console.log(extracted('1234'));
console.log(extracted('fgedcba'));


// Task 6
// Write a function that takes a string (a) as argument
// Get the first 3 characters of a
// Return the result
console.log('---------------- task 6 ------------');

const slicedStr = (a: string): string => a.slice(0, 3);

console.log(slicedStr('abcdefg'));
console.log(slicedStr('1234'));
console.log(slicedStr('fgedcba'));


// Task 7
// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result
console.log('---------------- task 7 ------------');

const halfOfString = (a: string): string => a.slice(0, (a.length / 2));

console.log(halfOfString('abcdefgh'));
console.log(halfOfString('1234'));
console.log(halfOfString('gedcba'));


// Task 8
// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a
// Return the result
console.log('---------------- task 8 ------------');

const removeLastThree = (a:string): string => a.slice(0, -3);

console.log(removeLastThree('abcdefg'));
console.log(removeLastThree('1234'));
console.log(removeLastThree('fgedcba'));


// Task 9
// Write a function that takes two numbers (a and b) as argument
// Return b percent of a
console.log('---------------- task 9 ------------');

const percent = (a: number, b: number): number => (b / 100) * a;

console.log(percent(100, 50));
console.log(percent(10, 1));
console.log(percent(500, 25));


// Task 10
// Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result
// Tip: mind the order
console.log('---------------- task 10 ------------');

const algebra = (a: number, b: number, c: number, d: number, e: number, f: number) => {
    return Math.pow(((((a + b) - c ) * d) / e), f);
}

console.log(algebra(6,5,4,3,2,1));
console.log(algebra(6,2,1,4,2,3));
console.log(algebra(2,3,6,4,2,3));


// Task 11
// Write a function that takes a number as argument
// If the number is even, return true
// Otherwise, return false
console.log('---------------- task 11 ------------');

const isEven = (a: number): boolean => {
    if (a % 2 === 0) {
        return true;
    } else {
        return false;
    };
};

console.log(isEven(10));
console.log(isEven(-4));
console.log(isEven(5));
console.log(isEven(-111));


// Task 12
// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b
console.log('---------------- task 12 ------------');

const times = (a: string, b:string): number => b.split(a).length - 1;

console.log(times('m', 'how many times does the character occur in this sentence?'));
console.log(times('h', 'how many times does the character occur in this sentence?'));
console.log(times('?', 'how many times does the character occur in this sentence?'));
console.log(times('z', 'how many times does the character occur in this sentence?'));


// Task 13
// Write a function that takes a number (a) as argument
// If a is a whole number (has no decimal place), return true
// Otherwise, return false
console.log('---------------- task 13 ------------');

const ifInteger = (a: number): boolean => {
    if (Number.isInteger(a)) {
        return true;
    } else {
        return false;
    };
};

console.log(ifInteger(4));
console.log(ifInteger(1.123));
console.log(ifInteger(1048));
console.log(ifInteger(10.48));


// Task 14
// Write a function that takes two numbers (a and b) as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value
console.log('---------------- task 14 ------------');

const result = (a: number, b: number): number => {
    if (a < b) {
        return a / b;
    } else {
        return a * b;
    };
};

console.log(result(10, 100));
console.log(result(90, 45));
console.log(result(8, 20));
console.log(result(2, 0.5));


// Task 15
// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation
console.log('---------------- task 15 ------------');

const append = (a: string, b: string): string => {
    if (a.includes(b)) {
       return b + a;
    } else {
       return a + b;
    };
};

console.log(append('cheese', 'cake'));
console.log(append('lips', 's'));
console.log(append('Java', 'script'));
console.log(append(' think, therefore I am', 'I'));


// Task 16 (page 9)
// Write a function that takes a number (a) as argument
// Round a to the 2nd digit after the comma
// Return the rounded number
console.log('---------------- task 16 ------------');

const roundNum = (a: number): number => Number(a.toFixed(2));

console.log(roundNum(2.12397));
console.log(roundNum(3.136));
console.log(roundNum(1.12397));
console.log(roundNum(26.1379));


// Task 17
// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
// Tip: you might want to change the type of the number for the splitting
console.log('---------------- task 17 ------------');

const splitted = (a: number | string): number[] => a.toString().split("").map(num => Number(num));

console.log(splitted(10));
console.log(splitted(931));
console.log(splitted(193278));


// Task 18 (page 10)
// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc.
console.log('---------------- task 18 ------------');

const cleanMess = (a: string, b: string): any => a.charAt(0).toUpperCase() + a.slice(1).replace('%', '') + b.replace('%', '').split('').reverse().join("");
   
console.log(cleanMess('java', 'tpi%rcs'));
console.log(cleanMess('c%ountry', 'edis'));
console.log(cleanMess('down', 'nw%ot'));


// Task 19
// This challenge is a little bit more complex
// Write a function that takes a number (a) as argument
// If a is prime, return a
// If not, return the next higher prime number
console.log('---------------- task 19 ------------');

const isPrime = (a: number): number => {
    let num: number;
    const prime = (y: number) => {
        for (let i = 2; i < y; i++) {
            if (y % i === 0) {
                y++;
                num = y;
                prime(y);
                break;
            } else if (i === y - 1) {
                num = y;
            }
        }
        return num;
    };
    return prime(a);
};

console.log(isPrime(38));
console.log(isPrime(7));
console.log(isPrime(115));
console.log(isPrime(2000));


// Task 20 (page 11)
// Write a function that takes two numbers, say x and y, as arguments
// Check if x is divisible by y
// If yes, return x
// If not, return the next higher natural number that is divisible by y
console.log('---------------- task 20 ------------');

const divisibility = (x: number, y: number): number => {
    if (x % y === 0) {
        return x;
    } else {
       for (let i = x; i < 25; i++) {
        if (x % y !== 0) {
            x++;
        } else {
            return x;
        };
       };
    };
};

console.log(divisibility(1, 23));
console.log(divisibility(23, 23));
console.log(divisibility(7, 3));
console.log(divisibility(-5, 7));


// Task 21
// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string
console.log('---------------- task 21 ------------');

const insertB = (a: string, b: string) => {
    return (a.match(/.{1,3}/g).join(b))
}

console.log(insertB('1234567','.'));
console.log(insertB('abcde','$'));
console.log(insertB('zxyzxyzxyzxyzxyz','w'));


// Task 22 (page 12)
// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word
console.log('---------------- task 22 ------------');

const nextLetter = (str: string):string => {
    let arr = [];

    for (let i = 0; i < str.length; i++) {
        arr.push(String.fromCharCode(str.charCodeAt(i) + 1));
    }

    return arr.join('');
}

console.log(nextLetter('bnchmf'));
console.log(nextLetter('bgddrd'));
console.log(nextLetter('sdrshmf'));

// Task 23 
// Write a function that takes an array (a) and a value (n) as argument
// Return the nth element of 'a'
console.log('---------------- task 23 ------------');

const element = (a: number[], b:number): number =>  a[b - 1];

console.log(element([1,2,3,4,5],3));
console.log(element([10,9,8,7,6],5));
console.log(element([7,2,1,6,3],1));


// Task 24
// Write a function that takes an array (a) as argument
// Remove the first 3 elements of 'a'
// Return the result
console.log('---------------- task 24 ------------');

const removeThree = (a: number[]): number[] =>  a.slice(3);

console.log(removeThree([1,2,3,4]));
console.log(removeThree([5,4,3,2,1,0]));
console.log(removeThree([99,1,1]));


// Task 25 (page 13)
// Write a function that takes an array (a) as argument
// Extract the last 3 elements of a
// Return the resulting array
console.log('---------------- task 25 ------------');

const lastThree = (a: number[]): number[] => a.slice(-3);

console.log(lastThree([1,2,3,4]));
console.log(lastThree([5,4,3,2,1,0]));
console.log(lastThree([99,1,1]));


// Task 26
// Write a function that takes an array (a) as argument
// Extract the first 3 elements of a
// Return the resulting array
console.log('---------------- task 26 ------------');

const firstThree = (a: number[]): number[] => a.slice(0, 3);

console.log(firstThree([1,2,3,4]));
console.log(firstThree([5,4,3,2,1,0]));
console.log(firstThree([99,1,1]));


// Task 27
// Write a function that takes an array (a) and a number (n) as arguments
// It should return the last n elements of a
console.log('---------------- task 27 ------------');

const lastElements = (a: number[], n: number): number[] => a.slice(-n);

console.log(lastElements([1, 2, 3, 4, 5], 2));
console.log(lastElements([1, 2, 3], 6));
console.log(lastElements([1, 2, 3, 4, 5, 6, 7, 8], 3));


// Task 28 (page 14)
// Write a function that takes an array (a) and a value (b) as argument
// The function should clean a from all occurrences of b
// Return the filtered array
console.log('---------------- task 28 ------------');

const cleanedFromB = (a: (string | number | boolean)[], b: any) => {

    const newArr = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b) {
            newArr.push(a[i]);
        }
    }
    return newArr;
}

console.log(cleanedFromB([1,2,3], 2));
console.log(cleanedFromB([1,2,'2'], '2'));
console.log(cleanedFromB([false,'2',1], false));
console.log(cleanedFromB([1,2,'2',1], 1));


// Task 29
// Write a function that takes an array (a) as argument
// Return the number of elements in a
console.log('---------------- task 29 ------------');

const arrLength = (arr: number[]): number => arr.length;

console.log(arrLength([1,2,2,4]));
console.log(arrLength([9,9,9]));
console.log(arrLength([4,3,2,1,0]));


// Task 30 (page 15)
// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array
console.log('---------------- task 30 ------------');

const negativeValues = (arr: number[]): number => {
    const negativeNums = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            negativeNums.push(arr[i])
        };
    };
    return negativeNums.length;
};

console.log(negativeValues([1,-2,2,-4]));
console.log(negativeValues([0,9,1]));
console.log(negativeValues([4,-3,2,1,0]));


// Task 31
// Write a function that takes an array of numbers as argument
// It should return an array with the numbers sorted in descending order
console.log('---------------- task 31 ------------');

const descending = (arr: number[]): number[] => {
    return arr.sort().reverse();
}

console.log(descending([1,3,2]));
console.log(descending([4,2,3,1]));


// Task 32
// Write a function that takes an array of strings as argument
// Sort the array elements alphabetically
// Return the result
console.log('---------------- task 32 ------------');

const alphabetic = (arr: string[]): string[] => arr.sort();

console.log(alphabetic(['b', 'c', 'd', 'a']));
console.log(alphabetic(['z', 'c', 'd', 'a', 'y', 'a', 'w']));


// Task 33 (page 16)
// Write a function that takes an array of numbers as argument
// It should return the average of the numbers
console.log('---------------- task 33 ------------');

const average = (arr: number[]): number => {
    let sum = 0;
    arr.forEach(num => sum += num);
    return sum / arr.length;
}

console.log(average([10,100,40]));
console.log(average([10,100,1000]));
console.log(average([-50,0,50,200]));


// Task 34
// Write a function that takes an array of strings as argument
// Return the longest string
console.log('---------------- task 34 ------------');

const longestWord = (arr: string[]): string => {
    let longer = arr.sort((a, b) => {
        return b.length - a.length;
    });
    return longer[0];
}

console.log(longestWord(['help', 'me']));
console.log(longestWord(['I', 'need', 'candy']));


// Task 35
// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise
console.log('---------------- task 35 ------------');

const equalElements = (arr: (string | number | boolean)[]): boolean => {
    return arr.every(value => value === arr[0]);
}

console.log(equalElements([true, true, true, true]));
console.log(equalElements(['test', 'test', 'test']));
console.log(equalElements([1,1,1,2]));
console.log(equalElements(['10',10,10,10]));


// Task 36 (page 17)
// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays
console.log('---------------- task 36 ------------');

const linkedArrays = (...arrays: any): any => {
    return arrays.join(',');
}

console.log(linkedArrays([1, 2, 3], [4, 5, 6]));
console.log(linkedArrays(['a', 'b', 'c'], [4, 5, 6]));
console.log(linkedArrays([true, true], [1, 2], ['a', 'b']));


// Task 37
// Write a function that takes an array of objects as argument
// Sort the array by property b in ascending order
// Return the sorted array
console.log('---------------- task 37 ------------');

interface Args {
    a: number,
    b: number
}

const sortedObjects = (args: Args[]): {}[] => args.sort((a, b) => (a.b > b.b) ? 1 : -1);

console.log(sortedObjects([{a:1,b:2},{a:5,b:4}]));
console.log(sortedObjects([{a:2,b:10},{a:5,b:4}]));
console.log(sortedObjects([{a:1,b:7},{a:2,b:1}]));


// Task 38
// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array
console.log('---------------- task 38 ------------');

const mergeArrays = (arr1: number[], arr2: number[]): number[] => {
    let newArr = arr1.concat(arr2).sort((a, b) => a - b);
    return newArr.filter((item, index) => newArr.indexOf(item) === index);
}

console.log(mergeArrays([1, 2, 3], [3, 4, 5]));
console.log(mergeArrays([-10, 22, 333, 42], [-11, 5, 22, 41, 42]));


// Task 39 (page 18)
// Write a function that takes an array (a) and a number (b) as arguments
// Sum up all array elements with a value greater than b
// Return the sum
console.log('---------------- task 39 ------------');

const summed = (arr: number[], num: number) => {
    let greaterThanB: number[] = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            greaterThanB.push(arr[i])
        };
    };

    let sum = 0;
    greaterThanB.forEach(value => sum += value);
    return sum;
}

console.log(summed([1, 2, 3, 4, 5, 6, 7], 2));
console.log(summed([-10, -11, -3, 1, -4], -3));
console.log(summed([78, 99, 100, 101, 401], 99));


// Task 40
// Write a function that takes two numbers (min and max) as arguments
// Return an array of numbers in the range min to max
console.log('---------------- task 40 ------------');

const range = (min: number, max: number): number[] => {
    let arr = [];
    for (let i = min; i <= max; i++) {
        arr.push(i);
    }
    return arr;
}

console.log(range(2, 10));
console.log(range(1, 3));
console.log(range(-5, 5));
console.log(range(2, 7));


// Task 41 (page 19)
// Write a function that takes an array of strings as argument
// Group those strings by their first letter
// Return an object that contains properties with keys representing first letters
// The values should be arrays of strings containing only the corresponding strings
// For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
// { a: ['Alf', 'Alice'], b: ['Ben']}
console.log('---------------- task 41 ------------');

type ResultObj = {
    [key: string]: string;
}

const groupStrings = (strArray: string[]) => {
    let resultObj: ResultObj = {};
  
    for (let i = 0; i < strArray.length; i++) {
        let currentWord = strArray[i];
        let firstChar = currentWord[0].toLowerCase();
        let innerArr = [];
        if (resultObj[firstChar] === undefined) {
            innerArr.push(currentWord);
            return {resultObj,[firstChar]: innerArr};
        } else {
            return {resultObj,[firstChar]: firstChar};
        }
    }
//   return resultObj
}

console.log(groupStrings(['Alf', 'Alice', 'Ben']));
console.log(groupStrings(['Ant', 'Bear', 'Bird']));
console.log(groupStrings(['Berlin', 'Paris', 'Prague']));


// Task 42
// Write a function that takes an array with arbitrary elements and a number as arguments
// Return a new array, the first element should be either the given number itself
// or zero if the number is smaller than 6
// The other elements should be the elements of the original array
// Try not to mutate the original array
console.log('---------------- task 42 ------------');

const makeNewArr = (arr: (number | string | boolean)[], num: number) => {
    if (num < 6) {
        arr.unshift(0);
    } else {
        arr.unshift(num);
    }
    return arr;
}

console.log(makeNewArr([1,2,3], 6));
console.log(makeNewArr(['a','b'], 2));
console.log(makeNewArr([null,false], 11));



// Task 43 (page 20)
// Write a function that takes an array (a) and a value (n) as arguments
// Save every nth element in a new array
// Return the new array
console.log('---------------- task 43 ------------');

const newArray = (arr: number[], n: number): number[] => {
    let nthElement: number[] = [];
    
    for (let i = n - 1; i < arr.length; i += n) {
        nthElement.push(arr[i]);
    }

    return nthElement;
}

console.log(newArray([1,2,3,4,5,6,7,8,9,10],3));
console.log(newArray([10,9,8,7,6,5,4,3,2,1],5));
console.log(newArray([7,2,1,6,3,4,5,8,9,10],2));

// Task 44
// Write a function that takes an object with two properties as argument
// It should return the value of the property with key country
console.log('---------------- task 44 ------------');

interface States {
    continent: string,
    country: string,
}

const returnCountry = (obj: States): string => {
    return obj.country;
}

console.log(returnCountry({  continent: 'Asia',  country: 'Japan'}));
console.log(returnCountry({  country: 'Sweden',  continent: 'Europe'}));

// Task 45
// Write a function that takes an object with two properties as argument
// It should return the value of the property with key 'prop-2'
// Tip: you might want to use the square brackets property accessor
console.log('---------------- task 45 ------------');

interface Props {
    one?: number,
    "prop-2": number | string,
    prop?: string,
}

const returnProp = (obj: Props): string | number => {
    return obj["prop-2"];
}

console.log(returnProp({  one: 1,  'prop-2': 2}));
console.log(returnProp({  'prop-2': 'two',  prop: 'test'}));



// Task 46
// Write a function that takes an object with two properties and a string as arguments
// It should return the value of the property with key equal to the value of the string
console.log('---------------- task 46 ------------');

interface Countries {
    continent: string,
    country: string,
};

const returnStr = (obj: Countries, str: string) => {
   if (str === "continent") {
    return obj.continent;
   } else {
    return obj.country;
   }
};

console.log(returnStr({  continent: 'Asia',  country: 'Japan'}, 'continent'));
console.log(returnStr({  country: 'Sweden',  continent: 'Europe'}, 'country'));

// Task 47
// Write a function that takes an object (a) and a string (b) as argument
// Return true if a has a property with key b
// Return false otherwise
console.log('---------------- task 47 ------------');

interface LetterValues {
    a?: number,
    b?: number,
    c?: number,
    x?: string,
    y?: string,
    z?: string
}

const checkLetterValues = (obj: LetterValues, letter: string): boolean => {
    return letter in obj;
}

console.log(checkLetterValues({a:1,b:2,c:3},'b'));
console.log(checkLetterValues({x:'a',y:'b',z:'c'},'a'));
console.log(checkLetterValues({x:'a',y:'b',z:'c'},'z'));

// Task 48
// Write a function that takes a string (a) as argument
// Create an object that has a property with key 'key' and a value of a
// Return the object
console.log('---------------- task 48 ------------');

const createObj = (letter: string): {} => {
    return {
        key: letter,
    }
}

console.log(createObj('a'));
console.log(createObj('z'));
console.log(createObj('b'));


// Task 49 (page 22)
// Write a function that takes two strings (a and b) as arguments
// Create an object that has a property with key 'a' and a value of 'b'
// Return the object
console.log('---------------- task 49 ------------');

const createObject = (firstString: string, secondString: string) => {
    return {[firstString]: secondString}
}

console.log(createObject('a','b'));
console.log(createObject('z','x'));
console.log(createObject('b','w'));

// Task 50
// Write a function that takes two arrays (a and b) as arguments
// Create an object that has properties with keys 'a' and corresponding values 'b'
// Return the object
console.log('---------------- task 50 ------------');

const objFromArrays = (keys: (string | number)[], values: (string | number)[]): {} => {
    const obj = Object.fromEntries(
        keys.map((key, index) => [key, values[index]]),
    );
    return obj;
}

console.log(objFromArrays(['a','b','c'],[1,2,3]));
console.log(objFromArrays(['w','x','y','z'],[10,9,5,2]));
console.log(objFromArrays([1,'b'],['a',2]));


// Task 51
// Write a function that takes an object (a) as argument
// Return an array with all object keys
console.log('---------------- task 51 ------------');

interface Task51 {
    a?: number,
    b?: number,
    c?: number,
    j?: number,
    i?: number,
    x?: number,
    z?: number,
    w?: number,
    y?: number,
}

const objToArr = (obj: Task51): string[] => {
    return Object.keys(obj);
}

console.log(objToArr({a:1,b:2,c:3}));
console.log(objToArr({j:9,i:2,x:3,z:4}));
console.log(objToArr({w:15,x:22,y:13}));


// Task 52 (page 23)
// Write a function that takes an object (a) as argument
// Return the sum of all object values
console.log('---------------- task 52 ------------');

interface Task52 {
    a?: number,
    b?: number,
    c?: number,
    j?: number,
    i?: number,
    x?: number,
    z?: number,
    w?: number,
    y?: number,
}

const sumObjValues = (obj: Task52) => {
    const nums = Object.values(obj);

    let sum: number = 0;
    nums.forEach(num => sum += num);

    return sum;
}

console.log(sumObjValues({a:1,b:2,c:3}));       //6
console.log(sumObjValues({j:9,i:2,x:3,z:4}));   //18
console.log(sumObjValues({w:15,x:22,y:13}));    //50


// Task 53
// Write a function that takes an object as argument
// It should return an object with all original object properties
// except for the property with key 'b'
console.log('---------------- task 53 ------------');

interface Task53 {
    a?: number,
    b?: number,
    c?: number,
    d?: number,
    e?: number,
    f?: number,
}

const extractB = (obj: Task53): {} => {
    delete obj.b;
    return obj;
}

console.log(extractB({ a: 1, b: 7, c: 3 }));
console.log(extractB({ b: 0, a: 7, d: 8 }));
console.log(extractB({ e: 6, f: 4, b: 5, a: 3 }));


// Task 54
// Write a function that takes two objects as arguments
// Unfortunately, the property 'b' in the second object has the wrong key
// should be named 'd' instead
// Merge both objects and correct the wrong property name
// Return the resulting object
// It should have the properties 'a', 'b', 'c', 'd', and 'e'
console.log('---------------- task 54 ------------');

interface Obj1 {
    a: number,
    b: number,
}

interface Obj2 {
    c: number,
    b: number,
    e: number,
}

const changeToD = (obj1: Obj1, obj2: Obj2): {} => {
    Object.assign(obj2, {d: obj2.b});
    delete obj2.b;
    
    return Object.assign(obj1, obj2);
}

console.log(changeToD({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 }));
console.log(changeToD({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 }));


// Task 55 (page 24)
// Write a function that takes an object (a) and a number (b) as arguments
// Multiply all values of 'a' by 'b'
// Return the resulting object
console.log('---------------- task 55 ------------');

interface Task55 {
    a?: number,
    b?: number,
    c?: number,
    j?: number,
    i?: number,
    x?: number,
    z?: number,
    w?: number,
    y?: number,
}

const multiplyValues = (obj: Task55, num: number) => {
    return Object.fromEntries(Object.entries(obj).map(entry => [entry[0], entry[1] * num]))
}

console.log(multiplyValues({a:1,b:2,c:3},3));
console.log(multiplyValues({j:9,i:2,x:3,z:4},10));
console.log(multiplyValues({w:15,x:22,y:13},6));


// Task 56
// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object
console.log('---------------- task 56 ------------');

interface Mixed { 
    z?: string | number,
    y?: string,
    x?: string,
    w?: string,
    2?: string,
    4?: string,
    6?: string,
    8?: string,
    a?: number,
}

const changePlaces = (obj: Mixed): {} => {
    const swapped = Object.entries(obj).map(
        ([key, value]) => [value, key]
    );
    return Object.fromEntries(swapped);

}

console.log(changePlaces({z:'a',y:'b',x:'c',w:'d'}));
console.log(changePlaces({2:'a',4:'b',6:'c',8:'d'}));
console.log(changePlaces({a:1,z:24}));


// Task 57
// Write a function that takes an object as argument
// Some of the property values contain empty strings
// Replace empty strings and strings that contain only whitespace with null values
// Return the resulting object
console.log('---------------- task 57 ------------');

interface Task57 {
    a: string,
    b: string,
    c: string,
    d?: string,
}

const isNull = (obj: Task57): {} => {
    let arr = Object.values(obj);

    let index1 = arr.indexOf('');
    if (index1 !== -1) {
        arr[index1] = null;
    }

    let index2 = arr.indexOf(' ');
    if (index2 !== -1) {
        arr[index2] = null;
    }

    return {...arr};
}

console.log(isNull({ a: 'a', b: 'b', c: '' }));
console.log(isNull({ a: '', b: 'b', c: ' ', d: 'd' }));
console.log(isNull({ a: 'a', b: 'b ', c: ' ', d: '' }));


// Task 58 (page 25)
// Write a function that takes an object as argument containing properties with personal information
// Extract firstName, lastName, size, and weight if available
// If size or weight is given transform the value to a string
// Attach the unit cm to the size
// Attach the unit kg to the weight
// Return a new object with all available properties that we are interested in
console.log('---------------- task 58 ------------');

interface Person {
    fn: string,
    ln: string,
    age: number,
    size?: number | string,
    email?: string,
    weight?: number | string
}

const getInfo = (obj: Person) => {
    let newObj = (({ fn, ln, size, weight }) => ({ fn, ln, size, weight }))(obj);

    for (let key in newObj) {
        if (newObj.size === undefined) {
            delete newObj.size;
        }
        if (newObj.weight === undefined) {
            delete newObj.weight;
        }
    }

    if ("size" in newObj) {
        newObj.size = `${obj.size}cm`
    }
    if ("weight" in newObj) {
         newObj.weight = `${obj.weight}cm`
    }

    return newObj
}

console.log(getInfo({fn: 'Lisa', ln: 'Müller', age: 17, size: 175, weight: 67}));
console.log(getInfo({fn: 'Martin', ln: 'Harper', age: 26, email: 'martin.harper@test.de', weight: 102}));
console.log(getInfo({fn: 'Andrew', ln: 'Harper', age: 81, size: 175, weight: 71}));
console.log(getInfo({fn: 'Matthew', ln: 'Müller', age: 19, email: 'matthew@mueller.de'}));


// Task 59
// Write a function that takes an array of objects and a string as arguments
// Add a property with key 'continent' and value equal to the string to each of the objects
// Return the new array of objects
// Tip: try not to mutate the original array
console.log('---------------- task 59 ------------');

interface Task59 {
    city: string,
    country: string,
}

const addContinent = (obj: Task59[], addedContinent: string) => {
    return obj.map(state => ({
        ...state, continent: addedContinent
    }))
}

console.log(addContinent([{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia'));
console.log(addContinent([{ city: 'Stockholm', country: 'Sweden' }, { city: 'Paris', country: 'France' }], 'Europe'));


// Task 60 (page 26)
// Write a function that takes an array of numbers as argument
// Convert the array to an object
// It should have a key for each unique value of the array
// The corresponding object value should be the number of times the key occurs within the array
console.log('---------------- task 60 ------------');

interface ArrObj {
    [key: number]: number;
  }

const convertToObj = (arr: number[]) => {
    const arrObj: ArrObj = {};
    for (let num of arr) {
        // Iterējot cauri arrayam, ja konkrētais cipars jau ir bijis vienreiz uzskaitīts, tad
        // tiek pievienots 1 cipara esošajai vērtībai objektā arrObj. Bet, ja ciparu sastop pirmo reizi,
        // tad arrObj objektā pievieno rakstzīmi ar vērtību 1.
        arrObj[num] = arrObj[num] + 1 || 1;
    }

    return arrObj
}

console.log(convertToObj([1,2,2,3]));       // Expected {1:1,2:2,3:1}
console.log(convertToObj([9,9,9,99]));      // Expected {9:3,99:1}
console.log(convertToObj([4,3,2,1]));       // Expected {1:1,2:1,3:1,4:1}


// Task 61
// Write a function that takes two date instances as arguments
// It should return true if the dates are equal
// It should return false otherwise
console.log('---------------- task 61 ------------');

const areEqual = (date1: Date, date2: Date) => {
    return date1.getTime() === date2.getTime();
}

console.log(areEqual(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00')));
console.log(areEqual(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00')));
console.log(areEqual(new Date('2001/01/01 08:00:00'), new Date('2000/01/01 08:00:00')));


// Task 62
// Write a function that takes two date instances as argument
// It should return the number of days that lies between those dates
console.log('---------------- task 62 ------------');

const getDays = (date1: Date, date2: Date) => {
    if (date1.getDate() > date2.getDate()) {
        return date1.getDate() - date2.getDate()
    } else {
        return Math.ceil((date2.getTime() - date1.getTime()) / (1000 * 3600 * 24));
    }
}

console.log(getDays(new Date('2020-06-11'), new Date('2020-06-01')));
console.log(getDays(new Date('2000-01-01'), new Date('2020-06-01')));



// Task 63 (page 27)
// Write a function that takes two date instances as argument
// It should return true if they fall on the exact same day
// It should return false otherwise
console.log('---------------- task 63 ------------');

const sameDay = (date1: Date, date2: Date) => date1.getDay() === date2.getDay();

console.log(sameDay(new Date('2000/01/01'), new Date('2000/01/01')));
console.log(sameDay(new Date('2000/01/01'), new Date('2000/01/02')));
console.log(sameDay(new Date('2001/01/01'), new Date('2000/01/01')));
console.log(sameDay(new Date('2000/11/01'), new Date('2000/01/01')));



// Task 64
// Write a function that takes two number arrays as parameters 
// and return an array which contains elements from both 
// arrays
console.log('---------------- task 64 ------------');

const combineArrays = (arr1: number[], arr2: number[]) => {
    return [...arr1, ...arr2]
}

console.log(combineArrays([1, 2], [3, 4]) );
console.log(combineArrays([1, 2], [3, 4, 5, 6]) );


// Task 65
// Write a function that takes an array and a string as parameters 
// and return an array which contains all elements from the given array
// and the given string as the last element
console.log('---------------- task 65 ------------');

const addFruit = (fruits: string[], additionalFruit: string) => [...fruits, additionalFruit];

console.log(addFruit(['Apple', 'Orange', 'Banana'], 'Kiwi'));


// Task 66
// Write a function that takes an array and a string as parameters 
// and return an array which contains all elements from the given array
// and the given string as the first element
console.log('---------------- task 66 ------------');

const addFirstFruit = (fruits: string[], additionalFruit: string) => [additionalFruit, ...fruits];

console.log(addFirstFruit(['Apple', 'Orange', 'Banana'], 'Kiwi'))


// Task 67
// Write a function that takes two objects as parameters 
// and return an object which contains properties from both 
// objects
console.log('---------------- task 67 ------------');

type FirstObject = {
    a: number,
    b: number
}
type SecondObject = {
    c: number,
    d: number,
    e?: number,
    f?: number
}

const mergeObjects = (obj1: FirstObject, obj2: SecondObject) => {
    return {...obj1, ...obj2}
}

console.log(mergeObjects({ a:1, b:2 }, { c:3, d:4 }));
console.log(mergeObjects({ a:1, b:2 }, { c:3, d:4, e:5, f:6 }));


// Task 68 (final)
// Write a function that takes an object and a string as parameters 
// and return an object which contains properties from the given object
// and a new property favoriteMovie with the value equal to the given string
console.log('---------------- task 68 ------------');

type Properties = {
    eyeColor: string,
    age: number
}

const addFavoriteMovie = (obj: Properties, movie: string) => {
    return {...obj, favoriteMovie: movie};
}
console.log(addFavoriteMovie({ eyeColor: 'green', age: 10 }, 'Garfield'));
console.log(addFavoriteMovie({ eyeColor: 'blue', age: 15 }, 'Twilight'));
