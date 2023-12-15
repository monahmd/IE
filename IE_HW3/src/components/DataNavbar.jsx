import {Navbar} from "react-bootstrap";

export default function DataNavbar({filter, sortData}) {
    return (
        <>
            <Navbar expand="lg">
                <div className="d-flex flex-column mx-auto">
                    <div className="d-flex flex-column">
                        <label htmlFor="name">:نام تغییر دهنده</label>
                        <input className="rounded mx-3" type="text" name="name" onInput={(e) => filter('name', e.currentTarget.value)}/>
                    </div>
                    <div className="d-flex flex-column">
                        <label htmlFor="date">:تاریخ</label>
                        <input className="rounded mx-3" type="text" name="date" onInput={(e) => filter('date', e.currentTarget.value)}/>
                    </div>
                    <div className="d-flex flex-column">
                        <label htmlFor="title">نام آگهی:</label>
                        <input className="rounded mx-3" type="text" name="title" onInput={(e) => filter('title', e.currentTarget.value)}/>
                    </div>
                    <div className="d-flex flex-column">
                        <label htmlFor="field">:فیلد</label>
                        <input className="rounded mx-3" type="text" name="field" onInput={(e) => filter('field', e.currentTarget.value)}/>
                    </div>
                    <div className="px-4 mt-3">
                        <label className="mx-3" htmlFor="sort">مرتب سازی:</label>
                        <select defaultValue="selected" name="sort" id="cars" onInput={(e) => e.currentTarget.value !== "selected" && sortData(e.currentTarget.value)}>
                            <option value="selected">انتخاب کنید</option>
                            <option value="name">نام</option>
                            <option value="date">تاریخ</option>
                            <option value="title">عنوان</option>
                            <option value="field">فیلد</option>
                        </select>
                    </div>
                </div>
            </Navbar>
        </>
    );
}