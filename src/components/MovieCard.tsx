
function MovieCard({ imagePath, movieName }: { imagePath: string; movieName: string }) {
  return (
    <div
      className="m-5 h-[50vh] w-[220px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer "
      style={{ backgroundImage: `url(https://www.thetvdb.com${imagePath})` }}
    >
      <div className="rounded-xl text-white bg-gray-900 text-center w-full bg-blue-900/60">
        {movieName}
      </div>
    </div>
  );
}

export default MovieCard;
