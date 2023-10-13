import './header.css';
import sparklyLogo from '../../images/sparkly-logo.png';

const Header = () => {
    return (
        <header id="sparkly-header">
            <div id="sparkly-logo-container">
                <button id="sparkly-logo-btn" type='button'>
                    <img id="sparkly-logo" src={sparklyLogo} alt="sparkly" />
                </button>
            </div>
        </header>
    );
};

export default Header;