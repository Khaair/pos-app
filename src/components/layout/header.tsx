const Header = () => {
  return (
    <div className="bg-[black] py-3">
      <div className="container">
        <div className="flex justify-between ">
          <div>
            <img
              src="http://demo.martvill.techvill.net/Modules/Pos/Resources/js/components/assets/images/company.svg"
              alt=""
            />
          </div>
          <div>
            <button className="bg-[#FCCA19]  text-black font-bold py-2 px-4 rounded w-full">
              POS APP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
