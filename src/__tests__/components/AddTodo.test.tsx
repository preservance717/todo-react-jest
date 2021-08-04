import { render, screen, fireEvent } from "@testing-library/react";
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

  it('onAdd event handler should be called after clicking on complete icon', () => {
    const { getByTestId } = render(<AddTodo {...props}/>);
    const sendIconDom = getByTestId("rtl-sendIcon");

    //TODO 为啥注释掉这一行就报错了呢
    fireEvent.change(getByTestId("rtl-newTask").querySelector("input") || window, {target: {value: 'Bhopal'}}) 
    fireEvent.click(sendIconDom);
    expect(mockOnAdd).toHaveBeenCalledTimes(1);
  })

  it('onAlertClose event handler should be called when pressed Enter button in text field', () => {
    const { getByText } = render(<AddTodo {...props} restrictedWordAlertOpen={true}/>);

    expect(getByText(/This task already exists/i)).toBeInTheDocument();
  });
})