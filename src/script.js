const validLetters = require("../run/config.json").signs;
const intendedLength = process.argv[2] || 32;

const len = {
    maximum: 237,
    minimum: 6
}

const colors = {
    error: "\x1b[31m",
    reset: "\x1b[0m"
};

if (isNaN(intendedLength)) {
    console.error(
        colors.error +
        "Only Numbers are allowed!" + "\n" +
        "Nur Nummern sind erlaubt!" +
        colors.reset
    );
    return;
}

if (intendedLength > len.maximum) {
    console.error(
        colors.error +
        `Better choose ${len.maximum} signs or less!` + "\n" +
        `Wähle besser ${len.maximum} oder weniger Zeichen!` +
        colors.reset
    );
    return;
}

if (intendedLength < len.minimum) {
    console.error(
        colors.error +
        `Better choose ${len.minimum} signs or more! Less would defeat the purpose of this script: to generate a powerful password.` + "\n" +
        `Wähle besser ${len.minimum} oder mehr Zeichen! Weniger würden den Sinn des Skripts zerstören: Ein starkes Passwort zu generieren.` +
        colors.reset
    );
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