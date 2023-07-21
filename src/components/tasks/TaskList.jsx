import React from "react";
import { Col, Row } from "react-bootstrap";
import SingleTask from "./SingleTask";

export default function TaskList({ tasks }) {
  return (
    <Row xs={1} md={2} className="g-4">
      {tasks && tasks.length > 0 ? (
        tasks.map((task) => (
          <Col key={task.id}>
            <SingleTask task={task} />
          </Col>
        ))
      ) : (
        <Col>
          <div className={`box`}>
            <p className="box-text">No Tasks Added Yet</p>
          </div>
        </Col>
      )}
    </Row>
  );
}
