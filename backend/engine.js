// const { GoogleGenerativeAI } = require("@google/generative-ai");

// // Access your API key as an environment variable (see "Set up your API key" above)
// const genAI = new GoogleGenerativeAI("");

// async function run() {
//   // For text-only input, use the gemini-pro model
//   const model = genAI.getGenerativeModel({ model: "gemini-pro" });

//   const chat = model.startChat({
//     history: [
//       {
//         role: "user",
//         parts: "Hello, I have 2 dogs in my house.",
//       },
//       {
//         role: "model",
//         parts: "Great to meet you. What would you like to know?",
//       },
//     ],
//     generationConfig: {
//       maxOutputTokens: 100,
//     },
//   });

//   const msg = "How many paws are in my house?";

//   const result = await chat.sendMessage(msg);
//   const response = await result.response;
//   const text = response.text();
//   console.log(text);
// }

// run();

import OpenAI from "openai";
// const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.API_KEY,
});
async function main(messagearray) {
  const completion = await openai.chat.completions.create({
    messages: [
      // { role: "system", content: "You are a helpful assistant." },
      // { role: "user", content: "Who won the world series in 2020?" },
      // {
      // role: "assistant",
      // content: "The Los Angeles Dodgers won the World Series in 2020.",
      // },
      // { role: "user", content: "Where was it played?" },
      // {
      // role: "assistant",
      // content:
      // "The World Series in 2020 was played at Globe Life Field in Arlington, Texas.", //ye previous prompt hai ye mene copy paste karke terminal se uthake dala
      // },
      // {
      // role: "user",
      // content: "Who was the MVP?", //ye apna prompt
      // },
      ...messagearray,
    ],
    model: "gpt-3.5-turbo",
  });

  // console.log(completion.choices[0]);
  return completion.choices[0];
}
// main();
// export default main;
// module.exports = main;
