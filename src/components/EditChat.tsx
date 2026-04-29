// import OpenAI from "openai";

// const groq = new OpenAI({
//   apiKey: import.meta.env.VITE_GROQ_API_KEY,
//   baseURL: "https://api.groq.com/openai/v1",
//   dangerouslyAllowBrowser: true,
// });

// export const generateAIResponse = async (message: string): Promise<string> => {
//   // GROQ FALLBACK
//   try {
//     const completion = await groq.chat.completions.create({
//       model: "llama-3.3-70b-versatile",
//       messages: [
//         {
//           role: "user",
//           content: message,
//         },
//       ],
//     });

//     return completion.choices[0]?.message?.content || "No response generated.";
//   } catch (error) {
//     console.log("Groq failed:", error);
//   }

//   throw new Error("All AI providers failed.");
// };

// import { useState } from "react";
// // import { generateAIResponse } from "./services/ai";

// const App = () => {
//   const [input, setInput] = useState("");
//   const [response, setResponse] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async () => {
//     if (!input.trim()) return;

//     try {
//       setLoading(true);

//       const result = await generateAIResponse(input);

//       setResponse(result);
//     } catch (error) {
//       setResponse("Something went wrong.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div
//       style={{
//         padding: "2rem",
//         maxWidth: "700px",
//         margin: "auto",
//       }}
//     >
//       <h1>AI Chat</h1>

//       <textarea
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         rows={5}
//         style={{
//           width: "100%",
//           padding: "1rem",
//         }}
//       />

//       <button
//         onClick={handleSubmit}
//         disabled={loading}
//         style={{
//           marginTop: "1rem",
//           padding: "0.7rem 1.5rem",
//         }}
//       >
//         {loading ? "Generating..." : "Send"}
//       </button>

//       <div
//         style={{
//           marginTop: "2rem",
//           whiteSpace: "pre-wrap",
//         }}
//       >
//         {response}
//       </div>
//     </div>
//   );
// };

// export default App;
