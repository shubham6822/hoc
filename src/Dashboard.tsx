import React from 'react';
import withAuth from './utils/withAuth';

const Dashboard = ({ username }: { username: string }) => {
    return (
        <div>
            <h1>Welcome to the Dashboard</h1>
            <p>Hey, {username}! You're logged in and ready to go!</p>
        </div>
    );
};

export default withAuth(Dashboard);
