var texto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultricies massa sit amet tellus fringilla, eu placerat lacus sodales. Suspendisse potenti. Cras placerat turpis nec lectus bibendum fermentum. Maecenas molestie erat eu neque pulvinar, eu pellentesque felis pretium. Suspendisse potenti. Suspendisse turpis ipsum, aliquet sit amet vehicula ut, sollicitudin id elit. Cras laoreet faucibus turpis.";

var toHackerCase = function (text) {
    var hackerTextArray = [];
    for (var i = 0; i < texto.length; i++) {
        if (text.charAt(i) === "a") {
            hackerTextArray.push(4);
            continue;
        }
        if (text.charAt(i) === "e") {
            hackerTextArray.push(3);
            continue;
        }
        if (text.charAt(i) === "i") {
            hackerTextArray.push(1);
            continue;
        }
        if (text.charAt(i) === "o") {
            hackerTextArray.push(0);
            continue;
        }
        if (text.charAt(i) === "s") {
            hackerTextArray.push(5);
            continue;
        }
        if (text.charAt(i) === "t") {
            hackerTextArray.push(7);
            continue;
        }           hackerTextArray.push(text.charAt(i));
    }
    return hackerTextArray.join("");
};
console.log(toHackerCase(texto));



var toHackerCase = function (text) {
    var hackerTextArray = [];
    for (var i = 0; i < texto.length; i++) {
        switch(text.charAt(i)) {
            case "a":
                hackerTextArray.push(4);
                break;
            case "e":
                hackerTextArray.push(3);
                break;
            case "i":
                hackerTextArray.push(1);
                break;
            case "o":
                hackerTextArray.push(0);
                break;
            case "s":
                hackerTextArray.push(5);
                break;
            case "t":
                hackerTextArray.push(7);
                break;
            default:
                hackerTextArray.push(text.charAt(i));
        }
    }
    return hackerTextArray.join("");
};
console.log(toHackerCase(texto));


var toHackerCase = function (text) {
    if (!text) throw new HackerTextError("Texto inválido.");
    if (typeof text !== "string") throw new HackerTextError("Tipo inválido.");
    var hackerTextArray = [];
    var i = 0;
    while(i < text.length) {
        switch(text.charAt(i)) {
            case "a":
                hackerTextArray.push(4);
                break;
            case "e":
                hackerTextArray.push(3);
                break;
            case "i":
                hackerTextArray.push(1);
                break;
            case "o":
                hackerTextArray.push(0);
                break;
            case "s":
                hackerTextArray.push(5);
                break;
            case "t":
                hackerTextArray.push(7);
                break;
            default:
                hackerTextArray.push(text.charAt(i));
        }
        i++;
    }
    return hackerTextArray.join("");
};
console.log(toHackerCase(texto));

var HackerTextError = function (message) {
    this.message = message;
    this.name = "HackerTextError";
}

try {
    console.log(toHackerCase());
} catch (e) {
    console.log("Erro: " + e.message);
}
try {
    console.log(toHackerCase(10));
} catch (e) {
    console.log("Erro: " + e.message);
}