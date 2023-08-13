
const Cards = (props) => {
  return (
    <div className="m-5 max-w-sm ">
      <div className="bg-white border border-gray-200 rounded-lg shadow-md">
        <img
          className="w-full h-64 object-fit rounded-t-lg"
          src={props.imageUrl}
          alt={props.imageAlt}
        />
        <div className="p-5 h-40 overflow-hidden">
          <h1 className="mb-2 text-xl font-bold tracking-tight text-gray-900 hover:underline">
            {props.title}
          </h1>
          <p className="mb-3 font-normal text-gray-700 text-ellipsis">{props.description} </p>
          <a
            href={props.linkUrl}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center
             text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300
              "
          >
            Leer Mas
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cards;
