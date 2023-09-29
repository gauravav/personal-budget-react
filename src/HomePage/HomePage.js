import React, { useEffect, useRef } from 'react';
import { axiosGet } from './../axiosService';
import { Chart } from 'chart.js/auto';

function HomePage() {
    const chartRef = useRef(null);
    const chartInstanceRef = useRef(null); // Maintain a reference to the chart instance


    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axiosGet('/budget');
    
            if (response && response.data && response.data.myBudget) {
              const myBudgetData = response.data.myBudget;
    
              // Extract labels and data values from the fetched data
              const labels = myBudgetData.map((item) => item.title);
              const data = myBudgetData.map((item) => item.budget);
    
              // Destroy the existing chart instance if it exists
              if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
              }
    
              // Create a new Chart.js pie chart
              const chartContext = chartRef.current.getContext('2d');
              const newChartInstance = new Chart(chartContext, {
                type: 'pie',
                data: {
                  labels: labels,
                  datasets: [
                    {
                      data: data,
                      backgroundColor: [
                        'red',
                        'blue',
                        'green',
                        'yellow',
                        'orange',
                        'purple',
                        'pink',
                      ], // You can specify custom colors here
                    },
                  ],
                },
              });
    
              // Update the chart instance reference
              chartInstanceRef.current = newChartInstance;
            }
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);
    
  return (
    <main className="center" id="main">

        <div className="page-area">

            <article>
                <h1>Stay on track</h1>
                <p>
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
            </article>
    
            <article>
                <h1>Alerts</h1>
                <p>
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>
            </article>
    
            <article>
                <h1>Results</h1>
                <p>
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they to live happier lives... since they expend without guilt or fear... 
                    because they know it is all good and accounted for.
                </p>
            </article>
    
            <article>
                <h1>Free</h1>
                <p>
                    This app is free!!! And you are the only one holding your data!
                </p>
            </article>
    
            <article>
                <h1>Stay on track</h1>
                <p>
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
            </article>
    
            <article>
                <h1>Alerts</h1>
                <p>
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>
            </article>
    
            <article>
                <h1>Results</h1>
                <p>
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they to live happier lives... since they expend without guilt or fear... 
                    because they know it is all good and accounted for.
                </p>
            </article>
    
            <article>
                <h1>Chart</h1>
                <p>
                    <canvas id="myChart" width="400" height="400" ref={chartRef}></canvas>
                </p>
            </article>

        </div>

    </main>
  );
}

export default HomePage;
