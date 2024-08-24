import { useState } from 'react';
import { createRecordApi } from '@src/api/enpoints';
import { contactFormData } from '@src/data/home/connect.data';

export const ContactForm = () => {
  const initialFormValues = {
    full_name: '',
    email: '',
    phone_number: '',
    message: ''
  };

  const [data, setData] = useState(initialFormValues);
  const [errors, setErrors] = useState({
    full_name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    });

    setErrors({
      ...errors,
      [name]: ''
    });
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = () => {
    let formIsValid = true;
    const validationErrors = { full_name: '', email: '', message: '' };

    if (!data.full_name) {
      validationErrors.full_name = 'Name is required';
      formIsValid = false;
    }

    if (!data.email) {
      validationErrors.email = 'Email is required';
      formIsValid = false;
    } else if (!validateEmail(data.email)) {
      validationErrors.email = 'Invalid email format';
      formIsValid = false;
    }

    if (!data.message) {
      validationErrors.message = 'message is required';
      formIsValid = false;
    }

    if (!formIsValid) {
      setErrors(validationErrors);
      return;
    }

    createRecordApi(`/contacts`, data).then((res: any) => {
      if (res?.code === 200) {
        window.showToast(res?.message, 'success');
        setData(initialFormValues);
      }
    });
  };

  return (
    <div className='grid grid-cols-2 gap-5 pt-4'>
      <div className='col-span-2 md:col-span-1'>
        <div
          className={`flex items-center rounded-lg border p-2 ${errors.full_name && 'border border-red-500'}`}
        >
          <div>
            <img src={contactFormData.userIcons} alt='' />
          </div>
          <input
            type='text'
            name='full_name'
            value={data.full_name}
            onChange={handleChange}
            className='w-full px-5 py-2 outline-none'
            placeholder='Your Name'
          />
        </div>
        <div>{errors.full_name && <p className='text-red-500'>{errors.full_name}</p>}</div>
      </div>
      <div className='col-span-2 md:col-span-1'>
        <div
          className={`flex items-center rounded-lg border p-2 ${errors.email && 'border border-red-500'}`}
        >
          <div>
            <img src={contactFormData.mailIcons} alt='' />
          </div>
          <div>
            <input
              type='text'
              name='email'
              value={data.email}
              onChange={handleChange}
              className='w-full px-5 py-2 outline-none'
              placeholder='Your Email'
            />
          </div>
        </div>
        <div>{errors.email && <p className='text-red-500'>{errors.email}</p>}</div>
      </div>
      <div className='col-span-2 flex items-center rounded-lg border p-2'>
        <div className=''>
          <img src={contactFormData.callIcons} alt='' />
        </div>
        <input
          type='text'
          name='phone_number'
          value={data.phone_number}
          onChange={handleChange}
          className='w-full px-5 py-2 outline-none'
          placeholder='Your Phone No.'
        />
      </div>
      <div className='col-span-2'>
        <div className='flex rounded-lg border p-2'>
          <div className='mt-1.5'>
            <img src={contactFormData.commentIcons} alt='' />
          </div>
          <div>
            <textarea
              name='message'
              value={data.message}
              onChange={handleChange}
              className='w-full px-5 py-2 outline-none'
              placeholder='How can we help you?'
              rows={4}
            />
          </div>
        </div>
        <div>{errors.message && <p className='text-red-500'>{errors.message}</p>}</div>
      </div>
      <div className='mt-8'>
        <button
          type='button'
          onClick={handleSubmit}
          className='group/btn flex items-center gap-1 rounded-full bg-[#0044EB] px-10 py-4 uppercase text-white'
        >
          <span className='group-hover/btn:animate-out group-hover/btn:slide-out-to-top group-hover/btn:duration-500'>
            Send Request
          </span>
          <img src={contactFormData.arrowIcons} alt='image' />
        </button>
      </div>
    </div>
  );
};
