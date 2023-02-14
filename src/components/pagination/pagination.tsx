interface PaginationProps {
  pagesNumber: number;
  activePage: number;
  onChangePage: (page: number) => void;
}
const Pagination = ({
  pagesNumber,
  activePage,
  onChangePage,
}: PaginationProps) => {
  const mapPages = (pagesNumber: number, activePage: number) => {
    const start = (
      <button
        className={
          activePage === 1 ? "active-page paginate-item" : "paginate-item"
        }
        onClick={() => onChangePage(1)}
        key={1}
      >
        1
      </button>
    );
    const end = (
      <button
        className={
          activePage === pagesNumber
            ? "active-page paginate-item"
            : "paginate-item"
        }
        onClick={() => onChangePage(pagesNumber)}
        key={pagesNumber}
      >
        {pagesNumber}
      </button>
    );
    const middle = [];
    const middleStart = activePage - 3 > 1 ? activePage - 3 : 2;
    const middleEnd =
      activePage + 6 < pagesNumber ? activePage + 6 : pagesNumber - 1;

    for (let i = middleStart; i <= middleEnd; i++) {
      if (i < pagesNumber) {
        middle.push(
          <button
            className={
              activePage === i ? "active-page paginate-item" : "paginate-item"
            }
            onClick={() => onChangePage(i)}
            key={i}
          >
            {i}
          </button>
        );
      }
    }
    const result = [start];
    middleStart > 2 &&
      result.push(
        <span key={"between1"} className="three-dots">
          ...
        </span>
      );
    result.push(...middle);
    middleEnd < pagesNumber - 1 &&
      result.push(
        <span key={"between2"} className="three-dots">
          ...
        </span>
      );
    pagesNumber > 1 && result.push(end);

    return result;
  };
  return (
    <div className="pagination-block">
      {pagesNumber > 1 && (
        <div className="pagination-list">
          {mapPages(pagesNumber, activePage)}
        </div>
      )}

      <span className="page-mark">
        Page {activePage} of {pagesNumber}
      </span>
    </div>
  );
};
export default Pagination;
