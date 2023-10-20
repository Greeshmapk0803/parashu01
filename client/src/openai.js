// // const {Configuration, OpenAIapi} = require('openai')
// // const configuration = new Configuration({apiKey:"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"})
// // const openai = new OpenAIapi(configuration);

// import OpenAI from 'openai';
// const openai = new OpenAI({
//     apiKey: process.env.REACT_APP_OPENAI_API_KEY,
//     dangerouslyAllowBrowser: true // This is also the default, can be omitted
//   });

//   // New
// // const chatCompletion = await openai.chat.completions.create({
// //     model: "gpt-3.5-turbo",
// //     messages: [{"role": "user", "content": "Hello!"}],
// //   });
// //   console.log(chatCompletion.choices[0].message);

// export async function sendMegToOpenAI(message) {
//     const res = await openai.createCompletion({
//         model: 'text-davinci-003',
//         prompt:message,
//         temperature:0.7,
//         max_tokens: 256,
//         top_p: 1,
//         frequency_penalty: 0,
//         presense_penalty: 0,
//     })
//     return res.data.choices[0].text;
// }
