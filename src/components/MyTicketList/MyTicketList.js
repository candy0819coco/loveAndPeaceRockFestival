import React, { useCallback, useState, useEffect, Fragment, useContext } from "react";
import "./MyTicketList.scss";
import * as R from "ramda";
import context, { Provider } from "../context";
import axios from "axios";

const MyTicketList = () => {
    const contextValue = useContext(context);
    const { } = contextValue;
    const [myTicketOrderList, setMyTicketOrderList] = useState([]);
    const [currentHoverTicketType, setCurrentHoverTicketType] = useState("");

    const handleGetTicket = async (e) => {
        console.log('取得票券訂單');
          let result;
          await axios({
            method: "get",
            url: `http://localhost:3400/ticket_order`,
            credentials: 'same-origin',
            headers: {
              "Content-Type": "application/json;charset=UTF-8",
              "Access-Control-Allow-Origin": "*",
            },
          })
            .then(function (response) {
              console.log("ticket_order_response", response);
              result = response.data;
              setMyTicketOrderList(result)

            })
            .catch((error) => {
              console.log('ticket_order_error', error)
              result = error
            });
            return result;
      };
    const handleGetTicketByPost = async (e) => {
        console.log('post 取得票券訂單');
          let result;
          await axios({
            method: "post",
            url: `http://localhost:3400/payment`,
            data: { mNo:"000008", randos: "123" },
            credentials: 'same-origin',
            headers: {
              "Content-Type": "application/json;charset=UTF-8",
              "Access-Control-Allow-Origin": "*",
            },
          })
            .then(function (response) {
              console.log("ticket_order_response", response);
              result = response.data;
              setMyTicketOrderList(result)
            })
            .catch((error) => {
              console.log('ticket_order_error', error)
              result = error
            });
            return result;
      };

    return (
        <div className={`my_ticket_list_container`}>
            <Provider value={contextValue}>
                <div className="____">
                    <button onClick={handleGetTicket}> 取得訂單紀錄get </button>
                    <button onClick={handleGetTicketByPost}> 取得訂單紀錄post </button>
                    {myTicketOrderList.map((item, key)=>{
                        return (
                            <div className="each_ticket_order" key={key}>
                                <div className="order_name">{item.mName}</div>
                                <div className="order_phone">{item.mPhone}</div>
                                
                            </div>
                        )
                    })}
                </div>
            </Provider>
        </div>
    );
};
export default MyTicketList;
