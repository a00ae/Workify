const Login = () => {
  return (
    <div className="min-h-screen w-full   bg-[#0a0a0c] p-8 text-white">
      <div className="continer h-screen w-[50%]  relative ">
        <div
          style={{ padding: 3 }}
          className="w-25 h-15 shadow-(--shadow-login-white)  absolute left-15 top-20 rounded-sm flex justify-center items-center">
          <div className="w-full h-full bg-[#1e1e20] shadow-(--shadow-login-white2) rounded-[3px] flex ">
            {/* ^Regiht-Box */}
            <div className="right-box w-1/2 h-full ">
              <div className="w-full h-1/2 flex justify-center items-center gap-1 flex-wrap !px-1.5 !py-1">
                {Array.from({ length: 10 }).map((_, index) => (
                  <span
                    key={index}
                    style={{ width: 2, height: 2, borderRadius: 1 }}
                    className={`inline-block  shadow-(--shadow-circle)  ${index === 6 || index === 9 ? "bg-mist-600" : ""}`}></span>
                ))}
              </div>
            </div>

            {/* Left-Box */}
            <div className="left-box w-1/2 h-full flex items-end">
              <div className="w-full h-1/2 flex justify-center items-center gap-1 flex-wrap-reverse !px-1.5 !py-1">
                {Array.from({ length: 10 }).map((_, index) => (
                  <span
                    key={index}
                    style={{ width: 2, height: 2, borderRadius: 1 }}
                    className={`inline-block  shadow-(--shadow-circle)  ${index === 6 || index === 9 ? "bg-mist-600" : ""}`}></span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-15 h-15 left-0 top-20 flex flex-col justify-around items-end !py-5">
          <span
            style={{ background: "var(--bg-linear)" }}
            className="arrow  w-7 h-0.5 shadow-(--shadow-arow) "></span>
          <span
            style={{ background: "var(--bg-linear)" }}
            className="arrow  w-7 h-0.5 shadow-(--shadow-arow) "></span>
          <span
            style={{ background: "var(--bg-linear)" }}
            className="arrow  w-7 h-0.5 shadow-(--shadow-arow) "></span>
        </div>

        <svg className="absolute top-5 left-38 w-full h-screen " >
          <path d="M 10 100 L 200 100 L 290 190 V 320 L 350 380 " stroke="#616161" fill="none"/>
          <path d="M 10 700 L 200 700 L 290 610 V 510 L 350 465" stroke="#616161" fill="none"/>
        </svg>
        {/* <svg className="absolute bottom-50 left-38  w-full h-full"  >
          <path d="M 10 100 L 200 100"></path>

        </svg> */}


        {/* tow */}
        <div
          style={{ padding: 3 }}
          className="w-25 h-15 shadow-(--shadow-login-white)  absolute left-15 bottom-20 rounded-sm flex justify-center items-center">
          <div className="w-full h-full bg-[#1e1e20] shadow-(--shadow-login-white2) rounded-[3px] flex ">
            {/* ^Regiht-Box */}
            <div className="right-box w-1/2 h-full ">
              <div className="w-full h-1/2 flex justify-center items-center gap-1 flex-wrap !px-1.5 !py-1">
                {Array.from({ length: 10 }).map((_, index) => (
                  <span
                    key={index}
                    style={{ width: 2, height: 2, borderRadius: 1 }}
                    className={`inline-block  shadow-(--shadow-circle)  ${index === 6 || index === 9 ? "bg-mist-600" : ""}`}></span>
                ))}
              </div>
            </div>

            {/* Left-Box */}
            <div className="left-box w-1/2 h-full flex items-end">
              <div className="w-full h-1/2 flex justify-center items-center gap-1 flex-wrap-reverse !px-1.5 !py-1">
                {Array.from({ length: 10 }).map((_, index) => (
                  <span
                    key={index}
                    style={{ width: 2, height: 2, borderRadius: 1 }}
                    className={`inline-block  shadow-(--shadow-circle)  ${index === 6 || index === 9 ? "bg-mist-600" : ""}`}></span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-15 h-15 left-0 bottom-20 flex flex-col justify-around items-end !py-5">
          <span
            style={{ background: "var(--bg-linear)" }}
            className="arrow  w-7 h-0.5 shadow-(--shadow-arow) "></span>
          <span
            style={{ background: "var(--bg-linear)" }}
            className="arrow  w-7 h-0.5 shadow-(--shadow-arow) "></span>
          <span
            style={{ background: "var(--bg-linear)" }}
            className="arrow  w-7 h-0.5 shadow-(--shadow-arow) "></span>
        </div>
      </div>
    </div>
  );
};

export default Login;
