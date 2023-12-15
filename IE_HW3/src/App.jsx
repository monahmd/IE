import './index.css';
import Table from "./components/Table.jsx";
import {useEffect, useRef, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import Paginate from "./components/Paginate.jsx";
import DataNavbar from "./components/DataNavbar.jsx";


function App() {
    const [data, setData] = useState([]);
    const rawData = useRef([]);
    const filters = useRef({
        name: "",
        date: "",
        title: "",
        field: ""
    })
    const allDataLength = useRef(data.length);
    const pathname = useLocation().pathname;
    const pathNumber = pathname[1] === undefined ? 1 : parseInt(pathname[1]);
    const navigator = useNavigate();

    useEffect(() => {
        function spliceData(dd) {
            const start = (pathNumber - 1) * 20;
            return dd.slice(start, 20 + start);
        }

        fetch('/data.json').then(res => {
            res.json().then(d => {
                allDataLength.current = d.length;
                const spliced = spliceData(d);
                rawData.current = spliced;
                setData(spliced);
            })
        })
    }, [pathNumber])

    function nextPage() {
            navigator('/' + (pathNumber + 1));
    }

    function prevPage() {
        navigator('/' + (pathNumber - 1));
    }

    function gotoPage(page) {
        navigator('/' + page);
    }

    function filter(key, value) {
        filters.current[key] = value;
        let temp = rawData.current;
        let flag = true;
        Object.keys(filters.current).forEach((keyItem) => {
                    if (filters.current[keyItem] !== "") {
                        flag = false;
                        temp = temp.filter(item => item[keyItem].includes(filters.current[keyItem]));
                        setData(temp);
                    }
            }
        )

        flag && setData(rawData.current);

    }

    function sortData(field) {
        const temp = data;
        temp.sort((a, b) => a[field].localeCompare(b[field]));
        setData([...temp]);
    }

  return (
    <>
        <div className="d-flex">
            <div className="w-25">
                <DataNavbar key={pathNumber} filter={filter} sortData={sortData}/>
                <Paginate hasNextPage={(pathNumber * 20 < allDataLength.current)} hasPrevPage={pathNumber > 1} length={(allDataLength.current / 20)} currentPage={pathNumber - 1} nextPage={nextPage} prevPage={prevPage} gotoPage={gotoPage}/>
            </div>
            <div>
                <Table data={data}/>
            </div>
        </div>
    </>
  )
}

export default App
