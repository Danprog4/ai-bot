import { google } from "@ai-sdk/google";
import { generateText } from 'ai';

export const getAiAnswer = async (text: string) => {
  const { text: answer } = await generateText({
    model: google('gemini-2.0-flash'),
    prompt: text,
  });

  return answer;
}

console.log(getAiAnswer("Hello, how are you?"));