import { Alert, Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import style from "./Tasks.module.css";
function AddTask({
  task,
  createTask,
  onChangeTaskInput,
  taskError,
  setTaskError,
}) {
  return (
    <Row className="mt-3">
      <Col xs={12} sm={10} md={10} lg={10} className="mx-auto">
        <Form onSubmit={createTask}>
          {taskError && (
            <>
              <Row>
                <Col sm="12" md="11">
                  <Alert
                    size="sm"
                    variant="danger"
                    onClose={() => setTaskError("")}
                    dismissible
                  >
                    <p className="mb-0">{taskError}</p>
                  </Alert>
                </Col>
              </Row>
            </>
          )}
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
              </InputGroup>
            </Col>
            <Col sm="12" md="3">
              <Button
                className={style.addTaskBtn}
                variant="info"
                id="enter-task"
                type="submit"
              >
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
