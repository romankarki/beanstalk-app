import React from 'react';
// import {Link} from "react-router-dom";

export default function TopResultCard({code, title}) {
  return (
      <div style={{border:"1px solid gray", background:"#e1e1e1",borderRadius:"10px",padding:"0.9rem 1rem"}}>
            {/* <Link to={"/details?code="+code} style={{textDecoration:"none",color:"black"}}>
            </Link> */}
          <span style={{marginTop:"1rem",border:"1px solid gray",padding:"3px 12px",borderRadius:"15px",background:"gray",opacity:"0.9",fontSize:"0.9rem",fontWeight:"bolder"}}>{code}</span>
          <p style={{fontSize:"0.9rem"}}>{title}</p>
      </div>
  );
}