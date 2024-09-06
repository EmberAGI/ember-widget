import z from "zod";
import { IEmberRequest, IEmberResponse } from "../models/ember.model";

const url = "https://api.emberai.xyz/v1/";

const ChatEmberRespons = z.object({
  status: z.union([
    z.literal("done"),
    z.literal("processing"),
    z.literal("error"),
  ]),
  message: z.string(),
  sign_tx_url: z.string().nullable(),
});

export const fetchEmberResponse = async (
  request: IEmberRequest
): Promise<IEmberResponse | ErrorConstructor | string> => {
  console.log(`\n\n---\n\nrequest:`);
  console.log(request);
  const response = await fetch(url + `chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${request.secret as string}`,
    },
    body: JSON.stringify({
      user_id: request.fid,
      message: request.inputText,
      username: request.username,
    }),
  });

  console.log(`\n\n---\n\nresponse:`);
  console.log(response);
  console.log("response.body");
  console.log(response.body);

  if (!response.ok || response.body == null) {
    throw new Error("Failed to connect to Ember server");
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  while (true) {
    const { done, value } = await reader.read();
    const { event, rawData } = parseSseResponse(decoder.decode(value));
    if (done && event !== "done") {
      throw new Error("Invalid response");
    }

    if (rawData == null) {
      continue;
    }

    const data = await ChatEmberRespons.safeParseAsync(JSON.parse(rawData));
    if (!data.success) {
      throw new Error("Invalid response");
    }
    const response = data.data as IEmberResponse;

    switch (event) {
      case "done":
        return response;
      case "activity":
        continue;
      case "error":
        return `Error: ${response.message}`;
      default:
        throw new Error("Invalid response");
    }
  }
};

function parseSseResponse(value: string) {
  const lines = value.split("\n");
  let event = undefined;
  let rawData = undefined;

  for (const line of lines) {
    if (line.startsWith("event: ")) {
      event = line.substring("event: ".length).trim();
    } else if (line.startsWith("data: ")) {
      rawData = line.substring("data: ".length);
    }
  }

  return { event, rawData };
}
