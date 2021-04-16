

window.addEventListener('load',function(){
    let title=document.getElementById("title");
	let artist=document.getElementById("artist");
	let startime=document.getElementById("startime");
	let endtime=document.getElementById("endtime");
	let progress=document.querySelector(".progress");
	let song=document.querySelector("audio");
	let play=document.getElementById("play");
	let forward=document.getElementById("forward");
	let backward=document.getElementById("backward");
	let undo=document.getElementById("undo");
	let redo=document.getElementById("redo");
	let index=1;
	const songs=[
		{
			"id":1,
			"song":"./songs/01 - Aap Ke Pyaar Mein(AllMp3Song.com)-1.mp3",
			"title":"Aap Ke Pyaar Mein",
			"artist":"Unknown"
		},
		{
			"id":2,
			"song":"./songs/01 - raaz 3 - deewana kar raha hai (www.krazywap.mobi).mp3",
			"title":"raaz 3 - deewana kar raha hai",
			"artist":"Arjit Shingh"
		},
		{
			"id":3,
			"song":"./songs/01 - Tum Ho Mera Pyar.mp3",
			"title":"Tum Ho Mera Pyar",
			"artist":"Udit Narayan"
		},
		{
			"id":4,
			"song":"./songs/01_-_Sawan_Aaya_Hai(wapking.cc).mp3",
			"title":"Sawan_Aaya_Hai",
			"artist":"Arjit Singh"
		},
		{
			"id":5,
			"song":"./songs/01_-_Sun_Le_Zara(PagalWorlds.in).mp3",
			"title":"Sun_Le_Zara",
			"artist":"Shreya Goshal"
		},
		{
			"id":6,
			"song":"./songs/02 Meherbaan (Bang Bang) -190Kbps [PagalWorld.com].mp3",
			"title":"Meherbaan (Bang Bang)",
			"artist":"Arjit Shingh"
		}
	]
	title.textContent=songs[index-1].title;
	artist.textContent=songs[index-1].artist;
	
	//startime.textContent=song.currentTime;
	setInterval(function(){
		var endduration=song.duration;
		var endminutes=parseInt(endduration/60);
		if(endminutes<10)
		{
			endminutes="0"+endminutes;
		}
		var endseconds=parseInt(endduration%60);
		if(endseconds<10)
		{
			endseconds="0"+endseconds;
		}
		var endtotaltime=endminutes+":"+endseconds;
		endtime.textContent=endtotaltime;
		var current=parseInt(song.currentTime);
		var minutes=parseInt(current/60);
		if(minutes<10)
		{
			minutes="0"+minutes;
		}
		var seconds=parseInt(current%60);
		if(seconds<10)
		{
			seconds="0"+seconds
		}
		progress.style.width=(song.currentTime/song.duration)*100+"%";
		progress.style.background="red";
		var totaltime=minutes+":"+seconds;
		startime.textContent=totaltime;
	},1000)
	let isPlaying=false;
	const playMusic=()=>{
		isPlaying=true
		song.play();
		play.classList.replace("fa-play","fa-pause");
	}

	const pauseMusic=()=>{
		isPlaying=false
		song.pause();
		play.classList.replace("fa-pause","fa-play");
	}

	play.addEventListener("click",()=>{
		isPlaying ? pauseMusic():playMusic()
	})
	undo.addEventListener("click",()=>{
		var current=song.currentTime;
		song.currentTime=current-5;
	})
	redo.addEventListener("click",()=>{
		var current=song.currentTime;
		song.currentTime=current+5;
	})
	forward.addEventListener("click",()=>{
		if(index<songs.length)
		{
		song.src=songs[index].song;
		title.textContent=songs[index].title;
		artist.textContent=songs[index].artist;
		index=index+1;
		}
		else{
			index=0
		}
	})
	backward.addEventListener("click",()=>{
		if(index>=0)
		{
		song.src=songs[index].song;
		title.textContent=songs[index].title;
		artist.textContent=songs[index].artist;
		index=index-1;
		}
		else{
			index=songs.length-1;
		}
	})
})