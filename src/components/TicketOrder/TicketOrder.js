import React, {
  useCallback,
  useState,
  useEffect,
  Fragment,
  useContext,
} from "react";
import "./TicketOrder.scss";
import * as R from "ramda";
import context, { Provider } from "./../context";
import TicketOrderStepOne from "./../TicketOrderStepOne/TicketOrderStepOne";
import Payment from "./../Payment/Payment";
import TicketPicker from "./../TicketPicker/TicketPicker";
import TicketOrderDetail from "./../TicketOrderDetail/TicketOrderDetail";
import CampSitePicker from "./../CampSitePicker/CampSitePicker";
import ModalTool from "./../ModalTool/ModalTool";
import MyTicketList from "../MyTicketList/MyTicketList";
import axios from "axios";

const TicketOrder = () => {
  const [ticketOrderStep, setTicketOrderStep] = useState(0);
  const [wsState, setWsState] = useState();
  const [campSelectedList, setCampSelectedList] = useState([]);
  const [selectedTicketType, setSelectedTicketType] = useState("");
  const [orderStatus, setOrderStatus] = useState(0);
  const [orderPrice, setOrderPrice] = useState(0);
  const [paymentStatus, setPaymentStatus] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const [campSitePickerShow, setCampSitePickerShow] = useState(false);
  const [pickedTicket, setPickedTicket] = useState([]);
  const [toDoSelectCamp, setToDoSelectCamp] = useState([]);
  const contextValue = useContext(context);
  const { isDarkMode, userInfo } = contextValue;

  useEffect(() => {
    let ws = new WebSocket("ws://localhost:3400");
    console.log("ws", ws);
    setWsState(ws);
    ws.onopen = () => {
      console.log("open connection");
    };

    ws.onclose = () => {
      console.log("close connection");
    };

    ws.onmessage = (event) => {
      console.log("event", event);
      console.log("event.data", JSON.parse(event.data));
      setCampSelectedList(JSON.parse(event.data));
    };
  }, []);


  const handleResetTicketOrder = () => {
    setTicketOrderStep(0);
    setPickedTicket([]);
  };


  useEffect(() => {
    let toDoSelectCampTicket = pickedTicket.filter((item)=> {return item.ticketType === "camp"})
    console.log('toDoSelectCampTicket', toDoSelectCampTicket);
    setToDoSelectCamp(toDoSelectCampTicket);
  }, [pickedTicket]);



  const handleOrderTicket = async (e) => {
    console.log("post 取得付款明細");
    let orderTime = new Date().toLocaleString('zh-Tw', { hour12: false});
    console.log('orderTime', orderTime);
    let mName = "琴酒";
    let totalTickets = [
      { ticketType: "單日票", campId: null, singleTicketDay:1 },
      { ticketType: "雙日票(含露營)", campId: "B03", singleTicketDay:null }
    ];
    let result;
    await axios({
      method: "post",
      url: `http://localhost:3400/create_ticket_order`,
      data: { mNo: "000001", totalTickets: totalTickets, mName: mName, orderTime:orderTime },
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then(function (response) {
        console.log("create_ticket_order_response", response);
        result = response.data;

      })
      .catch((error) => {
        console.log("create_ticket_order_error", error);
        result = error;
      });
    return result;
  };

  const handleRenderTicketOderStep = () => {
    if (ticketOrderStep === 0 || ticketOrderStep === 1) {
      return (
        <TicketPicker
        ticketOrderStep={ticketOrderStep}
          setTicketOrderStep={setTicketOrderStep}
          paymentMethod={paymentMethod}
          setPaymentMethod={setPaymentMethod}
          setCampSitePickerShow={setCampSitePickerShow}
          pickedTicket={pickedTicket}
          setPickedTicket={setPickedTicket}
          handleResetTicketOrder={handleResetTicketOrder}
          campSelectedList={campSelectedList}
          toDoSelectCamp={toDoSelectCamp}
          setCampSelectedList={setCampSelectedList}
          
        />
      );
    } else if (ticketOrderStep === 2) {
      return (
        <Payment
          paymentMethod={paymentMethod}
          setTicketOrderStep={setTicketOrderStep}
          handleOrderTicket={handleOrderTicket}
          pickedTicket={pickedTicket}
          orderPrice={orderPrice}
          setOrderPrice={setOrderPrice}
          handleResetTicketOrder={handleResetTicketOrder}
        />
      );
    } else if (ticketOrderStep === 3) {
      return (
        <TicketOrderDetail
          selectedTicketType={selectedTicketType}
          setTicketOrderStep={setTicketOrderStep}
        />
      );
    } else {
    }
  };

  const handleRenderCampSitePicker = () => {
    return (
      <ModalTool
        modalShow={campSitePickerShow}
        modalCloseFunction={() => setCampSitePickerShow(false)}
        modalWidth={1200}
        modalHeight={700}
        backgroundOpacity={0.6}
        modalInnerBackground={`#fff`}
      >
        <CampSitePicker
          closeModal={() => setCampSitePickerShow(false)}
          pickedTicket={pickedTicket}
          campSelectedList={campSelectedList}
          setCampSelectedList={setCampSelectedList}
          wsState={wsState}
          toDoSelectCamp={toDoSelectCamp}
        />
      </ModalTool>
    );
  };

  return (
    <div
      className={`ticket_order_container ${
        isDarkMode ? "ticket_order_container_dark" : ""
      }`}
    >
      <div
        className={`ticket_order_title  ${
          isDarkMode ? "ticket_order_title_dark" : ""
        }`}
      ></div>
      {/* <button onClick={handleOrderTicket}>模擬下訂單</button> */}
      {handleRenderTicketOderStep()}
      {campSitePickerShow ? handleRenderCampSitePicker() : null}
    </div>
  );
};
export default TicketOrder;
