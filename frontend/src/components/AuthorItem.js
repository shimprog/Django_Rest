import React from 'react';

export const AuthorItem = ({author}) => {
    return (
        <tr>
            <td>{author.first_name}</td>
            <td>{author.last_name}</td>
            <td>{author.birthday_year}</td>
        </tr>
    );
};

