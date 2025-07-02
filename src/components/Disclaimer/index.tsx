import React from "react";

const Disclaimer = () => {
  return (
    <div className="container mx-auto text-xs text-[#0825527a] my-20 max-md:px-4">
      <p>
        <span className="font-semibold">Disclaimer:</span> This website is
        provided for informational and educational purposes only and does not
        constitute financial advice. The information presented is general in
        nature and not tailored to your personal financial situation. You should
        always consult with a licensed financial advisor for personalized
        advice.
      </p>
      <br />

      <p>
        Some of the financial data displayed on this website is sourced via
        third-party APIs, including but not limited to Yahoo Finance. While we
        strive to provide accurate and timely data, we do not control or
        guarantee the accuracy, completeness, or reliability of third-party data
        sources.
      </p>
      <br />

      <p>
        We may include links to external websites for your convenience. We do
        not control or endorse those sites and are not responsible for their
        content, availability, or accuracy. The information and tools on this
        site — including those powered by third-party data — are for educational
        and informational purposes only. They should not be considered financial
        advice.
      </p>
    </div>
  );
};

export default Disclaimer;
