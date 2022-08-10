import React from "react";
import { Container } from "react-bootstrap";

const Description = ({ description }) => {
  const performance = [
    {
      heading: "Best-case time complexity",
      value: description?.bestCase,
    },
    {
      heading: "Average time complexity",
      value: description?.avgCase,
    },
    {
      heading: "Worst-case time complexity",
      value: description?.worstCase,
    },

    {
      heading: "Worst-case space complexity",
      value: description?.space,
    },
  ];
  return (
    <Container className="text-start">
      <hr />
      <h1 className="mb-5">{description?.title || "Select Algorithm"}</h1>
      <div className="row">
        <div className="col-12 col-md-6 border-end pe-md-5 description">
          <p>
            {description?.desc ||
              "You must select an algorithm before you can visualize it's execution on an array of numbers."}
          </p>
        </div>

        <div className="col-12 col-md-6 mt-4 mt-md-0 ps-md-5 ">
          <h3 className="mb-4">Performance</h3>
          <table>
            <tbody>
              {performance.map((data, index) => (
                <tr key={index} className="lh-lg">
                  <td>{data?.heading}</td>
                  <td className="px-4">{data?.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
};

export default Description;
