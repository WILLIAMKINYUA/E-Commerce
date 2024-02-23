import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import'./Provide.css'
const Provide = () => {
    return (<div className="hast"><div className="context">
    <div className="group">
    <div className="detail">
<p className='description'>Do not missout Amazing Offers in Best Online Sale 2023</p>
<Link to='/product'className='sale'>Shop<BsArrowRight/></Link>
</div>  
<div className="image" >
<img src='/img/homepage..laptop.PNG' alt='Not Found'className="best"/>
</div>
</div>
</div></div>  );
}
 
export default Provide;