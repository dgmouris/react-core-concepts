
import React from 'react';

const secretToLife = (WrappedComponent) => {
    class HOC extends React.Component {
        state = {
            name: function test(jest) { return jest },
        }

        jim = () => {
            return "jim foley"
        }
        render() {
            console.log(this.state.jim)
            return (
                <WrappedComponent {...this.props} secretToLife={42} jim={this.jim()} name={this.state.name} />
            );
        }
    }

    return HOC;
};

export default secretToLife;
