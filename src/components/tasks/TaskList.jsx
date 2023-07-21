import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import SingleTask from "./SingleTask";

export default function TaskList({ tasks, deleteTask, markComplete }) {
  return (
    <Row xs={1} md={2} className="g-4">
      {tasks && tasks.length > 0 ? (
        tasks.map((task) => (
          <Col key={task.id}>
            <SingleTask
              task={task}
              deleteTask={deleteTask}
              markComplete={markComplete}
            />
          </Col>
        ))
      ) : (
        <Col className="mx-auto">
          <Card bg={"warning"}>
            <Card.Body className="text-center p-4">No Tasks Left !!!</Card.Body>
          </Card>
        </Col>
      )}
    </Row>
  );
}
