/**
 * Truthy:
 * 1:True
 * 2:Any number (+ve , -ve) will be truthy other than 0
 * 3:Any string other than empty string
 * 4:'0', 'false' (this example is string)
 * 5:{}
 * 6:[]
 * 
 * 
 * 
 * Falsy:
 * 1:False
 * 2:0
 * 3:' (empty string )
 * 4:undefined
 * 5:null
 * 
*/



// optional

// check falsy
const x = '';
if (!x) {
console.log('value is falsy');
}

// check truthy
const z = {class:9};
if(!!z){
    console.log('value is truthy');
    
}
