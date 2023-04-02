export default function SideBar() {
    return (
    <div className="container flex flex-col items-center w-full h-screen mt-2 fixe">
        <img className="z-10 px-4 w-60 drop-shadow-md" src="/avatar.svg" alt="" />
        <div id="descriptions" className="bg-white rounded-[22px] pt-[40px] mt-[-50px]">
            <h2 className="mt-6 font-sans text-2xl font-bold uppercase">Naouël Zenati</h2>
            <h1 className="mt-1 text-sm text-gray-dark">Full-stack developer</h1>
            <div className="flex flex-row justify-center mt-6 gap-x-3 ">
                <a className="p-2 rounded-lg w-9 bg-gray drop-shadow text-[#171515] hover:text-white hover:bg-baby-blue" href='https://github.com/NaouelZ' target="_blank">
                    <i className="fab fa-github"></i>
                </a>
                <a className="p-2 rounded-lg w-9 bg-gray drop-shadow text-[#0072b1] hover:text-white hover:bg-baby-blue" href='www.linkedin.com/in/naouel-zenati-full-stack-developer' target="_blank">
                    <i className="fab fa-linkedin"></i>
                </a>
            </div>
            <div className="mx-6 p-7 rounded-2xl mt-7 bg-gray">
                <div className="flex border-b border-gray-light pb-2.5">
                    <div className="self-center bg-white shadow-md w-9 h-9 border-lg p-1.5 text-purple hover:text-white hover:bg-baby-blue rounded-lg">
                        <i className="fa-solid fa-phone"></i>
                    </div>
                    <div className="text-left ml-2.5">
                        <h3 className="text-sm font-normal text-gray-dark ">Phone</h3>
                        <p>+1 (647) 367-9795</p>
                    </div>
                </div>
                <div className="flex border-b border-gray-light pb-2.5 mt-2">
                    <div className="self-center bg-white shadow-md w-9 h-9 border-lg p-1.5 text-blue hover:text-white hover:bg-baby-blue rounded-lg">
                        <i className="fa-solid fa-envelope"></i>
                    </div>
                    <div className="text-left ml-2.5">
                        <h3 className="text-sm font-normal text-gray-dark ">Email</h3>
                        <p>zenati.naouel14@gmail.com</p>
                    </div>
                </div>
                <div className="flex border-b border-gray-light pb-2.5 mt-2">
                    <div className="self-center bg-white shadow-md w-9 h-9 border-lg p-1.5 text-green hover:text-white hover:bg-baby-blue rounded-lg">
                        <i className="fa-solid fa-file"></i>
                    </div>
                    <div className="text-left ml-2.5">
                        <h3 className="text-sm font-normal text-gray-dark ">Work Permit</h3>
                    </div>
                </div>
                <div className="flex pb-1 mt-2">
                    <div className="self-center bg-white shadow-md w-9 h-9  p-1.5 text-yellow hover:text-white hover:bg-baby-blue rounded-lg">
                        <i className="fa-solid fa-house"></i>
                    </div>
                    <div className="text-left ml-2.5">
                        <h3 className="text-sm font-normal text-gray-dark ">Home</h3>
                        <p>Toronto</p>
                    </div>
                </div>
            </div>
            <a className="flex px-4 py-3 mx-auto mt-8 mb-10 text-sm font-bold text-white uppercase rounded-[30px] w-fit bg-baby-blue" href="/pdf/resume_naouel_zenati.pdf" target="_blank">
                Download my resume
            </a>
        </div>
    </div>
    );
  }