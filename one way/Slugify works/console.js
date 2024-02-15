// example code here

console.log('Hello guys');
var slugify = required('slugify')

let a = slugify('some string')   //some string

// if you prefer something other than '_' as operator
const b = slugify('some8#^#$@#%^^&%#$@#%@$% string','_') //some_string
console.log(b)
