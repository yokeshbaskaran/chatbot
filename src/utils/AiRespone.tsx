import OpenAI from "openai";

const groq = new OpenAI({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
  dangerouslyAllowBrowser: true,
});

export type AIMsgType = {
  role: "user" | "assistant";
  content: string;
};

export const generateAIResponse = async (
  messages: AIMsgType[],
): Promise<string> => {
  // GROQ FALLBACK
  try {
    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",

      messages,
    });

    //Response from AI.
    const result =
      completion.choices[0]?.message?.content || "No response generated.";
    return result;
  } catch (error) {
    console.log("Groq failed:", error);
  }

  throw new Error("All AI providers failed.");
};
