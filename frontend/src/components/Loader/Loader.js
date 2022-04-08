import './Loader.css';
import loaderIcon from '../../images/cactus.png';

function Loader() {
return (
    <div className="loader">
        <img src={loaderIcon} alt="loading..." />
    </div>
)
}

export default Loader;