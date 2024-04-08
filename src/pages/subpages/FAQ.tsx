import { Accordion } from '../../components/content/Accordion';
import { Helmet } from 'react-helmet';

const FAQ = () => {
  return (
    <>
      <Helmet>
        <title>FAQs - Awesome.Social</title>
      </Helmet>
      <main>
        <h1>FAQs</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <Accordion summary="What is Awesome.Social?">
          <p>
            Awesome.Social is a social media platform for developers. It's built
            with Bun and Elysia, and it's awesome!
          </p>
        </Accordion>
        <Accordion summary="How do I sign up?">
          <p>Click the "Sign Up" button and fill out the form. It's that easy!</p>
        </Accordion>
        <Accordion summary="How do I post?">
          <p>Click the "Post" button and fill out the form. It's that easy!</p>
        </Accordion>
        <Accordion summary="How do I follow someone?">
          <p>Click the "Follow" button on their profile. It's that easy!</p>
        </Accordion>
        <Accordion summary="How do I unfollow someone?">
          <p>Click the "Unfollow" button on their profile. It's that easy!</p>
        </Accordion>
        <Accordion summary="How do I block someone?">
          <p>Click the "Block" button on their profile. It's that easy!</p>
        </Accordion>
        <Accordion summary="How do I unblock someone?">
          <p>Click the "Unblock" button on their profile. It's that easy!</p>
        </Accordion>
        <Accordion summary="How do I report someone?">
          <p>Click the "Report" button on their profile. It's that easy!</p>
        </Accordion>
        <Accordion summary="How do I delete my account?">
          <p>
            Click the "Delete Account" button in your settings. It's that easy!
          </p>
        </Accordion>
        <Accordion summary="How do I contact support?">
          <p>
            Click the "Contact Support" button in your settings. It's that easy!
          </p>
        </Accordion>
      </main>
    </>
  );
};

export default FAQ;
