const GEMINI_API_KEY = "AIzaSyAlpRnqsEicZhfIt0noO0UjCyi5-fba0Wk";

async function gemini(prompt) {
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }]
      })
    }
  );

  const data = await res.json();
  return data.candidates[0].content.parts[0].text;
}
