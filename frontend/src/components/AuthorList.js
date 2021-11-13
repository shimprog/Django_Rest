import React from 'react';
import {Table} from "react-bootstrap";
import {AuthorItem} from "./AuthorItem";

export const AuthorList = ({authors}) => {
    return (
        <main className="content">
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Birthday year</th>
                </tr>
                </thead>
                <tbody>
                {authors && authors.map((author, i) => <AuthorItem key={i} author={author}/>)}
                </tbody>
            </Table>
        </main>
    );
}
