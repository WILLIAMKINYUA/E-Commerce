import './BestSale.css'
import { FaTruckMoving } from 'react-icons/fa';
import { BiDollar } from 'react-icons/bi';
import { CiPercent } from 'react-icons/ci';
import { BiHeadphone } from 'react-icons/bi';
const BestSale = () => {
    return ( 
        <div className="class">
            <div className="mask">
            <div className="display">
                <img src="./img/LAPTOP1.PNGPNG/img/LAPTOP1." alt="Not Found" className="imag"/>
               <p className="para">34 AVAILABLE</p>
            </div>
            <div className="display">
    <img src="./img/PHONE1.PNG" alt="Not Found" className="imag"/>
   <p className="para">64 AVAILABLE</p>
</div>
<div className="display">
    <img src="./img/watch2.PNG" alt="Not Found" className="imag"/>
   <p className="para">4 AVAILABLE</p>
</div>
<div className="display">
    <img src="./img/OTHERS.PNG" alt="Not Found" className="imag"/>
   <p className="para">14 AVAILABLE</p>
</div> </div>
<div className="item">
<div className="void">
    <FaTruckMoving size={82}className="react"/>
    <div className="box">
        <h3 className='title'>Free Shipping</h3>
       <p>Order above $1000</p>
    </div></div>
    <div className="void">
    <BiDollar size={82}className="react"/>
    <div className="box">
        <h3 className='title'>Free Shipping</h3>
       <p>Order above $1000</p>
    </div></div>
    <div className="void">
    <CiPercent size={82}className="react"/>
    <div className="box">
        <h3 className='title'>Return & Refund</h3>
       <p>Money Back Gaurrantee</p>
    </div></div>
    <div className="void">
    <BiHeadphone size={82} className="react"/>
    <div className="box">
        <h3 className='title'>Customer Support</h3>
       <p>Every Time Call Support</p>
</div>
</div></div></div>
 
     );
}
 
export default BestSale;
