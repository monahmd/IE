import {Pagination} from "react-bootstrap";

export default function Paginate({hasNextPage, hasPrevPage, length, currentPage, prevPage, nextPage, gotoPage}) {
    return (
        <>
           <div className="d-flex justify-content-center mt-3">
               <Pagination>
                   {hasPrevPage && <Pagination.Prev onClick={prevPage}/>}
                   {
                       Array.from({length: length}).map((_, num) =>  <Pagination.Item onClick={() => gotoPage(num + 1)} key={num} active={num  === currentPage}>{num + 1}</Pagination.Item>)
                   }
                   {hasNextPage && <Pagination.Next onClick={nextPage}/>}

               </Pagination>
           </div>
        </>
    );
}