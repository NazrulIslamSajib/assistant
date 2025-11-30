import { google } from "@ai-sdk/google";
import { convertToModelMessages, streamText } from "ai";

export const maxDuration = 30;

/*************  ✨ Windsurf Command ⭐  *************/
/**
 * Handle incoming HTTP POST request with a JSON body containing an array of messages to be sent to the AI.
 * The messages are expected to be in the format of AI SDK's Message type.
 * The function will return a UIMessageStreamResponse containing the response from the AI.
 * @param {Request} req - The incoming HTTP request object.
 * @returns {Promise<UIMessageStreamResponse>} - A promise that resolves to a UIMessageStreamResponse containing the response from the AI.
 */
/*******  85e7e899-77df-42e3-aede-956f3ce6499f  *******/export async function POST(req: Request) {
  const { messages } = await req.json();
  const result = streamText({
    model: google("gemini-2.0-flash"),
    messages: convertToModelMessages(messages),
  });
  return result.toUIMessageStreamResponse();
}
