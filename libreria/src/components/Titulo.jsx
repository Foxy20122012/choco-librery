

const Titulo = ({ title }) => {
    return (
      <div className="text-[#050609] text-xl sm:text-2xl md:text-3xl font-medium flex flex-col sm:flex-row items-center sm:items-start gap-4 py-8 sm:py-16">
        {title}
        <div className="bg-blue-600 h-1 sm:h-2 md:h-3 w-16 sm:w-24 md:w-32 mt-2 sm:mt-0 ml-2 sm:ml-4"></div>
      </div>
    );
  };
  
  export default Titulo;
  