import React from 'react';

function Chart() {

  const TOTAL_UNITS_OF_TIME_SPENT = 5;

  const CHART_DATA = [ //total percentageOfTime=100 totalCountOfWeeks=5
    {
      id: 1,
      numOfUnitsOfTimeSpent: 1,
      timeUnitText: 'неделя',
      subText: 'Back-end',
      color: '#2BE080',
    },
    {
      id: 2,
      numOfUnitsOfTimeSpent: 4,
      timeUnitText: 'недели',
      subText: 'Front-end',
      color: '#F2F2F2',
    },
  ];

  const getPercentage = (partialValue, totalValue) => {
    return (100 * partialValue) / totalValue;
  };

  const chartItemsMarkup = CHART_DATA.map((item) => {

    if (item.numOfUnitsOfTimeSpent === 0) {
      return;
    }

    const percentageOfTimeSpent = getPercentage(item.numOfUnitsOfTimeSpent, TOTAL_UNITS_OF_TIME_SPENT);

    const amountOfTimeSpentText = `${item.numOfUnitsOfTimeSpent} ${item.timeUnitText}`;

    const itemContainerStyle = {
      width: `${percentageOfTimeSpent}%`,
      background: item.color,
    };

    return (
      <div
        key={item.id}
        className="chart__item-container"
        style={itemContainerStyle}
      >
        <div
          className="chart__item"
        >

        </div>
        <p
          className="chart__text"
        >
          {amountOfTimeSpentText}
        </p>
        <p
          className="chart__text chart__text_color_light"
        >
          {item.subText}
        </p>
      </div>
    )
  });

  return (
    <div
      className="chart"
    >
      {chartItemsMarkup}
    </div>
  )
}

export default Chart;
