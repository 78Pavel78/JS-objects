
// решение первого задания
function arraySum(array){
let sum = 0;
for(let i = 0; i < array.length; i++){
    sum += array[i];
    }
return sum;
}
function hasEqualSums(first, second) {
    return(arraySum(first) === arraySum(second));
   }
// проверка первого задания
console.log (hasEqualSums([2, 2, 4],[5, 3]));

// решение второго задания

function filterNames(names, grid) {
const result = names.filter(name => name.length === grid);
return result;
}   
    
// проверка второго задания
console.log(filterNames(['alt', 'shoo', 'js', 'html', 'git', 'css', 'ctrl'], 4));
