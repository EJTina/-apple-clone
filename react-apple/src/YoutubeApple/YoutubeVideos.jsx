
import React, {useEffect, useState} from 'react'
// import YoutubeVideos from './YoutubeApple/YoutubeVideos.css'
import  './style.css';

function YoutubeVideos() {
    const [appleVideo,setVideos] = useState([])

  // Fetch, convert to object using json and added on the variable
    useEffect(() =>{
      fetch ('https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=8&order=date&key=AIzaSyDUcZehdL1ehvPAaPpJ1_NSDw03PkCKVQ8')
      .then((response)=>response.json())
      .then((data)=>{
        setVideos(data.items)
        // console.log(data.items);
       
      })
     
      .catch(()=>console.log("Fetching error"))
console.log('Fetching data error');

    },[]) 

// console.log(appleVideo);


    return (
<>

<h1 className ='Title'>Latest videos</h1>
    <div className='videosWrapper'>
      {appleVideo.map((video)=>(
        <div className = '' key={video.id.videoId}>

          {/* 1st */}
          <div className='Thumbnails'>
            <img src={video.snippet.thumbnails.high.url} alt={video.snippet.title} />
            
          </div>
          {/* 2nd */}

          <div className='VideoDetail'>
            <h5><a href={`https://www.youtube.com/watch?v=${video.id.videoId}`}>{video.snippet.title}</a></h5>
          </div>
          <div className ='Description'>
          <p > {video.snippet.description}</p>
          </div>
         
          <div className ='Published_date'>
          <p > Published date: {video.snippet.publishedAt}</p>
          </div>
        </div>
      ))}
      </div>
      </>     
  )
}

export default YoutubeVideos

