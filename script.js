// Challenge 1: Store the string "I am a" in one variable and store the other string "Kalvian" in other variable and concatenate both the string to get the output as "I am a Kalvain" using "+" operator.
var stringName = 'I am a ';
var stringKalvi = 'Kalvian';
console.log(stringName.concat(stringKalvi));

// Challenge 2: Store the given string in a variable and print the same in console. String: If you fail, never give up because FAIL means "First Attempt In Learning".
var string =
  'If you fail, never give up because FAIL means "First Attempt In Learning';

// Challenge 3: Store a string in a variable and display the length of the string.
console.log(string.length);

// Challenge 4: Store a string in a variable and convert it into uppercase.
console.log(string.toUpperCase());

//Challenge 5: Store the string "I love programming" in a variable and replace the word programming with "JavaScript programming".
var program = 'I love programming';
console.log(program.replace(/programming/g, 'JavaScript'));

// Challenge 6: Store a string in variable and print the string in console 3 times using repeat method.
console.log(program.repeat(3));

//Challenge 7: Store the string as "I am a Kalvian" in a variable and convert the string into array and print the array in console.
var stringarray = 'Iam a kalvian';
console.log(stringarray.split(' '));

// Challenge 8: Store the given string "Time and Tide wait for none" in a variable and using indexOf method find the index of "Ti" and print the same in console.
var stringTime = 'Time and Tide wait for none';
console.log(stringTime.indexOf('Ti'));

// Challenge 9: Store the given string "When life gives you lemons make lemonade" in a variable and find whether it includes "lemon".
var stringlemon = 'If life gives you lemon make lemonade';
console.log(stringlemon.includes('lemon'));

// Challenge 10: Store the given string "You must be the change you wish to see in the world." in a variable and use slice to console log the word "change" and use substring method to console log the word "world".
var stringchange = 'You must be the change you wish to see in the world';
console.log(stringchange.slice(16, 22));
console.log(stringchange.substring(46, 53));
