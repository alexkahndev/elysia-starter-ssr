import { useState, useEffect } from 'react';

export const CookiePopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem('cookiesAccepted');
    const timeout = setTimeout(() => {
      setShowPopup(!hasAcceptedCookies);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <article className="Cookie__Popup">
          <figure>
            <h2>Want some cookies? 🍪</h2>
            <p>
              We use cookies to improve user experience and analyze website
              traffic. By clicking "Accept", you agree to our website's cookie use
              as described in our Cookie Policy.
            </p>
            <section>
              <button onClick={acceptCookies} className="Accept">Accept</button>
              <button onClick={() => setShowPopup(false)} className="Close">Close</button>
            </section>
          </figure>
        </article>
      )}
    </>
  );
};
