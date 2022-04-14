import React, {useState} from "react";
import axios from 'axios';
import Loader from "./components/Loader";

const App = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');
    const [loading, setLoading] = useState(false);

    const submitHandler = async e => {
        e.preventDefault();
        setLoading(true);
        const result = await axios.get(`http://localhost:3000/api/fibonacci/${input}`);
        setLoading(false);
        setResult(result.data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    }

    return(
        <div className="container mt-3">
            <div className="row ms-3 me-5 justify-content-center">
                <form className="col-4 card main-color m-2 p-0" onSubmit={e => submitHandler(e)}>
                    <div className="card-header main-color m-0 text-center fs-30 text-white">Calculator</div>
                    <div className="card-body tertiary-color col-auto">
                        <input type="number" className="form-control" onChange={e => setInput(e.target.value)} value={input} min={0} placeholder="Number" />
                    </div>
                    <button type="submit" className={`card-footer secondary-color col-auto btn btn-primary myBtn ${input === '' || loading ? 'disabled':null}`}>
                        {loading ? <Loader /> : null}
                        Fibonaccify!
                    </button>
                </form>
                <div className="col-7 card m-2 main-color">
                    <div className="res-title">Result:</div>
                    <div className="row res-title text-center align-items-center result-cont">
                        {loading ? <h1>Calculating...</h1> : result !== '' ? <h1>{result}</h1> : null }
                    </div>
                </div>
            </div>
            <div className="row ms-3 me-5 justify-content-center">
                <small className="text-white text-center">Made by Chris Luna</small>
            </div>
        </div>
    );
}

export default App;