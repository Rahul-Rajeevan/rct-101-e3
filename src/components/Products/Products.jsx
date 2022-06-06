import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styles from '../Products/Pro.module.css'
import Product from "./Product/Product";

const Products = () => {
  const [list, setlist] = useState([])
  useEffect(() => {
    const pro=async()=>{
      let r=await axios.get("http://localhost:8080/products")
      setlist(r.data)
    }
   pro() 
  }, [])
  
  
  
  return <div className={styles.q1}>
    {list.map(e=><Product id={e.id} name={e.name} description={e.description}/> )}
  </div>;
};

export default Products;
