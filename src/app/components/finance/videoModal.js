'use client'
import React,{useState} from "react";
import Link from "next/link";

import ModalVideo from 'react-modal-video';
import '../../../../node_modules/react-modal-video/css/modal-video.css';

import {FiVideo} from '../../assets/icons/vander'

export default function VideoModal(){
    let [isOpen, setOpen] = useState(false);
    return(
        <>
        <div className="mt-4 pt-2">
            <Link href="#" className="btn btn-primary m-1">Contact us</Link>
            <Link href="#!" scroll={false} onClick={() => setOpen(true)} className="btn btn-icon btn-pills btn-primary m-1 lightbox"><FiVideo className="icons"/></Link><span className="text-light title-dark small align-middle ms-1">Watch Now</span>
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