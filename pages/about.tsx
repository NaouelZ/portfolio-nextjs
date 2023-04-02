function AboutPage() {
    return (
      <div className="container grid grid-cols-12 gap-3 p-4 px-5 rounded-lg">
        <div className="flex col-span-12 mt-2">
            <div className="self-center w-5 h-5 bg-baby-blue"></div>
            <h1 className="ml-5 font-sans text-4xl font-bold text-baby-blue">About me</h1>
        </div>
        <div className="col-span-12 lg:col-span-12">
            <p className="my-2 text-normal text-gray-dark">
            As a web developer, I have acquired skills in the creation and development of websites. I am able to design professional quality web pages using programming languages such as HTML, CSS and JavaScript. I also have experience using frameworks such as React, and am able to work with popular CMS s such as Drupal. 
I am passionate about creating responsive and easy-to-use websites for end users. My ability to problem solve and work effectively in a team environment allows me to create high quality web projects while staying on time.
            </p>
            <p className="mt-1 mb-2 text-normal text-gray-dark">Here are a few technologies I ve been working with recently:</p>
            <div className="grid grid-cols-12 mg-2">
                <ul className="col-span-4 text-sm text-gray-dark">
                    <li><span className="text-baby-blue">▹</span>HTML</li>
                    <li><span className="text-baby-blue">▹</span>CSS</li>
                    <li><span className="text-baby-blue">▹</span>JS</li>
                    <li> <span className="text-baby-blue">▹</span>MySQL</li>
                    <li> <span className="text-baby-blue">▹</span>MongoDB</li>
                </ul>
                <ul className="col-span-4 text-sm text-gray-dark">
                    <li><span className="text-baby-blue">▹</span>ReactJS</li>
                    <li><span className="text-baby-blue">▹</span>NextJS</li>
                    <li><span className="text-baby-blue">▹</span>Tailwind</li>
                    <li> <span className="text-baby-blue">▹</span>Golang</li>
                    <li> <span className="text-baby-blue">▹</span>NodeJS</li>
                </ul>
                <ul className="col-span-4 text-sm text-gray-dark">
                    <li><span className="text-baby-blue">▹</span>GitHub</li>
                    <li><span className="text-baby-blue">▹</span>Versel</li>
                </ul>
            </div>
        </div>
        <div className="col-span-12 my-5">
            <div className="grid grid-cols-12 gap-3">
                <div className="flex flex-col col-span-12 gap-2 p-2 rounded-lg lg:col-span-4 lg:flex-row bg-opacity-30 text-gray-dark bg-purple">
                    <i className="mt-1 text-xl fa-solid fa-code text-purple"></i>
                    <div className="my-1.5 ml-1">
                        <p className="font-sans font-semibold uppercase text-normal">Front-end development</p>
                        <p className="text-sm">I can create a website from scratch or from a Drupal template. I have skills in front-end development that I have developed through my studies, my professional experiences and personal projects.</p>
                    </div>
                    
                </div>
                <div className="flex flex-col col-span-12 gap-2 p-2 rounded-lg lg:col-span-4 lg:flex-row bg-opacity-30 text-gray-dark bg-green">
                    <i className="mt-1 text-xl fa-solid fa-code text-green"></i>
                    <div className="my-1.5 ml-1">
                        <p className="font-sans font-semibold uppercase text-normal">Back-end development</p>
                        <p className="text-sm">Good knowledge in database management, servers and API creation. Strong skills in programming languages such as Golang, NodeJS, SQL and mongoDB.</p>
                    </div>
                </div>
                <div className="flex flex-col col-span-12 gap-2 p-2 rounded-lg lg:col-span-4 lg:flex-row text-gray-dark bg-yellow bg-opacity-30">
                    <i className="mt-1 text-xl fa-solid fa-code text-yellow"></i>
                    <div className="my-1.5 ml-1">
                        <p className="font-sans font-semibold uppercase text-normal">Others</p>
                        <p className="text-sm">I also have knowledge in digital project management. I was also able to work in agile scrum methodology.<br />
I know how to use design software such as Figma.</p>
                    </div>   
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default AboutPage;