const Card2 = (props) => {
    return (
      <div className="p-2 max-w-sm">
        <div className="rounded-t-lg bg-white border border-gray-200 rounded-lg shadow-md">
          <img className="w-full h-64 object-fit rounded-t-lg" src={props.imageUrl} alt={props.imageAlt} />
          <div className="p-4 h-40 overflow-hidden text-2xl font-bold tracking-tight text-gray-900">
            <p className="hidden md:block">{props.Descripcion}</p>
            <p className="md:hidden">{props.DescripcionMobile}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Card2;
  