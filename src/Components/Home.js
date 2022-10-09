import React, { useEffect, useRef, useState } from "react";
import "./Main.css";
import { BiSearchAlt } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { RiSendPlaneFill } from "react-icons/ri";
import { Alert, Avatar, Button, Checkbox, Snackbar } from "@mui/material";
import { deleteMsg, msgList, postMsg } from "../store/actions/home";
import { useDispatch, useSelector } from "react-redux";
import { MSG_LIST_SUCCESS, POST_MSG_SUCCESS } from "../store/types/home";
import Messages from "./Messages";

export function Contact({ num, time, type, selected }) {
  return (
    <div
      className={selected ? "main__recents-selectedHead" : "main__recents-head"}
    >
      <div className="main__recents-icon">
        <Avatar
          style={{ height: 30, width: 30 }}
          alt="Jai Chaudhary"
          src="https://avatars.githubusercontent.com/u/59798109?v=4"
        />
      </div>
      <div className="main__recents-text">
        <div className="main__recents-top">
          <p className="main__recents-num">{num}</p>
          <p className="main__recents-time">{time}</p>
        </div>
        <div className="main__recents-down">Latest message...</div>
      </div>
    </div>
  );
}

function Home() {
  const [tab, setTab] = useState("Read");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [selectedforDel, setSelectedForDel] = useState([]);
  const dispatch = useDispatch();
  const { messages } = useSelector((state) => state.homeReducer);

  // console.log("message =", messages);

  const fetchMsgList = async () => {
    const res = await msgList();
    dispatch({ type: MSG_LIST_SUCCESS, body: res });
  };

  useEffect(() => {
    fetchMsgList();
  }, []);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const postMessage = async (msg) => {
    await postMsg(msg);
    fetchMsgList();
  };

  const delMsg = async (val) => {
    for (let i = 0; i < val.length; i++) {
      await deleteMsg(val[i]);
    }
    handleClick();
    fetchMsgList();
  };

  const sendMsg = () => {
    postMessage(text);
    setText("");
  };

  const onKeyDownHandler = (e) => {
    if (e.keyCode === 13) {
      sendMsg();
    }
  };

  return (
    <div className="main">
      <div className="main__left">
        <div className="main__left-parent">
          <div className="main__left-head">
            <div className="main__left-typebox">
              <div
                onClick={() => {
                  setTab("Read");
                }}
                className={
                  tab === "Read"
                    ? "main__left-selectedCT"
                    : "main__left-callertype"
                }
              >
                <p
                  className={
                    tab === "Read"
                      ? "callertype__text-selected"
                      : "callertype__text"
                  }
                >
                  Read
                </p>
              </div>
              <div
                onClick={() => {
                  setTab("Unread");
                }}
                className={
                  tab === "Unread"
                    ? "main__left-selectedCT"
                    : "main__left-callertype"
                }
              >
                <p
                  className={
                    tab === "Unread"
                      ? "callertype__text-selected"
                      : "callertype__text"
                  }
                >
                  Unread
                </p>
              </div>
            </div>
            <div className="main__left-search">
              <BiSearchAlt color={"grey"} />
            </div>
          </div>
          <div className="main__left-recents">
            <Contact num={"+91 7503312477"} time={"10 min"} type={"Missed"} />
            <Contact
              selected={true}
              num={"+91 7503312477"}
              time={"Sat, Oct 1"}
              type={"Outgoing"}
            />
            <Contact
              num={"+91 7503312477"}
              time={"Fri, Sep 30"}
              type={"Incoming"}
            />
            <Contact
              num={"+91 7503312477"}
              time={"Fri, Sep 30"}
              type={"Incoming"}
            />
            <Contact
              num={"+91 7503312477"}
              time={"Fri, Sep 30"}
              type={"Incoming"}
            />
            <Contact
              num={"+91 7503312477"}
              time={"Fri, Sep 30"}
              type={"Incoming"}
            />
            <Contact
              num={"+91 7503312477"}
              time={"Fri, Sep 30"}
              type={"Incoming"}
            />
            <Contact
              num={"+91 7503312477"}
              time={"Fri, Sep 30"}
              type={"Incoming"}
            />
            <Contact
              num={"+91 7503312477"}
              time={"Fri, Sep 30"}
              type={"Incoming"}
            />
            <Contact
              num={"+91 7503312477"}
              time={"Fri, Sep 30"}
              type={"Incoming"}
            />
            <Contact
              num={"+91 7503312477"}
              time={"Fri, Sep 30"}
              type={"Incoming"}
            />
            <Contact
              num={"+91 7503312477"}
              time={"Fri, Sep 30"}
              type={"Incoming"}
            />
          </div>
        </div>
      </div>
      <div className="main__right">
        <div className="main__right-head">
          <p className="main__right-heading">Chat</p>
          <div className="main__right-arrow">
            <IoIosArrowBack color={"var(--first-color)"} />
            <IoIosArrowForward color={"var(--first-color)"} />
          </div>
          <div className="main__right-user">
            <p className="main__right-name">Welcome! Jai</p>
            <Avatar
              style={{ height: 30, width: 30 }}
              alt="Jai Chaudhary"
              src="https://avatars.githubusercontent.com/u/59798109?v=4"
            />
            {isSelected && selectedforDel.length > 0 ? (
              <Button
                onClick={() => {
                  delMsg(selectedforDel);
                  setSelectedForDel([]);
                  setIsSelected(!isSelected);
                }}
                sx={{ fontSize: 9 }}
                variant="contained"
                color="error"
              >
                Delete
              </Button>
            ) : (
              <Button
                onClick={() => {
                  setIsSelected(!isSelected);
                }}
                sx={{ fontSize: 9 }}
                variant="contained"
              >
                Select Multiple
              </Button>
            )}
          </div>
        </div>
        <div className="mr__homeDetails">
          <Messages
            messages={messages}
            isSelected={isSelected}
            del={(val) => {
              delMsg(val);
            }}
            setSelectedForDel={(val) => {
              setSelectedForDel([...selectedforDel, val]);
            }}
            delSelectedForDel={(id) => {
              let arr = selectedforDel.filter((val) => val !== id);
              setSelectedForDel(arr);
            }}
          />
          <div className="mr__details-inputParent">
            <input
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              placeholder="Type here.."
              className="mr__details-input"
              onKeyDown={onKeyDownHandler}
            />
            <div onClick={sendMsg} className="mr__details-sent">
              <RiSendPlaneFill color={"white"} />
            </div>
          </div>
        </div>
      </div>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Message deleted successfully.
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Home;
