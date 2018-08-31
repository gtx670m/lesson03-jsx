import React, { Component } from 'react';

class User extends Component {
    render() {
        var users = [
            {
                id: 1,
                name: 'Nguyen Van A',
                age: 18
            },
            {
                id: 2,
                name: 'Nguyen Van B',
                age: 18
            },
            {
                id: 3,
                name: 'Nguyen Van C',
                age: 18
            }
        ];
        var elements = users.map((user, index) => {
            return (
                <div key={user.id}>
                    <h2>Tên: {user.name}</h2>
                    <p>Tuổi: {user.age}</p>
                </div>
            )
        });
        return (
            <div>
                {elements}
            </div>
        );
    }
}

export default User;
