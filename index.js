// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    cats.push("Ralph");
}

function destructivelyPrependCat() {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat() {
    return [...cats, "Broom"]
}

function prependCat() {
    return ["Arnold", ...cats];
}

function removeLastCat() {
    const newArray = cats.slice(0, -1);
    return newArray;
}

function removeFirstCat() {
    const newArray = cats.slice(1);
    return newArray;
}
