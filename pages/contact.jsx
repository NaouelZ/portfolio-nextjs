function Contact() {
  return (
    <div className="p-4 px-5 rounded-lg">
              <div className="flex mt-2">
            <div className="self-center w-5 h-5 bg-baby-blue"></div>
            <h1 className="ml-5 font-sans text-4xl font-bold text-baby-blue">Contact me</h1>
      </div>
      <p className="mt-5">If you want to keep in touch, you can contact me by </p>
      <div className="flex flex-col content-center justify-center mt-5 md:flex-row">
        <div className="col-span-6 mx-auto mt-10 text-center">
            <div className="px-4 py-2 mx-auto text-white bg-opacity-50 justify-self-center bg-purple rounded-2xl w-fit ">
              <i className="text-xl fa-solid fa-phone"></i>
            </div>
            <p className="mt-5">You can call me in</p>
            <a href="tel:+16473679795" className="mb-5 font-bold hover:text-blue">+1 (647) 781-5219</a>
        </div>
        <div className="col-span-6 mx-auto mt-10 mb-5">
            <div className="px-4 py-2 mx-auto text-white bg-opacity-50 bg-purple rounded-2xl w-fit">
              <i className="text-xl fa-solid fa-envelope"></i>
            </div>
            <p className="mt-5">You can send me an email in</p>
            <a className="mb-5 font-bold hover:text-blue" href="mailto:zenati.naouel14@gmail.com">zenati.naouel14@gmail.com</a>
        </div>
      </div>
    </div>
  )
}

export default Contact