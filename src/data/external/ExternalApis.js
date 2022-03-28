import React from "react";
import {useEffect, useState} from "react";

export default function GetImage() {
    const [getImg, setImg] = useState([])

    useEffect(() => {
        const url = "https://instagram.flej1-1.fna.fbcdn.net/v/t51.2885-19/244607437_614171139955938_9001202977251656563_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.flej1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=lVAnqfG8UTsAX8l9IUV&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT9mYBBn0lc1vt1GVEM3BNwNExEHyhTCf0G79rg1pzadSg&oe=6248D5FD&_nc_sid=7bff83"

        const fetchData = async () => {
            try{
                const response = await fetch(url);
                const json = await response.json();
                console.log(json[0]["results"]);
                console.log(json[1]["image"]);
                setImg(json[1]["image"]);
            }catch (error) {
                console.log("error", error)
            }
        };
        fetchData();
    }, []);

    return (
        <img src={getImg} alt={""}/>
    )
}
