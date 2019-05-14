import React from 'react';



export const higherOrderComponent = (WrappedComponent) => {
    class HOC extends React.Component {
        render() {
            return <WrappedComponent />;
        }
    }

    return HOC;
};


