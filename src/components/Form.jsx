import React, { useState } from 'react';

const Form = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [selectedPlatforms, setSelectedPlatforms] = useState([]);
    const [socialMediaHandles, setSocialMediaHandles] = useState({});
    const [businessType, setBusinessType] = useState('');
    const [industry, setIndustry] = useState('');
    const [annualRevenue, setAnnualRevenue] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };
    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };
    const handleCompanyNameChange = (e) => {
        setCompanyName(e.target.value);
    };
    const handleBusinessTypeChange = (e) => {
        setBusinessType(e.target.value);
    };
    const handleIndustryChange = (e) => {
        setIndustry(e.target.value);
    };
    const handleAnnualRevenueChange = (e) => {
        setAnnualRevenue(e.target.value);
    };
    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePlatformChange = (platform) => {
        if (selectedPlatforms.includes(platform)) {
        // Remove platform if already selected
        const updatedPlatforms = selectedPlatforms.filter((p) => p !== platform);
        setSelectedPlatforms(updatedPlatforms);

        // Remove handle for the unselected platform
        const updatedHandles = { ...socialMediaHandles };
        delete updatedHandles[platform];
        setSocialMediaHandles(updatedHandles);
        } else {
        // Add platform if not already selected
        setSelectedPlatforms([...selectedPlatforms, platform]);
        }
    };

    const handleHandleChange = (platform, handle) => {
        setSocialMediaHandles({ ...socialMediaHandles, [platform]: handle });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ selectedPlatforms, socialMediaHandles });
    };

    return (
        <div class='rounded-xl p-4 w-11/12 mx-auto px-4 text-black border border-black shadow-xl'>


        <form onSubmit={handleSubmit}>
            <div class='flex justify-between space-x-4 py-2'>
        <div class='flex-col pl-10 py-4'>
            <label class='text-xl'>
                First Name
                <textarea type='text' class='p-1 w-full h-11 bg-white rounded-lg shadow-m text-black' onChange={handleFirstNameChange}/>
            </label>
        </div>
        <div class='flex-col pr-10 py-4'>
            <label class='text-xl'>
                Last Name
                <input type='text' class='p-1 w-full h-11 bg-white rounded-lg shadow-m text-black' onChange={handleLastNameChange}/>

            </label>
        </div>
    </div>
            <br />
            <div class='flex justify-between'>
    <div>
        <div class='ml-10'>
        <label class='text-xl'>
            Company Name
            <input type='text' class='w-10/12 h-11 bg-white rounded-lg shadow-m text-black' onChange={handleCompanyNameChange}/>
        </label>  
        </div>
    </div>  
    <div class='mr-32'>
        <label class='text-xl'>
            Phone
            <input type='text' placeholder='(xxx) xxx-xxxx' class='w-full h-11 bg-white rounded-lg shadow-m text-black' onChange={handlePhoneChange}/>
        </label>
    </div>
    <div class='ml-33 pr-'>
        <label class='text-xl'>
            Email:
            <input type='text' class='w-full h-11 bg-white rounded-lg shadow-m text-black' onChange={handleEmailChange}/>
        </label>
    </div>
</div>
            <br />
            <label>
                Business Type:
                <select value={businessType} onChange={handleBusinessTypeChange}>
                    <option value=''>Select</option>
                    <option value='LLC'>LLC</option>
                    <option value='Corporation'>Corporation</option>
                    <option value='Partnership'>Partnership</option>
                    <option value='Sole Proprietorship'>Sole Proprietorship</option>
                    <option value='Government Agency'>Government Agency</option>
                    <option value='Non-Profit'>Non-Profit</option>
                    <option value='Other'>Other</option>
                </select>
            </label>
            <label>
                Industry:
                <select value={industry} onChange={handleIndustryChange}>
                    <option value=''>Select</option>
                    <option value='Accounting'>Accounting</option>
                    <option value='Airlines/Aviation'>Airlines/Aviation</option>
                    <option value='Alternative Dispute Resolution'>Alternative Dispute Resolution</option>
                    <option value='Alternate Medicine'>Alternate Medicine</option>
                    <option value='Animation'>Animation</option>
                    <option value='Apparel/Fashion'>Apparel/Fashion</option>
                    <option value='Architecture/Planning'>Architecture/Planning</option>
                    <option value='Arts/Crafts'>Arts/Crafts</option>
                    <option value='Automotive'>Automotive</option>
                    <option value='Aviation/Aerospace'>Aviation/Aerospace</option>
                    <option value='Banking'>Banking</option>
                    <option value='Biotechnology'>Biotechnology</option>
                    <option value='Broadcast Media'>Broadcast Media</option>
                    <option value='Building Materials'>Building Materials</option>
                    <option value='Business Supplies/Equipment'>Building Supplies/Equipment</option>
                    <option value='Capital Markets'>Capital Markets</option>
                    <option value='Chemicals'>Chemicals</option>
                    <option value='Civic/Social Organization'>Civic/Social Organization</option>
                    <option value='Civil Engineering'>Civil Engineering</option>
                    <option value='Commercial Real Estate'>Commercial Real Estate</option>
                    <option value='Computer & Network Security'>Computer & Network Security</option>
                    <option value='Computer Games'>Computer Games</option>
                    <option value='Computer Hardware'>Computer Hardware</option>
                    <option value='Computer Networking'>Computer Networking</option>
                    <option value='Computer Software'>Computer Software</option>
                    <option value='Construction'>Construction</option>
                    <option value='Consumer Electronics'>Consumer Electronics</option>
                    <option value='Consumer Services'>Consumer Services</option>
                    <option value='Cosmetics'>Cosmetics</option>
                    <option value='Dairy'>Dairy</option>
                    <option value='Defense/Space'>Defense/Space</option>
                    <option value='Design'>Design</option>
                    <option value='Education'>Education</option>
                    <option value='E-Learning'>E-Learning</option>
                    <option value='Electrical/Electronic Manufacturing'>Electrical/Electronic Manufacturing</option>
                    <option value='Entertainment'>Entertainment</option>
                    <option value='Environmental Services'>Environmental Services</option>
                    <option value='Events Services'>Events Services</option>
                    <option value='Executive Office'>Executive Office</option>
                    <option value='Facilities Services'>Facilities Services</option>
                    <option value='Farming'>Farming</option>
                    <option value='Finance'>Finance</option>
                    <option value='Financial Services'>Financial Services</option>
                    <option value='Fine Art'>Fine Art</option>
                    <option value='Fishery'>Fishery</option>
                    <option value='Food & Services'>Food & Services</option>
                    <option value='Food Production'>Food Production</option>
                    <option value='Fundraising'>Fundraising</option>
                    <option value='Furniture'>Furniture</option>
                    <option value='Gambling & Casinos'>Gambling & Casinos</option>
                    <option value='Glass/Ceramics/Concrete'>Glass/Ceramics/Concrete</option>
                    <option value='Government Administration'>Government Administration</option>
                    <option value='Government Relations'>Government Relations</option>
                    <option value='Graphic Design/Web Design'>Graphic Design/Web Design</option>
                    <option value='Health/Fitness'>Health/Fitness</option>
                    <option value='Higher Education/Acadamia'>Higher Education/Acadamia</option>
                    <option value='Healthcare'>Healthcare</option>
                    <option value='Hospitality'>Hospitality</option>
                    <option value='Human Resources/HR'>Human Resources/HR</option>
                    <option value='Import/Export'>Import/Export</option>
                    <option value='Individual/Family Services'>Individual/Family Services</option>
                    <option value='Industrial Automation'>Industrial Automation</option>
                    <option value='Information Services'>Information Services</option>
                    <option value='Information Technology/IT'>Information Technology/IT</option>
                    <option value='Insurance'>Insurance</option>
                    <option value='International Affairs'>International Affairs</option>
                    <option value='International Trade/Development'>International Trade/Development</option>
                    <option value='Internet'>Internet</option>
                    <option value='Investment Banking/Venture'>Investment Banking/Venture</option>
                    <option value='Investment Management/Hedge Fund/Private Equity'>Investment Management/Hedge Fund/Private Equity</option>
                    <option value='Judiciary'>Judiciary</option>
                    <option value='Law Enforcement'>Law Enforcement</option>
                    <option value='Law Practice/Law Firms'>Law Practice/Law Firms</option>
                    <option value='Legal Services'>Legal Services</option>
                    <option value='Legislative Office'>Legislative Office</option>
                    <option value='Leisure/Travel'>Leisure/Travel</option>
                    <option value='Libraries'>Libraries</option>
                    <option value='Logistics & Supply Chain'>Logistics & Supply Chain</option>
                    <option value='Luxury Goods/Jewelry'>Luxury Goods/Jewelry</option>
                    <option value='Machinery'>Machinery</option>
                    <option value='Management Consulting'>Management Consulting</option>
                    <option value='Manufacturing'>Manufacturing</option>
                    <option value='Maritime'>Maritime</option>
                    <option value='Market Research'>Market Research</option>
                    <option value='Marketing/Advertising/Sales'>Marketing/Advertising/Sales</option>
                    <option value='Mechanical or Industrial Engineering'>Mechanical or Industrial Engineering</option>
                    <option value='Media Production'>Media Production</option>
                    <option value='Medical Equipment'>Medical Equipment</option>
                    <option value='Medical Practice'>Medical Practice</option>
                    <option value='Mental Health Care'>Mental Health Care</option>
                    <option value='Military'>Military</option>
                    <option value='Mining/Metals'>Mining/Metals</option>
                    <option value='Motion Pictures/Film'>Motion Pictures/Film</option>
                    <option value='Museums/Institutions'>Museums/Institutions</option>
                    <option value='Music'>Music</option>
                    <option value='Nanotechnology'>Nanotechnology</option>
                    <option value='Newspapers/Journalism'>Newspapers/Journalism</option>
                    <option value='Non-Profit/Volunteering'>Non-Profit/Volunteering</option>
                    <option value='Oil/Energy/Solar/Greentech'>Oil/Energy/Solar/Greentech</option>
                    <option value='Online Media'>Online Media</option>
                    <option value='Outsourcing/Offshoring'>Outsourcing/Offshoring</option>
                    <option value='Package/Freight Delivery'>Package/Freight Delivery</option>
                    <option value='Packaging & Containers'>Packaging & Containers</option>
                    <option value='Paper/Forest Products'>Paper/Forest Products</option>
                    <option value='Performing Arts'>Performing Arts</option>
                    <option value='Pharmaceuticals'>Pharmaceuticals</option>
                    <option value='Philanthropy'>Philanthropy</option>
                    <option value='Photography'>Photography</option>
                    <option value='Plastics'>Plastics</option>
                    <option value='Political Organization'>Political Organization</option>
                    <option value='Printing'>Printing</option>
                    <option value='Professional Training & Coaching'>Professional Training & Coaching</option>
                    <option value='Program Development'>Program Development</option>
                    <option value='Public Policy'>Public Policy</option>
                    <option value='Public Relations/PR'>Public Relations/PR</option>
                    <option value='Public Safety'>Public Safety</option>
                    <option value='Publishing'>Publishing</option>
                    <option value='Railroad Manufacture'>Railroad Manufacture</option>
                    <option value='Ranching'>Ranching</option>
                    <option value='Real Estate'>Real Estate</option>
                    <option value='Recreational Facilities & Services'>Recreational Facilities & Services</option>
                    <option value='Religious Institutions'>Religious Institutions</option>
                    <option value='Renewables & Environment'>Renewables & Environment</option>
                    <option value='Research'>Research</option>
                    <option value='Restaurants'>Restaurants</option>
                    <option value='Retail'>Retail</option>
                    <option value='Security & Investigations'>Security & Investigations</option>
                    <option value='Semiconductors'>Semiconductors</option>
                    <option value='Shipbuilding'>Shipbuilding</option>
                    <option value='Sporting Goods'>Sporting Goods</option>
                    <option value='Sports'>Sports</option>
                    <option value='Staffing & Recruiting'>Staffing & Recruiting</option>
                    <option value='Supermarkets'>Supermarkets</option>
                    <option value='Telecommunications'>Telecommunications</option>
                    <option value='Textiles'>Textiles</option>
                    <option value='Think Tanks'>Think Tanks</option>
                    <option value='Tobacco'>Tobacco</option>
                    <option value='Translation & Localization'>Translation & Localization</option>
                    <option value='Transportation'>Transportation</option>
                    <option value='Utilities'>Utilities</option>
                    <option value='Venture Capital/VC'>Venture Capital/VC</option>
                    <option value='Veterinary'>Veterinary</option>
                    <option value='Warehousing'>Warehousing</option>
                    <option value='Wholesale'>Wholesale</option>
                    <option value='Wine/Spirits'>Wine/Spirits</option>
                    <option value='Wireless'>Wireless</option>
                    <option value='Writing/Editing'>Writing/Editing</option>
                    <option value='Other'>Other</option>
                </select>
            </label>
            <label>Annual Revenue:
                <select value={annualRevenue} onChange={handleAnnualRevenueChange}>
                    <option value=''>Select</option>
                    <option value='$0-$100k'>$0-$100K</option>
                    <option value='$100k-$500k'>$100K-$500K</option>
                    <option value='$500k-$1M'>$500K-$1M</option>
                    <option value='$1M-$5M'>$1M-$5M</option>
                    <option value='$5M-$10M'>$5M-$10M</option>
                    <option value='$10M-$50M'>$10M-$50M</option>
                    <option value='$50M-$100M'>$50M-$100M</option>
                    <option value='$100M-$500M'>$100M-$500M</option>
                    <option value='$500M-$1B'>$500M-$1B</option>
                    <option value='$1B+'>$1b+</option>
                </select>
            </label>
            <br />
            <label>
                Select Social Media Platforms:
                <br />
                <input
                type="checkbox"
                checked={selectedPlatforms.includes('Facebook')}
                onChange={() => handlePlatformChange('Facebook')}
                />
                Facebook
                {selectedPlatforms.includes('Facebook') && (
                    <input
                    type="text"
                    placeholder="Facebook Handle"
                    onChange={handleHandleChange}
                    />
                )}
            </label>
            <br />
            <label>
                <input
                type="checkbox"
                checked={selectedPlatforms.includes('Twitter/X')}
                onChange={() => handlePlatformChange('Twitter/X')}
                />
                Twitter/X 
                {selectedPlatforms.includes('Twitter/X') && (
                    <input
                    type="text"
                    placeholder="Twitter/X Handle"
                    onChange={handleHandleChange}
                    />
                )}
            </label>
            <br />
            <label>
                <input
                type="checkbox"
                checked={selectedPlatforms.includes('Instagram')}
                onChange={() => handlePlatformChange('Instagram')}
                />
                Instagram
                {selectedPlatforms.includes('Instagram') && (
                    <input
                    type="text"
                    placeholder="Instagram Handle"
                    onChange={handleHandleChange}
                    />
    )}
            </label>
            <br />
            <label>
                <input
                type="checkbox"
                checked={selectedPlatforms.includes('LinkedIn')}
                onChange={() => handlePlatformChange('LinkedIn')}
                />
                LinkedIn
                {selectedPlatforms.includes('LinkedIn') && (
                    <input
                    type="text"
                    placeholder="LinkedIn Handle"
                    onChange={handleHandleChange}
                    />
                )}
            </label>
            <br />
            <label>
                <input
                type="checkbox"
                checked={selectedPlatforms.includes('YouTube')}
                onChange={() => handlePlatformChange('YouTube')}
                />
                YouTube
                {selectedPlatforms.includes('YouTube') && (
                    <input
                    type="text"
                    placeholder="YouTube Channel"
                    onChange={handleHandleChange}
                    />
                )}
            </label>
            <br />
            <label>
                <input
                type="checkbox"
                checked={selectedPlatforms.includes('Pinterest')}
                onChange={() => handlePlatformChange('Pinterest')}
                />
                Pinterest
                {selectedPlatforms.includes('Pinterest') && (
                    <input
                    type="text"
                    placeholder="Pinterest Handle"
                    onChange={handleHandleChange}
                    />
                )}
            </label>
            <br />
            <label>
                <input
                type="checkbox"
                checked={selectedPlatforms.includes('Snapchat')}
                onChange={() => handlePlatformChange('Snapchat')}
                />
                Snapchat
                {selectedPlatforms.includes('Snapchat') && (
                    <input
                    type="text"
                    placeholder="Snapchat Handle"
                    onChange={handleHandleChange}
                    />
                )}
            </label>
            <br />
            <label>
                <input
                type="checkbox"
                checked={selectedPlatforms.includes('TikTok')}
                onChange={() => handlePlatformChange('TikTok')}
                />
                TikTok
                {selectedPlatforms.includes('TikTok') && (
                    <input
                    type="text"
                    placeholder="TikTok Handle"
                    onChange={handleHandleChange}
                    />
                )}
            </label>
            <br />
            <label>
                <input

                type="checkbox"
                checked={selectedPlatforms.includes('Twitch')}
                onChange={() => handlePlatformChange('Twitch')}
                />
                Twitch
                {selectedPlatforms.includes('Twitch') && (
                    <input
                    type="text"
                    placeholder="Twitch Handle"
                    onChange={handleHandleChange}
                    />
                )}
            </label>
            <br />
            <label>
                <input
                type="checkbox"
                checked={selectedPlatforms.includes('Reddit')}
                onChange={() => handlePlatformChange('Reddit')}
                />
                Reddit
                {selectedPlatforms.includes('Reddit') && (
                    <input
                    type="text"
                    placeholder="Reddit Handle"
                    onChange={handleHandleChange}
                    />
                )}
            </label>
            <br />
            <label>
                <input
                type="checkbox"
                checked={selectedPlatforms.includes('Tumblr')}
                onChange={() => handlePlatformChange('Tumblr')}
                />
                Tumblr
                {selectedPlatforms.includes('Tumblr') && (
                    <input
                    type="text"
                    placeholder="Tumblr Handle"
                    onChange={handleHandleChange}
                    />
                )}
            </label>
            <br />      
            <button type="submit" class='mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-900 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none'>Send My Free Awesome.Social Strategy Now!</button>
        </form>
        </div>
    );
};

export default Form;

