import React from "react";

function Pagination (Next)  {
  const [leftClick, rightClick, pagina, totalPages ] = Next;

  return (
  
    <div className="Next">
      <button className="boton-Pagi" onClick={leftClick}>Go Back</button>
      
      <button className="boton-Pagi" onClick={rightClick}>Next</button>
    </div>

  );
};

export default Pagination;