function clickHandler() {
    console.log('buttom clicked from function componetn');
}



export function CustomButtom2() {
    return (<button style={{ marginTop: '20px' }} className='buttom green' onClick={clickHandler}>Boton de class component</button>
    );
}

//export default CustomButtom2;