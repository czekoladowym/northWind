type Pagination = {
  contentPerPage: number;
  totalContent: number;
  paginate: Function;
};

export const Pagination = ({
  contentPerPage,
  totalContent,
  paginate,
}: Pagination) => {
  const pageNum = [];
  for (let i = 1; i <= Math.ceil(totalContent / contentPerPage); i++) {
    pageNum.push(i);
  }

  return (
    <div className="pagination-block">
      <ul className="pagination-list">
        {pageNum.map((number) => (
          <div>
            <div className="paginate-item" key={number}>
              <a
                onClick={() => paginate(number)}
                href="#"
                className="paginate-link"
              >
                {number}
              </a>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};
