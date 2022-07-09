import ReactDom from 'react-dom';
import AddInput from '../AddInput';
import { BrowserRouter } from 'react-router-dom';
import { render, screen,fireEvent } from '@testing-library/react';

const mockedSetTodo=jest.fn();

describe('Add TODO Component', () => {

    it('should render input element', () => {
        render(<AddInput
                    todos={[]}
                    setTodos={mockedSetTodo}         
               />);      
        
        const inputElement = screen.getByTestId('add-todo-input');
        expect(inputElement).toBeInTheDocument();
    });

    it('can add a TODO', () => {
        render(<AddInput
                    todos={[]}
                    setTodos={mockedSetTodo}         
               />);      
        
        const inputElement = screen.getByTestId('add-todo-input');
        fireEvent.change(inputElement, {target: {value: 'Play Football tonight'}})
        expect(inputElement.value).toBe('Play Football tonight');
    });

    it('should have empty input when button is clicked', () => {
        render(<AddInput
                    todos={[]}
                    setTodos={mockedSetTodo}         
               />);      
        
        const inputElement = screen.getByTestId('add-todo-input');
        const buttonElement = screen.getByTestId('add-todo-btn');
        fireEvent.change(inputElement, {target: {value: 'Play Football tonight'}});
        fireEvent.click(buttonElement);
        expect(inputElement.value).toBe('');
    });
});