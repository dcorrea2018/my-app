import React from 'react';

function clickHandler() {
    console.log('buttom cliked');
}
export class CustomButtom extends React.Component {
    render() {
        return (
            <button
                style={{ marginTop: '20px' }} className='buttom red' onClick={clickHandler}>Boton de class component</button>
        );

    }
}