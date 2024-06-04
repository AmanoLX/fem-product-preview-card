import Button from './Button';

const Card = ({ id, title, category, newPrice, oldPrice, info, images }) => {
  return (
    <article className="card" key={id}>
      <picture className="card__img">
        <source media="(min-width: 37.5em)" srcset={images[1].desktop} />
        <img src={images[0].mobile} alt={title} />
      </picture>
      <div className="card__content">
        <span className="card__category">{category}</span>
        <h1 className="card__title">{title}</h1>
        <p className="card__info">{info}</p>
        <div className="card__price-group">
          <p className="card__price-now">${newPrice}</p>
          <s className="card__price-original">${oldPrice}</s>
        </div>
        <Button />
      </div>
    </article>
  );
};
export default Card;
