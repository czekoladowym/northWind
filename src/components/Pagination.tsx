export const Pagination = (contentPerPage: any, totalContent: any) => {
  const pageNum = [];
  for (let i = 1; i <= Math.ceil(totalContent / contentPerPage); i++) {
    pageNum.push(i);
  }
  return (
    <div className="pagination-block">
      <ul className="pagination">
        {pageNum.map((number) => (
          <button className="page-coll" key={number}>
            <a href="!#" className="page-link">
              {number}
            </a>
          </button>
        ))}
      </ul>
    </div>
  );
};
