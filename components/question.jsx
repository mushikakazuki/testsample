export function Question(props) {
  return (
    <>
      <div className="h-screen clear-both block overflow-hidden">
        <div className="flex h-16 bg-gray-200 justify-center items-center">
          {props.questions}
        </div>
        <div className=" bg-gray-100 h-full flex justify-center items-center">
          <form className="flex w-1/2 justify-around">
            <button className="bg-red-300 hover:bg-red-600 text-white font-bold py-2 px-4 rounded w-1/3">
              {props.ans1}
            </button>
            <button className="bg-red-300 hover:bg-red-600 text-white font-bold py-2 px-4 rounded w-1/3">
              {props.ans2}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
