import { Col } from "react-bootstrap";

export const Activities = ({ title, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="activities">
        <img src={imgUrl} />
        <div className="act-details">
          <h4>{title}</h4>
        </div>
      </div>
    </Col>
  )
}