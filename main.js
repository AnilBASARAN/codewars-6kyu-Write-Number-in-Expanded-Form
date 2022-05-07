let expandedForm = (num) => num.toString().split('').map((x,i,arr)=> x = Number(x)*10**(arr.length-i-1)).filter(x => x > 0).join(" + ")

/*

6kyu Write Number in Expanded Form

Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.

If you liked this kata, check out part 2!!

https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript


BEST SOLUTİONS
--------------------------------------------------------------

function expandedForm(num) {
  return String(num)
          .split("")
          .map((num, index, arr) => num + "0".repeat(arr.length - index -1 ))
          .filter((num) => Number(num) != 0)
          .join(" + ")
}
--------------------------------------------------------------

function expandedForm(num) {
  num = String(num);
  let result = [];
  for (var i = 0; i < num.length; i++) {
    if (num[i] == 0) continue;
    else result.push(num[i] + "0".repeat(num.length -i -1))
  }
  return result.join(" + ")
}
--------------------------------------------------------------

var expandedForm = (num) => {
  var arr = num.toString().split('').reverse();
  var result = [];
  for(var i = 0; i < arr.length; i++){
    arr[i] == 0 ? result.push() : result.push(arr[i] + ('0'.repeat(i)))
  }
  return result.reverse().join(' + ')
}
--------------------------------------------------------------







const expandedForm = n => n.toString()
                            .split("")
                            .reverse()
                            .map( (a, i) => a * Math.pow(10, i))
                            .filter(a => a > 0)
                            .reverse()
                            .join(" + ");

                       