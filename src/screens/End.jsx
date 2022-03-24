import React from 'react';
import Button from '../components/Button';
import present from '../img/present.svg';

function End(props) {
  return (
    <div className='screen'>
      <img src={present} alt='Present' />
      <p className='text-accent' style={{ marginTop: '0.8rem' }}>
        We've found some awesome frames for you!
      </p>
      <p className='text-additional' style={{ marginTop: '1rem' }}>
        Send the results to your email to receive special discounts.
      </p>
      <Button
        onClick={props.onSend}
        className='align-self-center'
        text='Send'
        style={{ marginTop: '3rem' }}
      />
      <p
        className='btn-transparent text-small fixed-bottom fixed-centered'
        style={{ marginBottom: '1.5rem', width: '90%' }}
        onClick={props.onNext}
      >
        By clicking 'Send' you agree to our Terms of Use & Privacy Policy and
        receiving promotion emails
      </p>
    </div>
  );
}

export default End;
