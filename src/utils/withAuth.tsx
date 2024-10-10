import React from 'react';

// The Higher-Order Component
const withAuth = (WrappedComponent: React.ComponentType) => {
    return (props: any) => {
        const isAuthenticated = false;

        if (!isAuthenticated) {
            return <p>Not authenticated</p>;
        }
        return <WrappedComponent {...props} />;
    };
};

export default withAuth;
