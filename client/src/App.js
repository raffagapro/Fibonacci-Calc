import React from "react";

const App = () => {
    return(
        <div className="container mt-3">
            <h1 className="text-center">Calculate Fibonacci!</h1>
            <form className="row g-3 justify-content-center">
                <div className="col-auto">
                    <input type="number" className="form-control" placeholder="Number" />
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-primary mb-3">Calculate</button>
                </div>
            </form>
        </div>
    );
}

export default App;