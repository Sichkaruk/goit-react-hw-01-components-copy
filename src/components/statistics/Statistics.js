import s from "./Statistics.module.css";

const randomColor = () =>
  (Math.random().toString(16) + "000000").substring(2, 8).toUpperCase();

const Statistics = ({ title, stats }) => {
  return (
    <section className={s.section}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statList}>
        {stats.map((item) => (
          <li
            className={s.item}
            key={item.id}
            style={{ backgroundColor: "#" + randomColor() }}
          >
            <span className={s.label}>{item.label}</span>
            <span className={s.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
