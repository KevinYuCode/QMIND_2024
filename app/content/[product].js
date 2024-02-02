import React from 'react';
import { Data } from "../Data";
import { RiArrowGoBackFill } from "react-icons/ri";
import { motion, AnimatePresence, AnimateSharedLayout} from "framer-motion";

const Product = ({ id, expander }) => {
    const phone=Data.find((item) => item.id === parseInt(id));
  return (
    <motion.div key={id} className='expanded_card' layoutId={id}>
      <div className="expanded_image">
        <div className="expanded_image-content">
        <p onClick = {expander}>
          <RiArrowGoBackFill />
        </p>
      <img src={`.././images/${phone.image}`} alt =" " />
      </div>
      </div>
      <div className="expanded_text">


      
          <div className="expanded_text_content">
          <p className="product_name">230+  </p>
          <p className="product_details">Software Developers</p>
          <div className="text_footer">
            <p className="product_price"></p>
            

          </div>
          
        </div>
      </div>
    </motion.div>

    
  );
};

export default Product;