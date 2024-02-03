import React from 'react';

function GoogleMap() {
  return (
    <div className="google-map pt-3">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14920.891757756479!2d-73.83496372506556!3d40.8623107607295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c28cbc17f4a0c3%3A0x9ae0f1e804a817d!2s121%20Einstein%20Loop%20N%2C%20Bronx%2C%20NY%2010475%2C%20USA!5e0!3m2!1sen!2sth!4v1650470337727!5m2!1sen!2sth"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        title="re"
        loading="lazy"></iframe>
    </div>
  );
}

export default GoogleMap;
