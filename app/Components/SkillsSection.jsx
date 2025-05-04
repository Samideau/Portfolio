"use client"
import React from 'react'
import Image from "next/image";
//import dynamic from 'next/dynamic';
//import "react-responsive-carousel/lib/styles/carousel.min.css";
//const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });
//import { Carousel } from 'react-responsive-carousel';

/*const YoutubeSlide = ({ url, isSelected }) => (
    <ReactPlayer width="100%" url={url} playing={isSelected} />
);*/

const SkillsSection = () =>{
    /*const customRenderItem = (item, props) => <item.type {...item.props} {...props} />;

    const getVideoThumb = (videoId) => `https://img.youtube.com/vi/${videoId}/default.jpg`;

    const getVideoId = (url) => url.substr('https://www.youtube.com/embed/'.length, url.length);

    const customRenderThumb = (children) =>
        children.map((item) => {
            const videoId = getVideoId(item.props.url);
            return <img src={getVideoThumb(videoId)} />;
        });

    return (
        <Carousel renderItem={customRenderItem} renderThumbs={customRenderThumb}>
            <YoutubeSlide key="youtube-1" url="https://www.youtube.com/embed/AVn-Yjr7kDc" />
            <YoutubeSlide key="youtube-2" url="https://www.youtube.com/embed/mOdmi9SVeWY" />
            <YoutubeSlide key="youtube-3" url="https://www.youtube.com/embed/n0F6hSpxaFc" />
            <YoutubeSlide key="youtube-4" url="https://www.youtube.com/embed/0uGETVnkujA" />
        </Carousel>
    );*/
  /*return (
    <div className="py-25">
      <h1 className="text-4xl font-extrabold">
        My Skills
      </h1>
			<Carousel>
				<div>
					<img src="Images/GameController.png" />
					<p className="legend">Test Picture</p>
				</div>
				<div>
					<img src="Images/TestGif.gif" />
					<p className="legend">Test Gif</p>
				</div>
			</Carousel>
    </div>
  )*/
  return (
    <section id="skills">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image 
          src="/Images/GameController.png" 
          width={500} 
          height={500} 
          alt="Description Img"
          className="hidden md:block"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">My Skills</h2>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection