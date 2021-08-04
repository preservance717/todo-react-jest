import { addTodo, ADD_TODO, IAddTodo } from "../../redux-app";

describe('TodoActions', () => {
  afterEach(() => expect.hasAssertions());

  it("should return ADD_TODO as a type for the action", () => {
    const result: IAddTodo = addTodo('Bhopal');
    expect(result.type).toBe(ADD_TODO);
  })

})