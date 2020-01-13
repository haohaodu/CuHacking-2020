import React, { useEffect, useState } from "react";
import { Line, Bar, Pie } from "react-chartjs-2";
import { csv } from "d3";
const Chart = props => {
  // const [state, setState] = useState({
  //   data: {
  //     labels: ["1", "2", "3", "4", "5", "6", "7", "8"],
  //     datasets: [
  //       {
  //         label: "Date made",
  //         backgroundColor: "rgba(255, 0, 255, 0.6)",
  //         data: [2, 7, 4, 5, 6, 8, -23, 3]
  //       }
  //     ]
  //   }
  // });

  const test = {
    data: {
      labels: [],
      datasets: [
        {
          label: props.year,
          backgroundColor: "rgba(254,223,1,1)",

          data: []
        }
      ]
    }
  };

  useEffect(() => {
    csv(props.link).then(data => {
      for (let i = 0; i < data.length; i++) {
        test["data"]["labels"].push(i);
      }
      for (let i = 0; i < data.length; i++) {
        const element = data[i];
        test["data"]["datasets"][0]["data"].push(element["score"]);
      }
      console.log(test.data);
      // console.log(state.data);
    });
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <h2>General Sentiment for the year {props.year}</h2>
      <div className="container">
        <Line
          className="chart"
          options={{
            responsive: true,
            labels: {
              fontColor: "black"
            }
          }}
          data={test.data}
        ></Line>
      </div>
    </div>
  );
};

export default Chart;
