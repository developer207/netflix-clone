import React, { useState } from 'react'
import MuiModal from '@mui/material/Modal'
import { FaPlay } from 'react-icons/fa';
import { CheckIcon, PlusIcon, ThumbUpIcon, VolumeOffIcon, VolumeUpIcon } from '@heroicons/react/outline';
import ReactPlayer from "react-player";



interface prop{
    show: boolean
    handleClose:()=>void
}

const Model = ({ show,handleClose}:prop) => {
    
    const [muted, setMuted] = useState(true);
    const trailer='aWzlQ2N6qqg'

    const handleList = () => {
        console.log("handleList")
    }

    return (
        <MuiModal
            open={show}
            onClose={handleClose}
            className="fixed !top-7 left-0 right-0 z-50 mx-auto w-full max-w-5xl overflow-hidden overflow-y-scroll rounded-md scrollbar-hide"
        >
            <>

                <div className="relative pt-[56.25%]">
                    <ReactPlayer
                        url={`https://www.youtube.com/watch?v=${trailer}`}
                        width="100%"
                        height="100%"
                        style={{ position: 'absolute', top: '0', left: '0' }}
                        playing
                        muted={muted}
                    />
                    <div className="absolute bottom-10 flex w-full items-center justify-between px-10">
                        <div className="flex space-x-2">
                            <button className="flex items-center gap-x-2 rounded bg-white px-8 text-xl font-bold text-black transition hover:bg-[#e6e6e6]">
                                <FaPlay className="h-7 w-7 text-black" />
                                Play
                            </button>
                            <button className="modalButton" onClick={handleList}>

                            </button>
                            <button className="modalButton">
                                <ThumbUpIcon className="h-6 w-6" />
                            </button>
                        </div>
                        <button className="modalButton" onClick={() => setMuted(!muted)}>
                            {muted ? (
                                <VolumeOffIcon className="h-6 w-6" />
                            ) : (
                                <VolumeUpIcon className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>

            </>
        </MuiModal>
    )
}

export default Model
