export async function generateRecipe(prompt, retryCount = 0) {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
  const maxRetries = 3;
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));
  console.log("API key:", apiKey); 
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: "You are a helpful recipe assistant." },
          { role: "user", content: `Generate a recipe for: ${prompt}` },
        ],
      }),
    });

    if (response.status === 429) {
      if (retryCount < maxRetries) {
        const waitTime = 2000 * Math.pow(2, retryCount); // 2s, 4s, 8s
        console.warn(`Rate limit hit. Retrying in ${waitTime / 1000}s...`);
        await delay(waitTime);
        return generateRecipe(prompt, retryCount + 1);
      }
      throw new Error("Too many requests. Please try again later.");
    }

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`OpenAI Error: ${response.status} ${text}`);
    }

    const data = await response.json();
    return data.choices?.[0]?.message?.content || "No recipe found.";
  } catch (error) {
    console.error("Error generating recipe:", error);
    throw error;
  }
}
