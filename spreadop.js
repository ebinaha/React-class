
// 배열의 값을 변수에 분할해서 담기
let arr = [1,2,3,4,5];
let [v1,v2,v3,...other] = arr;
console.log(v1);
console.log(v2);
console.log(v3);
console.log(other);


// 객체의 값을 변수에 분할해서 담기
let obj = {k1:"aa", k2:"bb", k3:"cc"};
let {k1,k2,k3} = obj;
console.log(k1);
console.log(k2);