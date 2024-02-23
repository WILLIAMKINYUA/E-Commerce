import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import'./Display.css'
const Display = () => {
    return (<div className="hast"><div className="context">
    <div className="group">
    <div className="detail">
<p className='description'>The Best Note Book Collection 2023</p>
<Link to='/product'className='sale'><div className="btncontent">Shop<BsArrowRight/></div></Link>

</div>  
<div className="image" >
<img src='/img/homepage..laptop.PNG' alt='Not Found'className="best"/>
</div>
</div>
</div></div>  );
}
 
export default Display;