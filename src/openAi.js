import OpenAI from 'openai';


const openai = new OpenAI({
  apiKey: "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", // This is also the default, can be omitted,
  dangerouslyAllowBrowser: true
});

export async function sendMessage(message){ 

    const completion = await openai.completions.create({
        model: "gpt-3.5-turbo-instruct",
        prompt: message,
        max_tokens: 30,
      });
      

      return completion.choices[0].text;
} 

