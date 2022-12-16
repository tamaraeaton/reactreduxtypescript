import React, { useRef } from "react";

import {
  Container,
  ListGroup,
  ListGroupItem,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import { connect } from "react-redux";

import { deleteTodo, markComplete, markIncomplete } from "action/index";
import storeType from "types/storeType";
import AppPropType from "./AppPropType";

const App: React.FC<AppPropType> = ({
  complete,
  incomplete,
  deleteTodo,
  markComplete,
  markIncomplete,
}) => {
  const input = useRef<HTMLInputElement>(null);

  const renderList = (type: "Complete" | "Incomplete") => {
    const looper = type === "Complete" ? complete : incomplete;
    return (
      <ListGroup variant="flush" className="m-2">
        <h3>{type}</h3>
        {looper.map((todo, index) => {
          return (
            <ListGroupItem
              key={index}
              variant={type === "Complete" ? "success" : "danger"}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div>{todo}</div>
              <div>
                <i
                  className={`fas fa-${
                    type === "Complete" ? "minus" : "check"
                  } m-2`}
                  onClick={() => {
                    type === "Complete"
                      ? markIncomplete(todo)
                      : markComplete(todo);
                  }}
                ></i>
                <i
                  className="fas fa-trash m-2"
                  onClick={() => deleteTodo(todo)}
                ></i>
              </div>
            </ListGroupItem>
          );
        })}
      </ListGroup>
    );
  };

  const addTodo = () => {
    if (input.current) {
      const val = input.current.value;
      input.current.value = "";
      markIncomplete(val);
    }
  };

  return (
    <Container>
      <InputGroup className="m-3">
        <FormControl placeholder="Todo" ref={input} />
        <InputGroup>
          <Button variant="secondary" onClick={() => addTodo()}>
            <i className="fas fa-plus mr-3"></i>
            Add
          </Button>
        </InputGroup>
      </InputGroup>
      {renderList("Incomplete")}
      {renderList("Complete")}
    </Container>
  );
};

const mapStateToProps = (state: storeType) => {
  return {
    complete: state.complete,
    incomplete: state.incomplete,
  };
};

export default connect(mapStateToProps, {
  deleteTodo,
  markComplete,
  markIncomplete,
})(App);
