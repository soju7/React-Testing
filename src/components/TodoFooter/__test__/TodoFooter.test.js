import ReactDom from 'react-dom';
import TodoFooter from '../TodoFooter';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';


describe('Footer Component', () => {

    const MockTodoFooter=({numberOfIncompleteTasks})=>{
        return (
          <BrowserRouter>
            <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
          </BrowserRouter>
        )
    }
    it('make sure tasks number are rendered correctly', () => {
        render(<MockTodoFooter numberOfIncompleteTasks={5}/>);      
        
        const paragraphElement = screen.getByTestId('tasks-left');
        expect(paragraphElement).toHaveTextContent('5 tasks left');
    });

    it('make sure singular tasks are rendered correctly', () => {
        render(<MockTodoFooter numberOfIncompleteTasks={1}/>);      
        
        const paragraphElement = screen.getByTestId('tasks-left');
        expect(paragraphElement).toHaveTextContent('1 task left');
    });

});