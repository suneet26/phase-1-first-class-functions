function receivesAFunction(callback) {
   callback()
}

function returnsANamedFunction() {
    const namedFn = () => console.log("This is a named function");
    return namedFn;
}

// function returnsAnAnonymousFunction() {
//     return() => console.log("Returns an anonymous function");
// }

function returnsAnAnonymousFunction() {
    return () => console.log("Returns an anonymous function");
}