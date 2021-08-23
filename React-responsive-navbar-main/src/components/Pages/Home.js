import React from "react";
import FeaturedProducts from "./FeaturedProducts"
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <img style={{padding:'0 4%',marginTop:'-10%'}} src="https://images.ctfassets.net/uuc5ok478nyh/5IMjUB9sibSRJDXXOwa6aV/2477fa4c6b7ed1b755836f0364b8858a/Home-Hero-Desktop.jpg?w=1920&h=747&fl=progressive&q=90&fm=jpg" height="500px" width="100%"></img>
      <br/>
      <Button variant="primary" style={{backgroundColor:'rgb(20, 43, 111)', borderRadius:'26px'}}><Link to="/shop-all" style={{color:'#fff',textDecoration:'none'}}>Shop All</Link></Button>{' '}
      <h4 style={{color:'rgb(20, 43, 111)'}}>The future of health is clear</h4>
      <br/>
      <FeaturedProducts/>
    </div>
  );
};
