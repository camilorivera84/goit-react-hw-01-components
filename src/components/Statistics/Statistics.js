import PropTypes from 'prop-types';

const getRandomColor = () => Math.floor(Math.random() * 16777215).toString(16);

const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title_statistics">{title}</h2>}
      <ul className="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <li key={id} className="item_statistics">
            <div
              className="data_statistics"
              style={{ backgroundColor: `#${getRandomColor()}` }}
            >
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
