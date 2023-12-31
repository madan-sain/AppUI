const Buttion = ({text, type}) => {
    return (
      
        <button type={type} className="bg-blue-500 px-10 py-2 rounded-full text-white">
          {text}
        </button>
 
    );
  };
  
  export default Buttion;
  