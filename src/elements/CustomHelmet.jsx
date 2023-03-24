import { Helmet } from "react-helmet-async";

const CustomHelmet = ({ title, children }) => {
  return (
    <Helmet>
      <title>{title ? `YumYum | ${title}` : "YumYum"}</title>
      {children}
    </Helmet>
  );
};

export default CustomHelmet;
