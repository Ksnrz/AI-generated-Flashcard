import React from "react";

const Signup = () => {
  return (
    <div className="px-[10%] py-[3%] bg-myblack text-mywhite">
      <div className="flex w-full">
        <div className="border-2 border-mybordercolor rounded-lg flex flex-1 flex-col p-8 mr-8">
          <div className="">
            <div className="text-left">
              <h1 className="text-4xl mb-4 text-gradient-purple">สร้างบัญชี</h1>
              <p className="mb-2">Username</p>
              <input className="px-3 py-2.5 rounded-lg w-full mb-4 border-2 border-mybordercolor bg-transparent"></input>
              <p className="mb-2">อีเมล</p>
              <input
                className="px-3 py-2.5 rounded-lg w-full mb-4 border-2 border-mybordercolor bg-transparent"
                placeholder=""
              ></input>

              <p className="mb-2">รหัสผ่าน</p>
              <input
                className="px-3 py-2.5 rounded-lg w-full mb-4 border-2 border-mybordercolor bg-transparent"
                placeholder=""
              ></input>
              <p className="mb-2">ยืนยันรหัสผ่าน</p>
              <input
                className="px-3 py-2.5 rounded-lg w-full mb-4 border-2 border-mybordercolor bg-transparent"
                placeholder=""
              ></input>
              <div className="text-right">
                <p className="mb-4 underline forgot-password-color text-gradient-purple">
                  ลืมรหัสผ่าน?
                </p>
              </div>
              <button className="bg-gradient-to-r from-violet-400 to-indigo-600 w-full py-2.5 rounded-xl text-white mb-3 text-xl">
                สร้างบัญชี
              </button>
              <div class="divider">
                <span className="text-gradient-purple">or</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 shadow-lg">
          <img
            className="w-full max-h-screen rounded-[16px] "
            src="/src/img/paint-login.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
