import "react-chat-elements/dist/main.css";
import "./EmberChat.css";
import { MessageList, MessageType } from "react-chat-elements";
import { Input } from "react-chat-elements";
import { Button } from "react-chat-elements";
import { useEffect, useRef, useState } from "react";
import { IEmberConfig, IEmberResponse } from "../models/ember.model";
import { fetchEmberResponse } from "../hooks/useEmber";
import Markdown from "react-markdown";
import EmberSvg from "../assets/EmberIcon.svg";

export const EmberChat = ({ config }: { config: IEmberConfig }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<MessageType[]>([
    {
      position: "left",
      type: "text",
      title: "Ember",
      text: "Hi, I am Ember. I can help you with your crypto transactions. Click on the buttons below to perform an action or type a message in the text box below!",
    } as MessageType,
  ]);

  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [signTxUrl, setSignTxUrl] = useState<string | null>(null);

  const handleFetch = async (reqMsg: string) => {
    try {
      const response: IEmberResponse | string | ErrorConstructor =
        await fetchEmberResponse({
          inputText: reqMsg,
          secret: config.secret,
        });
      if (response instanceof Error) {
        throw response;
      }
      if (typeof response === "string") {
        throw new Error(response);
      }
      if ("message" in response) {
        setMessages([
          ...messages,
          {
            position: "left",
            type: "text",
            title: "Ember",
            text: <Markdown>{response.message}</Markdown>,
          } as unknown as MessageType,
        ]);
      } else {
        throw new Error("Invalid response");
      }
      setSignTxUrl(response.sign_tx_url);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (messages[messages.length - 1].position === "right") {
      handleFetch(inputText);
      clearInput();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages]);

  const clearInput = () => {
    if (inputRef?.current) {
      inputRef.current.value = "";
      setInputText("");
    }
  };

  const handleSend = async () => {
    setLoading(true);
    setError(null);
    setSignTxUrl(null);

    setMessages([
      ...messages,

      {
        position: "right",
        type: "text",
        title: "You",
        text: inputText,
      } as MessageType,
    ]);
  };

  console.log(loading, error, signTxUrl);
  const inputRef = useRef<HTMLTextAreaElement | null>();

  if (!isOpen) {
    return (
      <button onClick={() => setIsOpen(true)} className="toggleButton p-2">
        <img src={EmberSvg} alt="Ember" className="w-10 h-10 ember-icon" />
      </button>
    );
  } else {
    return (
      <div className="emberChat">
        <div className="emberChat__header flex justify-between w-full">
          <h6>
            Ember Chat <span>🔥</span>
          </h6>
          <button
            onClick={() => setIsOpen(false)}
            type="button"
            className="bg-transparent text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
          >
            <svg fill="none" viewBox="0 0 24 24" height="1em" width="1em">
              <path
                fill="currentColor"
                d="M6.225 4.811a1 1 0 00-1.414 1.414L10.586 12 4.81 17.775a1 1 0 101.414 1.414L12 13.414l5.775 5.775a1 1 0 001.414-1.414L13.414 12l5.775-5.775a1 1 0 00-1.414-1.414L12 10.586 6.225 4.81z"
              />
            </svg>
            <span className="sr-only">Icon description</span>
          </button>
        </div>
        <MessageList
          referance={(el: { scrollTop: unknown; scrollHeight: unknown }) => {
            if (el) {
              el.scrollTop = el.scrollHeight;
            }
          }}
          className="message-list max-w-lg max-h-64"
          lockable={true}
          toBottomHeight={"100%"}
          dataSource={messages}
        ></MessageList>

        <div className="emberChat__input">
          <Input
            referance={inputRef}
            onChange={(e: { target: { value: string } }) =>
              setInputText(e.target.value)
            }
            className="flex-grow"
            placeholder="Type here..."
            multiline={true}
            maxHeight={200}
            value={inputText}
            rightButtons={[
              <Button text={"Send"} onClick={handleSend} title="Send" />,
            ]}
            onKeyUp={(e: { key: string }) => {
              if (e.key === "Enter") {
                handleSend();
              }
            }}
          />
        </div>
      </div>
    );
  }
};

export default EmberChat;
