import {Search, Bell, ChevronDown} from 'react-bootstrap-icons';
import { useState } from 'react';

export const SearchBar = () => {
  const [search, setSearch] = useState('');
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);    
  };

  const handleNotificationClick = () => {
    // Handle notification logic
    console.log('Clicked on notifications');
  };

  const handleOptionsClick = () => {setIsOptionsVisible(!isOptionsVisible)};

  return (
    <article>
    <section className="SearchBar">
        <ul className = "SearchBox">
            <li >            
                  <Search className='searchIcon'/>
                  <input
                    type="text"
                    value={search}
                    onChange={handleSearch}
                    placeholder="Search Services ..."
                  />
                {/* You can add a button or other UI elements to trigger the search */}
                {/* <button onClick={() => console.log('Performing search:', search)}>Search</button> */}
                
            </li>
        </ul>
        <ul className="notification-account"> 
            <li onClick={handleNotificationClick}>
                <Bell />
            </li>
            <li>
              <img src="/assets/icon.svg" className='accountImage'/>
            </li>
            <li className='accountName'>
              Name Surname
            </li>
            <li>
                <ChevronDown  onClick={handleOptionsClick}/>
                {isOptionsVisible && (
                  <ul className="accountOptions">
                      <li>Option 1</li>
                      <li>Option 2</li>
                      <li>Option 3</li>
                  </ul>
                )}
                
            </li>
        </ul>
      
   </section>
   </article>
  );
};

export default SearchBar;