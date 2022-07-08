import Header from '../Header';
import { render, screen } from '@testing-library/react';


describe('Header Component', () => {

    it('make sure header is in the document', () => {
        render(<Header title="This is for testing purposes" />);
        const headingElement = screen.getByTestId('header');
        expect(headingElement).toBeInTheDocument();
    });


    it('make sure header text is rendered correctly', () => {
        render(<Header title="This is for testing purposes" />);
        const headingElement = screen.getByTestId('header');
        expect(headingElement).toHaveTextContent('This is for testing purposes');
    });

    it('make sure only one h1 is present in the component', () => {
        render(<Header title="This is for testing purposes" />);
        const headingElement = screen.queryAllByTestId('header');
        expect(headingElement).toHaveLength(1);
    });

});