import "react-chat-elements/dist/main.css";
import "./EmberChat.css";
import { MessageList, MessageType } from "react-chat-elements";
import { Input } from "react-chat-elements";
import { Button } from "react-chat-elements";
import { useEffect, useMemo, useRef, useState } from "react";
import { IEmberConfig, IEmberResponse } from "../models/ember.model";
import { fetchEmberResponse } from "../hooks/useEmber";
import Markdown from "react-markdown";
import EmberSvg from "../assets/EmberIcon.svg";
import { v4 as uuid } from "uuid";

export const EmberChat = ({ config }: { config: IEmberConfig }) => {
  //check if emberId exists in local storage
  let id = localStorage.getItem("emberId");
  //if it does not, create it
  if (!id) {
    id = uuid();
    localStorage.setItem("emberId", id);
  }

  const defaultMessage = {
    position: "left",
    type: "text",
    title: "Ember",
    text: "Hi, I am Ember. I can help you with your crypto transactions. Click on the buttons below to perform an action or type a message in the text box below!",
  } as MessageType;

  const welcomeBackMessage = {
    position: "left",
    type: "text",
    title: "Ember",
    text: "Welcome back! I am Ember. I can help you with your crypto transactions. Click on the buttons below to perform an action or type a message in the text box below!",
  } as MessageType;

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [emberStatus, setEmberStatus] = useState<string>(
    "Ember is ready to help"
  );

  const [textMessages, setTextMessages] = useState<MessageType[]>(
    localStorage.getItem("emberMessages")
      ? [
          ...JSON.parse(localStorage.getItem("emberMessages") as string),
          welcomeBackMessage,
        ]
      : [defaultMessage]
  );

  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);

  let eventEmitter = useMemo(() => new EventTarget(), []);

  useEffect(() => {
    if (
      textMessages[textMessages.length - 1]?.position === "right" &&
      inputText
    ) {
      handleFetch(inputText);
      clearInput();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [textMessages]);

  useEffect(() => {
    const markdownMessages = textMessages.map((msg) => {
      return {
        ...msg,
        text: <Markdown>{msg.text}</Markdown>,
      };
    });

    setMessages([...(markdownMessages as unknown as MessageType[])]);
    localStorage.setItem("emberMessages", JSON.stringify(textMessages));
  }, [textMessages]);

  useEffect(() => {
    const handleActivity = (response: unknown) => {
      console.log("activity", response);
      if (response instanceof CustomEvent) {
        const { message } = response.detail as IEmberResponse;
        setEmberStatus(message);
      }
    };

    eventEmitter.addEventListener("activity", handleActivity);
    return () => {
      eventEmitter.removeEventListener("activity", handleActivity);
    };
  }, [eventEmitter]);

  useEffect(() => {
    if (loading && inputRef?.current && inputRef.current.disabled === false) {
      inputRef.current.disabled = true;
      setEmberStatus("🔥");
    }

    if (!loading && inputRef?.current && inputRef.current.disabled === true) {
      inputRef.current.disabled = false;
      inputRef.current.focus();
    }
  }, [loading]);

  const handleFetch = async (reqMsg: string) => {
    try {
      const response: IEmberResponse | string | ErrorConstructor =
        await fetchEmberResponse(
          {
            inputText: reqMsg,
            secret: config.secret,
            fid: id,
            username: id,
          },
          eventEmitter
        );
      if (response instanceof Error) {
        setLoading(false);
        throw response;
      }
      if (typeof response === "string") {
        setLoading(false);
        throw new Error(response);
      }
      if ("message" in response) {
        setTextMessages([
          ...textMessages,
          {
            position: "left",
            type: "text",
            title: "Ember",
            text: response.message,
          } as unknown as MessageType,
        ]);
        localStorage.setItem("emberMessages", JSON.stringify(textMessages));
        setLoading(false);
      } else {
        setLoading(false);
        throw new Error("Invalid response");
      }
    } catch (e) {
      console.log((e as Error).message);
    } finally {
      setLoading(false);
      localStorage.setItem("emberMessages", JSON.stringify(textMessages));
      eventEmitter = new EventTarget();
      setTimeout(() => setEmberStatus("Ember is ready to help"), 1000);
    }
  };

  const clearInput = () => {
    if (inputRef?.current) {
      inputRef.current.value = "";
      setInputText("");
    }
  };

  const handleSend = async () => {
    setLoading(true);
    setMessages([
      ...messages,

      {
        position: "right",
        type: "text",
        title: "You",
        text: inputText,
      } as MessageType,
    ]);

    setTextMessages([
      ...textMessages,
      {
        position: "right",
        type: "text",
        title: "You",
        text: inputText,
      } as MessageType,
    ]);
  };

  const inputRef = useRef<HTMLTextAreaElement | null>();

  if (!isOpen) {
    return (
      <button onClick={() => setIsOpen(true)} className="toggleButton p-2">
        <img src={EmberSvg} alt="Ember" className="w-10 h-10 ember-icon " />
      </button>
    );
  } else {
    return (
      <div className="emberChat">
        <div className="emberChat__header flex justify-between w-full">
          <h6 className="flex gap-2">
            <img
              src={EmberSvg}
              alt="Ember"
              className="w-6 h-6 ember-icon bg-orange-500 p-1 rounded-full"
            />
            <span className="font-bold">Ember</span>
          </h6>
          <button
            onClick={() => setIsOpen(false)}
            type="button"
            className="bg-transparent text-orange-500 border border-orange-500 hover:bg-yellow-300 hover:text-white focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-orange-500 dark:text-orange-500 dark:hover:text-white dark:focus:ring-yellow-300 dark:hover:bg-orange-500"
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
        <div className="status_box text-xs text-slate-500">{emberStatus}</div>
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
