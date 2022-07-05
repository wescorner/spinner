const symbols = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];
let delay = 0;
for (let i = 0; i < symbols.length; i++) {
	setTimeout(() => {
		process.stdout.write(symbols[i] + "\r");
	}, delay);
	delay += 200;
}
