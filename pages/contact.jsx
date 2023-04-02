function Contact() {
  return (
    <div className="px-8 py-4">
              <div className="flex mt-2">
            <div className="self-center w-5 h-5 bg-baby-blue"></div>
            <h1 className="ml-5 font-sans text-4xl font-bold text-baby-blue">Contact me</h1>
      </div>
      <p className="mt-4">If you want to keep in touch, you can contact me by </p>
      <div className="grid grid-cols-12">
        <div className="col-span-6 mx-auto mt-10">
            <div className="px-4 py-2 m-auto text-white bg-opacity-50 bg-purple rounded-3xl w-fit">
              <i className="text-xl fa-solid fa-phone"></i>
            </div>
            <p className="mt-4">You can call me in</p>
            <a href="tel:+16473679795" className="font-bold hover:text-blue">+1 (647) 367-9795</a>
        </div>
        <div className="col-span-6 mx-auto mt-10">
            <div className="px-4 py-2 m-auto text-white bg-opacity-50 bg-purple rounded-3xl w-fit">
              <i className="text-xl fa-solid fa-envelope"></i>
            </div>
            <p className="mt-4">You can send me an email in</p>
            <a className="font-bold hover:text-blue" href="mailto:zenati.naouel14@gmail.com">zenati.naouel14@gmail.com</a>
        </div>
      </div>
    </div>
  )
}

export default Contact