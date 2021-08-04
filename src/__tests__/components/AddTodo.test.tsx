import { render, screen } from "@testing-library/react";
import React from "react";

import { AddTodo, IAddTodoProps } from "../../redux-app";

const mockOnAdd = jest.fn();
const mockOnAlertClose = jest.fn();

const props: IAddTodoProps = {
    restrictedWordAlertOpen: false,
    onAdd: mockOnAdd,
    onAlertClose: mockOnAlertClose
}

describe("AddToDo", () => {
  it('should render AddTodo Component', ()=>{
    render(<AddTodo {...props}/>);
    const spansDom = screen.getAllByText("Add new task")
    expect(spansDom.length).toBe(2);
  })
})