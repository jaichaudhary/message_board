import { Avatar, Checkbox } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { MdDeleteOutline } from "react-icons/md";

function Messages({
  messages,
  del,
  isSelected,
  setSelectedForDel,
  delSelectedForDel,
}) {
  const messagesEndRef = useRef();
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "auto" });
  };
  useEffect(scrollToBottom, [messages]);

  const pad = (num) => ("0" + num).slice(-2);

  const getTimeFromDate = (timestamp) => {
    const date = new Date(timestamp);
    let hours = date.getHours(),
      minutes = date.getMinutes();
    return pad(hours) + ":" + pad(minutes);
  };
  return (
    <div className="mr__details-msg">
      {messages.length > 0 &&
        messages.map((val, index) => {
          return (
            <div className="mr__text-msg" key={val.id}>
              <div className="mr__text-delete">
                {isSelected && (
                  <div>
                    <Checkbox
                      // checked={checked}
                      onChange={(e) => {
                        console.log("e.target.checked", e.target.checked);
                        if (e.target.checked) {
                          setSelectedForDel(val.id);
                        } else {
                          delSelectedForDel(val.id);
                        }
                      }}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                  </div>
                )}

                <div className="mr__text-avatar">
                  <Avatar
                    style={{ height: 30, width: 30 }}
                    alt="Jai Chaudhary"
                    src="https://avatars.githubusercontent.com/u/59798109?v=4"
                  />
                  <p className="mr__text-date">
                    {getTimeFromDate(val.timestamp)}
                  </p>
                </div>
              </div>
              <p className="text__msg">{val.text}</p>
              {!isSelected && (
                <div
                  onClick={() => {
                    del([val.id]);
                  }}
                  className="mr__text-delete"
                >
                  <MdDeleteOutline size={24} color="red" />
                </div>
              )}
            </div>
          );
        })}
      <div ref={messagesEndRef} />
    </div>
  );
}

export default Messages;
