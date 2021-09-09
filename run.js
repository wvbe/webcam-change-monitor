import { VideoCapture } from 'camera-capture';
import asciichart from 'asciichart';
import cliCursor from 'cli-cursor';

if (!process.stdout.isTTY) {
	throw new Error('Only TTY is supported');
}
cliCursor.hide();

let lastPicture = null;
const changesOverTime = [];
const windowWidth = process.stdout.columns;
const windowHeight = process.stdout.rows;

const capture = new VideoCapture();
capture.addFrameListener((frame) => {
	if (lastPicture) {
		const totalDiff = frame.data.reduce(
			(total, value, index) => total + Math.abs(value - lastPicture[index]),
			0
		);
		const relativeDiff = totalDiff / (frame.data.length * 255);
		changesOverTime.push(relativeDiff * 100);
		if (changesOverTime.length >= windowWidth - 12) {
			changesOverTime.shift();
		}
		console.clear();
		process.stdout.write(asciichart.plot(changesOverTime, { height: windowHeight - 1 }));
	}
	lastPicture = frame.data;
});

await capture.start();
