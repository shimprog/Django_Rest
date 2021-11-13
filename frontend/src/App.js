import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {AuthorList} from "./components/AuthorList";
import {Footer} from "./components/Footer";
import {useEffect, useState} from "react";
import {Header} from "./components/Header";

function App() {
    const [authors, setAuthors] = useState('')
    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/authors/')
            .then(result => result.json())
            .then(data => setAuthors(data))
    }, [])
    return (
            <div className="container py-3">
                <Header/>
                <AuthorList authors={authors}/>
                <Footer/>
            </div>
    );
}

export default App;
