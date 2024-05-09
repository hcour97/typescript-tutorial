console.log("HELLO");


function multiply(x: number, y: number) : number {
    return x * y;
}

console.log(multiply(4,7));

const button = document.getElementById("btn")!;


const ipt = document.getElementById("username") as HTMLInputElement;
button.addEventListener("click", function() {
    console.log(ipt.value);
})