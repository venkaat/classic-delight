async function test() {
  try {
    const res = await fetch("http://localhost:3000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: "Antigravity Test",
        email: "vvvvkt@gmail.com",
        phone: "1234567890",
        message: "Hello this is a local integration test of the contact form."
      })
    });

    console.log("Status:", res.status);
    console.log("Headers:", Object.fromEntries(res.headers.entries()));
    const text = await res.text();
    console.log("Response Body:", text);
  } catch (e) {
    console.error("Test failed:", e);
  }
}

test();
