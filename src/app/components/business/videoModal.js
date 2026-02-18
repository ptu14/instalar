'use client'
import React,{useState} from "react";
import Link from "next/link";
import { MdPlayArrow } from 'react-icons/md';

import ModalVideo from 'react-modal-video';
import '../../../../node_modules/react-modal-video/css/modal-video.css';

export default function VideoModal(){
    let [isOpen, setOpen] = useState(false);
    return(
        <>
        <div className="play-icon">
            <Link href="" onClick={() => setOpen(true)} scroll={false} className="play-btn lightbox">
                <MdPlayArrow className="text-primary rounded-circle bg-white shadow" style={{ fontSize: '36px', padding: '6px' }} />
            </Link>
        </div>
        <ModalVideo
            channel="youtube"
            youtube={{ mute: 0, autoplay: 0 }}
            isOpen={isOpen}
            videoId="yba7hPeTSjk"
            onClose={() => setOpen(false)} 
        />
        </>
    )
}