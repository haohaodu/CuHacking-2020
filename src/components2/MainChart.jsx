import React from "react";
import { useState, useEffect } from "react";
import Chart from "./Chart";
import NavButton from "./NavButton";
import { Line, Bar, Pie } from "react-chartjs-2";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const MainChart = () => {
  const [state, setState] = useState([
    {
      year: "2020",
      api:
        "https://raw.githubusercontent.com/hudyu17/cuHacking2020/master/analysis0.csv",
      average: 0.226
    },
    {
      year: "2019",
      api:
        "https://raw.githubusercontent.com/hudyu17/cuHacking2020/master/analysis1.csv",
      average: 0.236
    },
    {
      year: "2018",
      api:
        "https://raw.githubusercontent.com/hudyu17/cuHacking2020/master/analysis2.csv",
      average: 0.215
    },
    {
      year: "2017",
      api:
        "https://raw.githubusercontent.com/hudyu17/cuHacking2020/master/analysis0.csv",
      average: 0.199
    },
    {
      year: "2016",
      api:
        "https://raw.githubusercontent.com/hudyu17/cuHacking2020/master/analysis4.csv",
      average: 0.206
    },
    {
      year: "2015",
      api:
        "https://raw.githubusercontent.com/hudyu17/cuHacking2020/master/analysis5.csv",
      average: 0.2
    },
    {
      year: "2014",
      api:
        "https://raw.githubusercontent.com/hudyu17/cuHacking2020/master/analysis6.csv",
      average: 0.228
    },
    {
      year: "2013",
      api:
        "https://raw.githubusercontent.com/hudyu17/cuHacking2020/master/analysis7.csv",
      average: 0.176
    },
    {
      year: "2012",
      api:
        "https://raw.githubusercontent.com/hudyu17/cuHacking2020/master/analysis8.csv",
      average: 0.194
    },
    {
      year: "2011",
      api:
        "https://raw.githubusercontent.com/hudyu17/cuHacking2020/master/analysis9.csv",
      average: 0.156
    },
    {
      year: "2010",
      api:
        "https://raw.githubusercontent.com/hudyu17/cuHacking2020/master/analysis10.csv",
      average: 0.029
    },
    {
      year: "2009",
      api:
        "https://raw.githubusercontent.com/hudyu17/cuHacking2020/master/analysis11.csv",
      average: 0.391
    }
  ]);

  const averageList = [];
  useEffect(() => {
    for (const i in state) {
      averageList.push(state[i]["average"]);
    }
  }, []);

  const test = {
    data: {
      labels: [
        "2020",
        "2019",
        "2018",
        "2017",
        "2016",
        "2015",
        "2014",
        "2013",
        "2012",
        "2011",
        "2010",
        "2009"
      ],
      datasets: [
        {
          label: "Average per Year",
          backgroundColor: "rgba(254,223,1,1)",
          data: averageList
        }
      ]
    },
    options: {
      onClick: () => console.log("fff")
    }
  };


  return (
    <div className="main-chart font-weight-bolder">
      <Router>
        <Switch>
          <Route exact path="/">
            <h2>Average Annual Sentiment Score (2009 - 2020)</h2>
            <div className="container">
              <Bar
                options={{
                  responsive: true,
                  options: {
                    onClick: () => console.log("hh")
                  }
                }}
                data={test.data}
              />
              {state.map((time, timeId) => {
                return (
                  
                    <Link to={`/${time.year}`}>
                    <NavButton id={'n'+time.year} year={time.year}></NavButton>
                  </Link>
                  
                );
              })}
            </div>
          </Route>
          {state.map((chart, chartID) => {
            return (
              <Route exact path={`/${chart.year}`}>
                <Switch>
                <div key={chartID}>
                  <Chart year={chart.year} link={chart.api}></Chart>
                </div>
                </Switch>
              </Route>
            );
          })}
        </Switch>
      </Router>
    </div>
  );
};

export default MainChart;
