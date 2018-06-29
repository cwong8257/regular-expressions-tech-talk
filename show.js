const notBinary = /[^01]/;
// console.log(notBinary.test('1100100010100110')); // false
// console.log(notBinary.test('1100100010200110')); // true

const dateTime1 = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
// console.log(dateTime1.test('01-30-2003 15:20')); // true
// console.log(dateTime1.test('30-jan-2003 15:20')); // false

const dateTime2 = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
// console.log(dateTime2.test('1-30-2003 8:45')); // true

const laughing = /(ha+)+/;
// console.log(laughing.test('hahahaaaaaaaaaaaaaa')); // true

const match1 = /\d+/.exec('one two 100');
// console.log(match1);
// console.log(match1.index);

const match2 = 'one two 100'.match(/\d+/);
// console.log(match2);
// console.log(match2.index);

const replace1 = 'papa'.replace(/p/, 'm');
// console.log(replace1);

const camelCased = 'this_is_camel_case'.replace(/_([a-z])/gi, function(
  matched
) {
  return matched[1].toUpperCase();
});
// console.log(camelCased);

const names = 'Wong, Christopher\nEinstein, Albert\nTuring, Alan'.replace(
  /(\w+), (\w+)/g,
  '$2 $1'
);
// console.log(names);
