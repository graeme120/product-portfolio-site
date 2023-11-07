import React from "react";
import { Helmet } from "react-helmet";

const GoogleAnalytics = ({ trackingId }) => {
  // Return null if the tracking ID was not provided
  if (!trackingId) {
    return null;
  }

  return (
    <Helmet>
      {/* Google Analytics */}
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`}
      ></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${trackingId}', {
            page_path: window.location.pathname,
          });
        `}
      </script>
    </Helmet>
  );
};

export default GoogleAnalytics;
