import { Button, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const Videos = () => {
    const videosArr = [
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"
    ];

    
    const[videoSrc,setVideoSrc]= useState(videosArr[0]);
    return (
        <Stack direction={['column','row']} h={'100vh'}>
        <VStack w={'full'}>

        <video
          controls
          controlsList="nodownload"
          src={videoSrc}
          autoPlay
          style={{
            width: '100%',
          }}
        ></video>
            <VStack 
                alignItems={'flex-start'} 
                p='8'
                w={'full'} 
                overflowY={'auto'}
                >
                <Heading>Sample Video 1</Heading>
                <Text>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </Text>
            </VStack>
        </VStack>
        <VStack 
            w={['full',"xl"]}
            alignItems={'stretch'}
            p="4"
            spacing={'8'}
            overflowY={'auto'}
        >
        
        {
            videosArr.map((item,index)=>(
            <Button 
                variant={'ghost'} 
                colorScheme={'purple'}  
                onClick={()=>setVideoSrc(item)}
            >
                Tutorial {index+1}
            </Button>
            ))
        };
          
        </VStack>
    </Stack>
  );
};

export default Videos;
