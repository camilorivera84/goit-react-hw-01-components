import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
  useEffect(() => {
    const dataStatisticsElements =
      document.querySelectorAll('.data_statistics');
    dataStatisticsElements.forEach(element => {
      const randomColor = `#${Math.floor(Math.random() * 16777215).toString(
        16
      )}`;
      element.style.backgroundColor = randomColor;
    });
  }, []);

  return (
    <section className="statistics">
      {title && <h2 className="title_statistics">{title}</h2>}
      <ul className="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <li key={id} className="item_statistics">
            <div className="data_statistics">
              <div>
                <span className="label_statistics">{label}</span>
              </div>
              <div>
                <span className="percentage">{percentage}%</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
