let N = 3;
let count=0;
for (let i = 1; i <= N * N; i = i + count) {
    let bag = "";
    
    for (let j = i; j < i + N; j++) {
        bag= bag+ j + " ";
        count++;
    }
    console.log(bag);
}