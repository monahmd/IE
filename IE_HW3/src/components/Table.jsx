import {useLayoutEffect, useState} from "react";

export default function Table({data}) {
    const [stars, setStars] = useState([]);

    useLayoutEffect(() => {
        const storedStars = JSON.parse(localStorage.getItem('stars') || '[]');
        setStars(storedStars);
    }, []);

    function starRow(id) {
        const storedStars = JSON.parse(localStorage.getItem('stars') || '[]');
        storedStars.push(id);
        setStars(storedStars);
        localStorage.setItem('stars', JSON.stringify(storedStars));
    }
    return(
        <>
            <table>
                <thead>
                <tr>
                    <th>نام آگهی</th>
                    <th>نام تغییر دهنده</th>
                    <th>فیلد</th>
                    <th>مقدار قدیمی</th>
                    <th>مقدار جدید</th>
                    <th>تاریخ</th>
                </tr>
                </thead>
                {data.map(item =>
                    <tbody className={stars.includes(item.id) ? 'stared-row' : ''} key={item.id} onClick={() => starRow(item.id)}>
                    <tr>
                        <td>
                            {item.title}
                        </td>
                        <td>
                            {item.name}
                        </td>
                        <td>
                            {item.field}
                        </td>
                        <td>
                            {item.old_value}
                        </td>
                        <td>
                            {item.new_value}
                        </td>
                        <td>
                            {item.date}
                        </td>
                    </tr>
                    </tbody>
                    )}
            </table>
        </>
    );
}