import React, {useEffect} from 'react'
import MainLayout from "./layouts/Mainlayout";
import {useDispatch, useSelector} from "react-redux";
import {fetchItems} from "./redux/actions/getAllItems";
import {BrowserRouter as Router} from "react-router-dom";


function App() {
    const items = useSelector(state => state.items)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchItems())
    }, [dispatch])


    return (
        <div className="App">
            <Router>
                <MainLayout pages={items}/>
            </Router>
        </div>
    );
}

export default App;
