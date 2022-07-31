//document.querySelector('.one').innerHTML="<h1>hello</h1>";

// let ele = document.createElement("h1");

// ele.append("Hello")

// document.querySelector('.one').append(ele);

// let d = document.createElement("div");
// d.classList.add("two")

// let h = document.createElement("h1");
// h.append("New");

// d.append(h);
 
// document.querySelector('.one').append(d);

// project js

let musics=[

    {
        id:1,
        name:"Pathala Pathala",
        artist:"Anirudh Ravichander",
        audioSrc:"audios/Pathala Pathala.mp3",
        imageSrc:"images/download.jpg"
    },
    {
        id:2,
        name:"Porkanda Singam",
        artist:"Anirudh Ravichander",
        audioSrc:"audios/Porkanda Singam.mp3",
        imageSrc:"images/E57obaLUUAE48xs.jpg"
    },
    {
        id:3,
        name:"Kanave Kanave",
        artist:"Anirudh Ravichander",
        audioSrc:"audios/Kanave-Kanave-MassTamilan.com.mp3",
        imageSrc:"images/download (2).jpg"
    },{
        id:4,
        name:"Kanja Poo Kannala",
        artist:"Yuvan Shankar Raja, Sid Sriram",
        audioSrc:"audios/Kanja-Poo-Kannala.mp3",
        imageSrc:"images/Kanja-Poo-Kannala-mp3-image-300x300.jpg"
    },
    {
        id:5,
        name:"Anbe En Anbe",
        artist:"Harris Jayaraj, Harish Raghavendra",
        audioSrc:"audios/Anbe-En-Anbe-MassTamilan.fm.mp3",
        imageSrc:"images/download (1).jpg"
    },
    {
        id:6,
        name:"Ava Enna Enna",
        artist:"Karthik & V.V.Prasanna",
        audioSrc:"audios/Ava-Enna-Enna-MassTamilan.com.mp3",
        imageSrc:"images/vaaranam-aayiram-2008.webp"
    }
];

for(let i=0;i<musics.length;i++)
{

    let tile=document.createElement("div");
    tile.classList.add("tile");

    let thumbnail=document.createElement("div");
    thumbnail.classList.add("thumbnail");

    let img=document.createElement("img");
    img.src=musics[i].imageSrc;

    thumbnail.append(img);
    tile.append(thumbnail);

    let description=document.createElement("div");
    description.classList.add("description");


    let h2=document.createElement("h2");
    h2.append(musics[i].name);
    description.append(h2);

    let h3=document.createElement("h3");
    h3.append(musics[i].artist);
    description.append(h3);

    tile.append(description);

    tile.addEventListener("click",function(){
        playMusic(musics[i]);
    });

    document.querySelector(".music-list").append(tile);

}




function playMusic(music)
{

    document.querySelector(".player").style.marginLeft="0";
    document.querySelector(".main-thumbnail-img").src=music.imageSrc;
    document.querySelector(".song-name").innerText=music.name;
    document.querySelector(".song-artist").innerText=music.artist;
    document.querySelector(".audio").src=music.audioSrc;
    document.querySelector(".audio").play();

}

function closePlayer()
{
    document.querySelector(".player").style.marginLeft="100%";
}