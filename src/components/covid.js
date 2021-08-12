import React, {useEffect, useState} from 'react';
import "./covid.css";

const Covid = () => {
  
  const [data1, setData1] = useState ([]);
  const [data, setData] = useState ([]);
  const getCovidData = async () => {
      try {
        const res = await fetch('https://api.covid19india.org/data.json');
        const actualData = await res.json();
        console.log(actualData.statewise[0]);
        setData1(actualData.statewise[0]);
        console.log(actualData.statewise);
        setData(actualData.statewise);
      } catch (error) {
          console.log(error);
      }
      
  }
  
    useEffect( () => {
        getCovidData();
  },[]);
  
    return(
    <>
        <section>
        <h1>🔴 LIVE</h1>
        <h2>COVID-19 CORONAVIRUS TRACKER</h2>

        <ul>
          <li className="card1">
              <div className="card__main">
                <div className="card__inner">
                  <p className="card__name"><span> OUR</span> COUNTRY</p>
                  <p className="card__total card__small">INDIA</p>
                </div>
              </div>
          </li>

          <li className="card2">
              <div className="card__main">
                <div className="card__inner">
                  <p className="card__name"><span> TOTAL</span> RECOVERED</p>
                  <p className="card__total card__small">{data1.recovered}</p>
                </div>
              </div>
          </li>

          <li className="card3">
              <div className="card__main">
                <div className="card__inner">
                  <p className="card__name"><span> TOTAL</span> CONFIRMED</p>
                  <p className="card__total card__small">{data1.confirmed}</p>
                </div>
              </div>
          </li>

          <li className="card4">
              <div className="card__main">
                <div className="card__inner">
                  <p className="card__name"><span> TOTAL</span> DEATH</p>
                  <p className="card__total card__small">{data1.deaths}</p>
                </div>
              </div>
          </li>

          <li className="card5">
              <div className="card__main">
                <div className="card__inner">
                  <p className="card__name"><span> TOTAL</span> ACTIVE</p>
                  <p className="card__total card__small">{data1.active}</p>
                </div>
              </div>
          </li>

          <li className="card6">
              <div className="card__main">
                <div className="card__inner">
                  <p className="card__name"><span> LAST</span> UPDATED</p>
                  <p className="card__total card__small">{data1.lastupdatedtime}</p>
                </div>
              </div>
          </li>
        </ul>
        </section>

        
        <div className="container-fluid mt-5">
          <div className="main-heading">
            <h1 className="mb-5 text-center"><span className="font-weight-bold">INDIA </span> COVID-19 DASHBOARD</h1>
          </div>
          <center>
          <div className="table-responsive">
            <div className="table table-hover">
                <thead className="thead-dark">
                  <tr>
                    <th>State</th>
                    <th>Confirmed</th>
                    <th>Recovered</th>
                    <th>Deaths</th>
                    <th>Active</th>
                    <th>Updated</th>
                  </tr>
                </thead>

                <tbody>

                    {
                      data.map((curElem,index) => {
                        return(                    
                    <tr key={index}>
                    <td>{curElem.state}</td>
                    <td>{curElem.confirmed}</td>
                    <td>{curElem.recovered}</td>
                    <td>{curElem.deaths}</td>
                    <td>{curElem.active}</td>
                    <td>{curElem.lastupdatedtime}</td>
                    </tr>
                    )

                      })
                    }  



                </tbody>
            </div>
          </div>
          </center>
        </div>
    </>
  )
}

export default Covid