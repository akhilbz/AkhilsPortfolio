import React from "react";

const About = () => {
    return (
        <div name="about" className="w-full h-screen bg-[#ff4c52]">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="w-full h-full sm:grid sm:grid-cols-2 gap-8">
                    <div className="sm:text-left sm:my-[0px] sm:h-[fit-content] justify-center flex items-start">
                        <p className="text-5xl sm:text-7xl font-bold title-name inline text-[#FAF0E6]">My Story</p>
                    </div>
                    <div></div>
                    {/* <div className="max-w-[1000px] w-full sm:grid sm:grid-cols-2 gap-8"> */}
                    <div className="justify-center sm:justify-start items-start w-full h-[full] pb-[800px] sm:pb-[650px] sm:pl-[110px]">
                        <p className="text-[#FAF0E6] font-medium text-xl">Hey! This is Akhilesh Bitla. Welcome to my life! Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                {/* </div> */}
                </div>
            </div>
        </div>
    )
}

export default About;