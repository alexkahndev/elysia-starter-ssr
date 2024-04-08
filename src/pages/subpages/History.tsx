import { Timeline } from '../../components/content/Timeline';
import { Helmet } from 'react-helmet';

const History = () => {
  return (
    <>
      <Helmet>
        <title>History - Awesome.Social</title>
      </Helmet>
      <main>
        <h1>History</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <Timeline />
      </main>
    </>
  );
};

export default History;
