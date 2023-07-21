import React from "react";
import { Button } from "react-bootstrap";
import convertTimestamp from "../../utils/convertTimestamp";
import style from "./Tasks.module.css";

export default function SingleTask({ task, deleteTask, markComplete }) {
  const { id, title, isMarked } = task || {};
  const createdAt = convertTimestamp(id);

  return (
    <div
      className={`position-relative box ${
        isMarked ? style.marked : style.unmarked
      }`}
    >
      {isMarked && <div className="ribbon-2">Completed</div>}
      {!isMarked && (
        <div className="position-absolute top-0 end-0 mt-2 me-3">
          Task Created At: {createdAt}
        </div>
      )}

      <div className="position-absolute bottom-0 end-0">
        <Button
          size="sm"
          variant="danger"
          className="me-2 mb-2"
          onClick={() => deleteTask(id)}
        >
          Delete
        </Button>
        {!isMarked && (
          <Button
            size="sm"
            variant="success"
            className="me-2 mb-2"
            onClick={() => markComplete(id)}
          >
            Mark As Completed
          </Button>
        )}
      </div>
      {isMarked ? (
        <p className="box-text">
          <del>{title}</del>
        </p>
      ) : (
        <p className="box-text">{title}</p>
      )}
    </div>
  );
}
