import React, {useState} from 'react';
import Switch from 'react-switch';
import { FaHeart, FaBars, FaSearch } from 'react-icons/fa';

const Header = ({
    handleResizeSide,
    sideSize,
    setSearch
}) => {

    const [Account, setAccount] = useState();

    const onChange = (e) => {
        setAccount(e.target.value);
    }

    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            setSearch(Account);
        }
    }

    return (
        <div className="topNav">
            <div>
                <form className="header-form">
                    <FaSearch />
                    <input type="text"  placeholder="Search"  onChange={onChange} value={Account} onKeyPress={onKeyPress} />
                </form>
            </div>
            <div className="block">
                <Switch
                  height={16}
                  width={30}
                  checkedIcon={false}
                  uncheckedIcon={false}
                  onChange={handleResizeSide}
                  checked={sideSize}
                  onColor="#219de9"
                  offColor="#bbbbbb"
                />
                <span>resize</span>
            </div>
        </div>
    );
}

export default Header;
