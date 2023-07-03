/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s=s.replace(/[^a-zA-Z0-9 ]/g, '')
    s=s.toLowerCase().split(' ').join('');
    s=s.split('');
    let lftPtr = 0;
    let rightPtr = s.length-1; 
    while(rightPtr >= lftPtr){
        if(s[lftPtr]!=s[rightPtr]){
            return  false;
        }
        rightPtr--;
        lftPtr++;
    }

    return true;


};