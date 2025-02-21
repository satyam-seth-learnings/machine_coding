export default function Pagination({
  page,
  pageCount,
  goToPrevPage,
  goToNextPage,
  goToPage,
}) {
  return (
    <div className="pagination">
      <button disabled={page === 0} onClick={goToPrevPage}>
        Prev
      </button>
      {[...Array(pageCount).keys()].map((pageIndex) => {
        return (
          <button
            key={pageIndex}
            disabled={page === pageIndex}
            onClick={() => goToPage(pageIndex)}
          >
            {pageIndex + 1}
          </button>
        );
      })}
      <button disabled={page === pageCount - 1} onClick={goToNextPage}>
        Next
      </button>
    </div>
  );
}
