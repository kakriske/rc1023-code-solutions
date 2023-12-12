function waitTwoSeconds(): Promise<string> {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('Done Waiting!');
    }, 500);
  });
}

async function performWait(): Promise<void> {
  try {
    const message = await waitTwoSeconds();
    console.log(message);
  } catch (error) {
    console.log('Error:', error);
  }
}
performWait();
