let port;
let writer;
const textEncoder = new TextEncoder();

async function getCommand() {

  try {
    const result = transcript.toLowerCase();
    const resultSplit = result.split(" ")
    const resultCommand = resultSplit.slice(-1);
    if (resultCommand.includes("right") || resultCommand.includes("يمين") || resultCommand.includes("Right")) {
      await writer.write(textEncoder.encode('right'));
    }

    if (resultCommand.includes("left") || resultCommand.includes("يسار") || resultCommand.includes("Left")) {
      await writer.write(textEncoder.encode('left'));
    }

  } catch (e) {
    console.log(e);
    }

}


async function onConnectUsb() {
   try {
     if (navigator.serial) {
    port = await navigator.serial.requestPort();
    await port.open({ baudRate: 115200  });
    const writableStreamClosed = textEncoder.readable.pipeTo(port.writable);
    writer = textEncoder.writable.getWriter();

    } else {
      alert('Web Serial API not supported.');
    }

  } catch (e) {
    console.log("error", e);
    }

}
