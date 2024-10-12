import "dotenv/config";
import OpenAI from "openai";
const openai = new OpenAI();

const response = await openai.chat.completions.create({
  model: "gpt-4o-mini",
  messages: [
    { role: "system", content: "You are a helpful assistant." },
    { role: "user", content: "Tell me a joke about programming." }
  ],
});

console.log(response.choices[0].message);