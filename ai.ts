import { google } from "@ai-sdk/google";
import { generateText } from 'ai';
import type { Mode } from ".";

const promptMessage = {
  long: 'answer in detail and comprehensively',
  short: 'answer briefly and concisely',
}

export const getAiAnswer = async (text: string, mode: Mode) => {
  const { text: answer } = await generateText({
    model: google('gemini-2.0-flash'),
    prompt: text + ' ' + promptMessage[mode],
  });

  return answer;
}

console.log(getAiAnswer("Hello, how are you?", 'long'));