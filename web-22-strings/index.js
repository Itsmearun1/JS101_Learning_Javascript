let arr = [ " George " , " Mary " , " Oalar " , " Celin " ];
let count = 0 ;
for ( let i = 0 ; i <= arr.length - 1 ; i++ ) {
  let string = arr [ i ] ;
  console.log(string);
  if (string[0] != "A" || string [0] != "E" || string [0] != "I" || string [0] != "O" ||
string [ 0 ] != " U " ) {
    count ++ ;
}
 }
console.log ( count ) ;
