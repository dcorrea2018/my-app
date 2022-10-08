import React from 'react';


export class CustomButtom extends React.Component {
    clickHandler() {
        console.log('buttom cliked');
    }
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            saludo: "Hola",
            loading: true
        };
        this.clickHandler = this.clickHandler.bind(this);

    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ loading: false });
        }, 5000);
    }
    clickHandler() {
        console.log('Buttom clicked');
        this.setState({ counter: this.state.counter + 1 });
    }

    render() {
        if (this.state.loading) {
            return <div className="lds-hourglass"></div>

        } else {
            return (
                <>

                    <br></br>
                    <button
                        style={{ marginTop: '20px' }} className='buttom red' onClick={this.clickHandler}>Boton de class component - {this.state.counter}
                    </button>
                </>
            );

        }

    }
}