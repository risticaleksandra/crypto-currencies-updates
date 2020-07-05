import React, { useState, useEffect } from "react";
import DefaultPage from "./layout/public/components/DefaultPage";

const symbols = ["tBTCUSD", "tBTCEUR", "tETHUSD", "tETHEUR", "tEOSUSD"];
const wss = new WebSocket("wss://api-pub.bitfinex.com/ws/2");

function App() {
  const [channels, setChannels] = useState({});
  const [BTCUSD, setBTCUSD] = useState({});
  const [BTCEUR, setBTCEUR] = useState({});
  const [ETHUSD, setETHUSD] = useState({});
  const [ETHEUR, setETHEUR] = useState({});
  const [EOSUSD, setEOSUSD] = useState({});

  //subscribing to channels
  useEffect(() => {
    wss.onopen = () => {
      symbols.forEach((symbol) => {
        let msg = JSON.stringify({
          event: "subscribe",
          channel: "ticker",
          symbol,
        });
        wss.send(msg);
      });
    };
  }, []);

  //unsubscribing from channels
  useEffect((channels) => {
    return () => {
      Object.keys(channels).forEach((chanId) => {
        let msg = JSON.stringify({
          event: "unsubscribe",
          chanId,
        });
        wss.send(msg);
      });
    };
  }, []);

  //handling subsribed messages
  wss.onmessage = (msg) => {
      const data = JSON.parse(msg.data);
      if (typeof data === "object" && data.event === "subscribed") {
        const copiedChannels = { ...channels };
        copiedChannels[data.chanId] = data.pair;
        setChannels(copiedChannels);
      } else if (
        Array.isArray(data) &&
        data.length === 2 &&
        Array.isArray(data[1])
      ) {
        const [channelID, values] = data;
        const indexArr = [5, 6, 7];
        const [dailyChange, lastPrice, volume] = indexArr.map((i) => values[i]);
        const ticker = {
          dailyChange:(dailyChange*100).toFixed(1) + '%',
          lastPrice:lastPrice.toFixed(1),
          volume:volume.toFixed(),
          symbol: channels[channelID],
        };
  
        switch (channels[channelID]) {
          case "BTCUSD":
            setBTCUSD(ticker);
            break;
          case "BTCEUR":
            setBTCEUR(ticker);
            break;
          case "ETHUSD":
            setETHUSD(ticker);
            break;
          case "ETHEUR":
            setETHEUR(ticker);
            break;
          case "EOSUSD":
            setEOSUSD(ticker);
            break;
  
          default:
            break;
        }
      }
   
  };

  return <DefaultPage tickers={{ BTCUSD, BTCEUR, ETHUSD, ETHEUR, EOSUSD }} />;
}

export default App;
