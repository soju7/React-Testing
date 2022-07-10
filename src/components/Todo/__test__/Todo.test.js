import Todo from '../Todo';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { render, screen,fireEvent } from '@testing-library/react';


describe('TODO Component', () => {
    const MockTodo=()=>{
        return (
          <BrowserRouter>
            <Todo/>
          </BrowserRouter>
        )
    }
    it('should add TODO correctly', () => {
        render(<MockTodo/>);
        const inputElement = screen.getByTestId('add-todo-input');  
        const buttonElement = screen.getByTestId('add-todo-btn');      
        fireEvent.change(inputElement, {target: {value: 'Play Football tonight'}});
        fireEvent.click(buttonElement);
        const todoItems = screen.queryByTestId('todo-items');
        expect(todoItems).toBeInTheDocument();
    });

    it('should list correct number of todos', () => {
        render(<MockTodo/>);
        const inputElement = screen.getByTestId('add-todo-input');  
        const buttonElement = screen.getByTestId('add-todo-btn'); 

        fireEvent.change(inputElement, {target: {value: 'Play Football tonight'}});
        fireEvent.click(buttonElement);
         
        fireEvent.change(inputElement, {target: {value: 'Take a nap'}});
        fireEvent.click(buttonElement);

        const todoItems = screen.getAllByTestId('todo-items');
        expect(todoItems).toHaveLength(2);
    });

    it('should mark a TODO as complete when click on the TODO', () => {
        render(<MockTodo/>);
        const inputElement = screen.getByTestId('add-todo-input');  
        const buttonElement = screen.getByTestId('add-todo-btn'); 

        fireEvent.change(inputElement, {target: {value: 'Play Football tonight'}});
        fireEvent.click(buttonElement);
         
        fireEvent.change(inputElement, {target: {value: 'Take a nap'}});
        fireEvent.click(buttonElement);

        const divElement = screen.getByText(/Take a nap/i);
        fireEvent.click(divElement);
        expect(divElement).toHaveClass('todo-item-active');
    });
});