import { useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";

function AddTask() {
  const [task, setTask] = useState("");
  const [taskError, setTaskError] = useState("");

  const handleCreateTask = (event) => {
    event.preventDefault();
    // const form = event.currentTarget;
    setTaskError("");
  };
  const onChangeTaskInput = (el) => {
    setTask(el.target.value);
  };
  return (
    <Row className="mt-3">
      <Col xs={12} sm={10} md={10} lg={10} className="mx-auto">
        <Form onSubmit={handleCreateTask}>
          <Form.Group as={Row} className="mb-3" controlId="task-title">
            <Col sm="12" md="9">
              <InputGroup className="mb-3">
                <InputGroup.Text>Task Title</InputGroup.Text>
                <Form.Control
                  placeholder="e.g: Learn MERN with Ostaad"
                  aria-label="e.g: Learn MERN with Ostaad"
                  aria-describedby="task-title"
                  onChange={onChangeTaskInput}
                  value={task}
                />
                {taskError && <>Please Input Something</>}
              </InputGroup>
            </Col>
            <Col sm="12" md="3">
              <Button variant="info" id="enter-task" type="submit">
                Add Task
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </Col>
    </Row>
  );
}

export default AddTask;
