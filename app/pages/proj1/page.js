async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function Page() {
  await delay(3000); // Simulate a 3-second delay
  return <h1>Welcome to My Portfolio!</h1>;
}
