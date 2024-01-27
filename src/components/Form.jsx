import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  business_type_options,
  industries_options,
  annual_revenue_options,
  social_media_platform_options,
} from './options';
import PropTypes from 'prop-types';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000',
})

const Form = () => {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    phone: '',
    email: '',
    businessType: '',
    industry: '',
    annualRevenue: '',
    selectedPlatforms: [],
    socialMediaHandles: {},
  });
  const [password, setPassword] = useState('');

  const handleChange = (fieldName, value) => {
    switch (fieldName) {
      case 'firstName':
        setFormState((prevState) => ({ ...prevState, firstName: value }));
        break;
      case 'lastName':
        setFormState((prevState) => ({ ...prevState, lastName: value }));
        break;
      case 'companyName':
        setFormState((prevState) => ({ ...prevState, companyName: value }));
        break;
      case 'phone':
        setFormState((prevState) => ({ ...prevState, phone: value }));
        break;
      case 'email':
        setFormState((prevState) => ({ ...prevState, email: value }));
        break;
      case 'businessType':
        setFormState((prevState) => ({ ...prevState, businessType: value }));
        break;
      case 'industry':
        setFormState((prevState) => ({ ...prevState, industry: value }));
        break;
      case 'annualRevenue':
        setFormState((prevState) => ({ ...prevState, annualRevenue: value }));
        break;
      default:
        break;
    }
  };

  const handlePlatformChange = (platform) => {
    setFormState((prevState) => {
      const updatedPlatforms = prevState.selectedPlatforms.includes(platform)
        ? prevState.selectedPlatforms.filter((p) => p !== platform)
        : [...prevState.selectedPlatforms, platform];

      const updatedHandles = { ...prevState.socialMediaHandles };
      if (!updatedPlatforms.includes(platform)) {
        delete updatedHandles[platform];
      }

      return {
        ...prevState,
        selectedPlatforms: updatedPlatforms,
        socialMediaHandles: updatedHandles,
      };
    });
  };

  const handleHandleChange = (platform, handle) => {
    setFormState((prevState) => ({
      ...prevState,
      socialMediaHandles: {
        ...prevState.socialMediaHandles,
        [platform]: handle,
      },
    }));
  };
  useEffect(() => {
    const generatePassword = () => {
        const password = Math.random().toString(36).slice(-16);
        setPassword(password);
        console.log(password);
    }
    generatePassword();
}, [])

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log('Submitting form');
      console.log('Password', password);
      console.log('Making API Request', formState);
      const response = await api.post(`${import.meta.env.VITE_API_URL}/user/create-user`, {
        firstName: formState.firstName,
        lastName: formState.lastName,
        email: formState.email,
        phone: formState.phone,
        password: password,        
        business_type: formState.businessType,
        industry_type: formState.industry,
        business_name: formState.companyName,
        revenue: formState.annualRevenue,
      })
    }
    catch (error) {
      console.log('Error submitting form', error.message);
      console.log('Error Data:', error.response && error.response.data);
    }
  };

  return (
    <div className='flex justify-center'>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center gap-10 mb-4">
          <TextInput
            label="First Name"
            name="firstName"
            value={formState.firstName}
            onChange={handleChange}
          />
          <TextInput
            label="Last Name"
            name="lastName"
            value={formState.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-center gap-10 mb-4">
          <TextInput
            label="Company Name"
            name="companyName"
            value={formState.companyName}
            onChange={handleChange}
          />
          <TextInput
            label="Phone"
            name="phone"
            value={formState.phone}
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-center gap-10 mb-4">
          <TextInput
            label="Email"
            name="email"
            value={formState.email}
            onChange={handleChange}
          />
          <OptionInput
            label="Business Type"
            name="businessType"
            value={formState.businessType}
            options={business_type_options}
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-center gap-10 mb-4">
          <OptionInput
            label="Industry"
            name="industry"
            value={formState.industry}
            options={industries_options}
            onChange={handleChange}
          />
          <OptionInput
            label="Annual Revenue"
            name="annualRevenue"
            value={formState.annualRevenue}
            options={annual_revenue_options}
            onChange={handleChange}
          />
        </div>
        <div className='mb-4'>
          <label>Select Social Media Platforms:</label>
          {social_media_platform_options.map((platform, index) => (
            <CheckboxInput
              key={index}
              label={platform.label}
              name={platform.value}
              value={formState.selectedPlatforms.includes(platform.value)}
              checkBoxOnChange={handlePlatformChange}
              textInputOnChange={handleHandleChange}
            />
          ))}
        </div>
        <div className='flex justify-center'>
          <button type="submit" className="bg-deep-sapphire px-8 py-4 text-center text-white rounded-md">Get Our Strategy Now!</button>
        </div>
      </form>
    </div>
  );
};

const TextInput = ({ label, name, value, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <br />
      <input
        type="text"
        name={name}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        className='w-[250px] rounded-lg border-1 border-slate-500'
        required
      />
      <br />
    </div>
  );
};

const OptionInput = ({ label, name, value, options, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <br />
      <select
        name={name}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        className='w-[250px] rounded-lg border-1 border-slate-500'
        required
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <br />
    </div>
  );
};

const CheckboxInput = ({
  label,
  name,
  value,
  checkBoxOnChange,
  textInputOnChange,
}) => {
  return (
    <div>
      <div className="mb-2">
        <input
          type="checkbox"
          checked={value}
          onChange={() => checkBoxOnChange(name)}
          className='mr-2'
        />
        <label>{label}</label>
      </div>
      {value && (
        <>
          <input
            type="text"
            placeholder={`${label} Handle`}
            onChange={(e) => textInputOnChange(name, e.target.value)}
            className='w-[250px] rounded-lg border-1 border-slate-500 mb-2'
            required
          />
        </>
      )}
    </div>
  );
};

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

OptionInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
};

CheckboxInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
  checkBoxOnChange: PropTypes.func.isRequired,
  textInputOnChange: PropTypes.func.isRequired,
};

export default Form;
