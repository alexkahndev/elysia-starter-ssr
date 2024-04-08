import { ServiceCards } from "../../components/content/ServiceCards";
import { Helmet } from "react-helmet";

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Services - Awesome.Social</title>
      </Helmet>
      <main>
        <ServiceCards />
      </main>
    </>
  );
};

export default Services;
