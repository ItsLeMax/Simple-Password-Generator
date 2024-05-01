const validLetters = "abcdefghijklmnopqrstuvwxyz1234567890+#,.-<>;:_'*^";
const intendedLength = process.argv[2] || 32;
const colors = {
    error: "\x1b[31m",
    reset: "\x1b[0m"
};

if (isNaN(intendedLength)) {
    console.error(colors.error + "Only Numbers are allowed!", "Nur Nummern sind erlaubt!" + colors.reset);
    return;
}

const maximum = 150;
if (intendedLength > maximum) {
    console.error(colors.error + `Better choose ${maximum} signs or less!`, `Wähle besser ${maximum} oder weniger Zeichen!` + colors.reset);
    return;
}

const minimum = 9;
if (intendedLength < minimum) {
    console.error(colors.error + `Better choose ${minimum} signs or more!`, `Wähle besser ${minimum} oder mehr Zeichen!` + colors.reset);
    return;
}

for (let generation = 0; generation < 8; generation++) {
    let password = "", outputDeco = "";

    for (let passwordLength = 0; passwordLength < intendedLength; passwordLength++) {
        let char = validLetters.charAt(Math.floor(Math.random() * validLetters.length));
        if (char.match(/[a-z]/i) && Math.random() >= .5) char = char.toUpperCase();
        password += char;
        outputDeco += "-";
    }

    console.log("\x1b[32m" + password + colors.reset + "\n" + outputDeco + "\n");
}