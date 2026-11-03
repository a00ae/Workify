const Login = () => {
  return (
    <div className="login min-h-screen w-full  overflow-hidden     bg-[#0a0a0c] text-white">
      <div className="login_conatiner   flex items-center  justify-center">
        <div className="continer h-screen w-[50%]  relative ">
          <div
            style={{ padding: 3 }}
            className="start absolute top-25.75 left-42 w-3 h-3 bg-[#1e1e20] z-1 shadow-(--shadow-start) rounded-sm flex justify-center items-center  ">
            <span
              style={{ borderRadius: 1 }}
              className="block w-full h-full shadow-(--shadow-start-span) bg-white m-auto"></span>
          </div>
          <div
            style={{ padding: 3 }}
            className="start absolute top-25.75 left-42 w-3 h-3 bg-[#1e1e20] z-1 shadow-(--shadow-start) rounded-sm  ">
            <span
              style={{ borderRadius: 1 }}
              className="block w-full h-full shadow-(--shadow-start-span) bg-white"></span>
          </div>
          <div
            style={{ padding: 3 }}
            className="start absolute bottom-25 left-42 w-3 h-3 bg-[#1e1e20] z-1 shadow-(--shadow-start) rounded-sm  ">
            <span
              style={{ borderRadius: 1 }}
              className="block w-full h-full shadow-(--shadow-start-span) bg-white"></span>
          </div>

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
              style={{ background: "var(--bg-linear-right)" }}
              className="arrow  w-7 h-0.5 shadow-(--shadow-arow) "></span>
            <span
              style={{ background: "var(--bg-linear-right)" }}
              className="arrow  w-7 h-0.5 shadow-(--shadow-arow) "></span>
            <span
              style={{ background: "var(--bg-linear-right)" }}
              className="arrow  w-7 h-0.5 shadow-(--shadow-arow) "></span>
          </div>

          <svg className="absolute top-5 left-38 w-full h-screen ">
            <path
              d="M 10 100 L 180 100 L 220 150 V 260 L 300 320"
              stroke="#616161"
              fill="none"
            />
            <path
              d="M 10 700 L 180 700 L 220 650 V 540 L 300 480"
              stroke="#616161"
              fill="none"
            />
          </svg>

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
              style={{ background: "var(--bg-linear-right)" }}
              className="arrow  w-7 h-0.5 shadow-(--shadow-arrow) "></span>
            <span
              style={{ background: "var(--bg-linear-right)" }}
              className="arrow  w-7 h-0.5 shadow-(--shadow-arrow) "></span>
            <span
              style={{ background: "var(--bg-linear-right)" }}
              className="arrow  w-7 h-0.5 shadow-(--shadow-arrow) "></span>
          </div>
        </div>

        <div className="continer h-screen w-[50%]  relative ">
          <div
            style={{ padding: 3 }}
            className="start absolute top-25.75 right-42 w-3 h-3 bg-(--bg-login-comp) z-1 shadow-(--shadow-start) rounded-sm  ">
            <span
              style={{ borderRadius: 1 }}
              className="block w-full h-full shadow-(--shadow-start-span) bg-white"></span>
          </div>
          <div
            style={{ padding: 3 }}
            className="start absolute bottom-25 right-42 w-3 h-3 bg-(--bg-login-comp) z-1 shadow-(--shadow-start) rounded-sm  ">
            <span
              style={{ borderRadius: 1 }}
              className="block w-full h-full shadow-(--shadow-start-span) bg-white"></span>
          </div>

          <div
            style={{ padding: 3 }}
            className="w-25 h-15 shadow-(--shadow-login-white)  absolute right-15 top-20 rounded-sm flex justify-center items-center">
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
          <div className="absolute w-15 h-15 right-8 top-20 flex flex-col justify-around items-end !py-5">
            <span
              style={{ background: "var(--bg-linear-left)" }}
              className="arrow  w-7 h-0.5 shadow-(--shadow-arrow) "></span>
            <span
              style={{ background: "var(--bg-linear-left)" }}
              className="arrow  w-7 h-0.5 shadow-(--shadow-arrow) "></span>
            <span
              style={{ background: "var(--bg-linear-left)" }}
              className="arrow  w-7 h-0.5 shadow-(--shadow-arrow) "></span>
          </div>

          <svg className="absolute top-5 right-38 w-full h-screen">
            <path
              d="M 590 100 L 420 100 L 380 150 V 260 L 300 320"
              stroke="#616161"
              fill="none"
            />
            <path
              d="M 590 700 L 420 700 L 380 650 V 540 L 300 480"
              stroke="#616161"
              fill="none"
            />
          </svg>

          {/* tow */}
          <div
            style={{ padding: 3 }}
            className="w-25 h-15 shadow-(--shadow-login-white)  absolute right-15 bottom-20 rounded-sm flex justify-center items-center">
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
          <div className="absolute w-15 h-15 right-8 bottom-20 flex flex-col justify-around items-end !py-5">
            <span
              style={{ background: "var(--bg-linear-left)" }}
              className="arrow  w-7 h-0.5 shadow-(--shadow-arrow) "></span>
            <span
              style={{ background: "var(--bg-linear-left)" }}
              className="arrow  w-7 h-0.5 shadow-(--shadow-arrow) "></span>
            <span
              style={{ background: "var(--bg-linear-left)" }}
              className="arrow  w-7 h-0.5 shadow-(--shadow-arrow) "></span>
          </div>
        </div>

        <div
          style={{ width: 320 }}
          className=" card absolute flex flex-col gap-2  top-1/2 left-1/2   w-2xs h-72 bg-(--bg-login-comp) shadow-(--shadow-login-card) rounded-lg !p-2">

            {/* Top Icons */}
          <div className="top w-full flex justify-center gap-1 relative">
            {/* circle */}

            <div className="perint-circle-left flex flex-col gap-0.5 justify-center  w-14">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className={`child circle flex gap-1 items-center ${
                    i === 1 ? "self-start" : "self-center"
                  }`}>
                  {Array.from({ length: 8 }).map((_, index) => (
                    <span
                      key={index}
                      style={{ width: 2, height: 2, borderRadius: 1 }}
                      className={`block shadow-(--shadow-circle) ${i == 1 && index == 1 ? "bg-mist-600" : ""}`}></span>
                  ))}
                </div>
              ))}
            </div>

            {/* Icon  - Login*/}

            <div className=" w-11.5 h-11  -z-1 rounded-md bg-(--bg) shadow-(--shadow-login-card-circle)  flex justify-center items-center">
              <svg
                className="login-loader w-full "
                xmlns="http://www.w3.org/2000/svg"
                // viewBox="0 0 0 0"
                height={78}
                fill="none">
                <defs>
                  <linearGradient
                    id="loginGradRight"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%">
                    <stop offset="0%" stop-color="#4de8ff" />
                    <stop offset="100%" stop-color="#b6bbfb" />
                  </linearGradient>
                  <linearGradient
                    id="loginGradLeft"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%">
                    <stop offset="0%" stop-color="#ffffff" />
                    <stop offset="100%" stop-color="#c1cbf8" />
                  </linearGradient>
                </defs>
                <path
                  d="M 25 25 A 5 5 0  0 1 25 50"
                  stroke="url(#loginGradLeft)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  stroke-dasharray="35 6"
                  stroke-dashoffset="365"
                />
                <path
                  d="M 25 25 A 5 5 0  0 0 25 50"
                  stroke="url(#loginGradRight)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  stroke-dasharray="35 6"
                  stroke-dashoffset="1"
                />
              </svg>
            </div>

                        <div className="perint-circle-right flex flex-col gap-0.5 justify-center w-14">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className={`child circle flex gap-1 items-center ${
                    i === 1 ? "self-end" : "self-center"
                  }`}>
                  {Array.from({ length: 8 }).map((_, index) => (
                    <span
                      key={index}
                      style={{ width: 2, height: 2, borderRadius: 1 }}
                      className={`block shadow-(--shadow-circle) ${i == 1 && index == 1 ? "bg-mist-600" : ""}`}></span>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Heading + Tile */}
              <div className="box-title w-full  flex flex-col items-center gap-1 text-[12px]">
                <h3 className="text-lg font-normal">Wolcome Back</h3>
              <span className="inline-block  text-[#757575]">Don't have an account yet? <span className="text-(--text-h)">Sign up</span></span>

              </div>

        </div>
      </div>
    </div>
  );
};

export default Login;
