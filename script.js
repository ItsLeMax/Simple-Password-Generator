const validLetters = "abcdefghijklmnopqrstuvwxyz1234567890+#,.-<>;:_'*^";
const intendedLength = process.argv[2] || 32;

const length = {
    maximum: 150,
    minimum: 9
}

const colors = {
    error: "\x1b[31m",
    reset: "\x1b[0m"
};

const reasoning = {
    de_DE: "würden den Sinn des Skripts zerstören: Ein starkes Passwort zu generieren.",
    en_US: "would defeat the purpose of this script: to generate a powerful password."
}

if (isNaN(intendedLength)) {
    console.error(colors.error + "Only Numbers are allowed!", "Nur Nummern sind erlaubt!" + colors.reset);
    return;
}

if (intendedLength > length.maximum) {
    console.error(
        colors.error + `Better choose ${length.maximum} signs or less! More ${reasoning.en_US}`,
        `Wähle besser ${length.maximum} oder weniger Zeichen! Weitere ${reasoning.de_DE}` + colors.reset
    );
    return;
}

if (intendedLength < length.minimum) {
    console.error(
        colors.error + `Better choose ${length.minimum} signs or more! Less ${reasoning.en_US}`,
        `Wähle besser ${length.minimum} oder mehr Zeichen! Weniger ${reasoning.de_DE}` + colors.reset
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