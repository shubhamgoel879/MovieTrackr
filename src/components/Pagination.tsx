function Pagination({
  moveToNextPage,
  moveToPrevPage,
  pageNo,
}: {
  moveToNextPage: any;
  moveToPrevPage: any;
  pageNo: number;
}) {
  return (
    <div className="p-4 mt-8 flex justify-center">
      <div onClick={moveToPrevPage} className="px-8 hover:cursor-pointer hover:scale-125 duration-300">
        <i className="fa-solid fa-arrow-left"></i>
      </div>
      <div className="font-bold">{pageNo}</div>
      <div onClick={moveToNextPage} className="px-8 hover:cursor-pointer hover:scale-125 duration-300">
        <i className="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  );
}

export default Pagination;
