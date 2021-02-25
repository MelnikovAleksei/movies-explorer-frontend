import React from 'react';

function Chart(props) {
  const getPercentage = (partialValue, totalValue) => {
    return (100 * partialValue) / totalValue;
  };

  const chartItemsMarkup = props.data.map((item) => {
    if (item.numOfUnitsOfTimeSpent === 0) {
      return;
    }

    const percentageOfTimeSpent = getPercentage(item.numOfUnitsOfTimeSpent, props.totalUnitsOfTimeSpent);

    const amountOfTimeSpentText = `${item.numOfUnitsOfTimeSpent} ${item.timeUnitText}`;

    const itemContainerStyle = {
      background: item.color,
    };

    const itemStyle = {
      width: `${percentageOfTimeSpent}%`,
    };

    return (
      <div
        key={item.id}
        className="chart__item"
        style={itemStyle}
      >
        <div
          className="chart__item-container"
          style={itemContainerStyle}
        >
          <p
            className="chart__text"
          >
            {amountOfTimeSpentText}
          </p>
        </div>
        <p
          className="chart__sub-text"
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
