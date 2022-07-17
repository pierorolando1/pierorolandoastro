import React, { useEffect } from "react";

export default () => {
    useEffect(() => {
        let p = document.getElementById("progressbar");
        let totalHeight = document.body.scrollHeight - window.innerHeight;
        window.onscroll = () => {
            let progress = (window.pageYOffset / totalHeight) * 100;
            p.style.height = progress + "%";
        };
    }, []);

    return (
        <>
        <div
            className="fixed top-0 right-0 bg-white bg-opacity-[2%] h-full w-[6px]"
        />
        <div id="progressbar" className="fixed top-0 right-0 w-[6px]" />
        </>
    );
};
