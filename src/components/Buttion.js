const Buttion = ({text, type}) => {
    return (
      
        <button type={type} className="bg-blue-500 px-10 py-2 text-[12px] md:text-sm rounded-full text-white">
          {text}
        </button>
 
    );
  };
  
  export default Buttion;
  