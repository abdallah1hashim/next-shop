type card = {
  title: string;
  subTitle: string;
  body: string;
};

function Card({ title, subTitle, body }: card) {
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h3 className="">{subTitle}</h3>
        <p>{body}</p>
        {/* <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div> */}
      </div>
    </div>
  );
}

export default Card;
