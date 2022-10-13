const allMusic = [
    {
        name: "music_audio01",
        artist: "Patrick Patrikios",
        img: "music_v01",
        audio: "music_audio01",
    },
    {
        name: "music_audio02",
        artist: "DJ Freedem",
        img: "music_v02",
        audio: "music_audio02",
    },
    {
        name: "music_audio03",
        artist: "josh pan",
        img: "music_v03",
        audio: "music_audio03",
    },
    {
        name: "music_audio04",
        artist: "Jeremy Black",
        img: "music_v04",
        audio: "music_audio04",
    },
    {
        name: "music_audio05",
        artist: "Patrick Patrikios",
        img: "music_v05",
        audio: "music_audio05",
    },
    {
        name: "music_audio06",
        artist: "DJ Freedem",
        img: "music_v06",
        audio: "music_audio06",
    },
    {
        name: "music_audio07",
        artist: "Asher Fulero",
        img: "music_v07",
        audio: "music_audio07",
    },
    {
        name: "music_audio08",
        artist: "Jeremy Black",
        img: "music_v08",
        audio: "music_audio08",
    },
    {
        name: "music_audio09",
        artist: "Kwon",
        img: "music_v09",
        audio: "music_audio09",
    },
];

const musicWrap = document.querySelector(".music__wrap");
const musicView = musicWrap.querySelector(".music__view .img img");
const musicName = musicWrap.querySelector(".music__view .title h3");
const musicArtist = musicWrap.querySelector(".music__view .title p");
const musicAudio = musicWrap.querySelector("#main-audio");
const musicPlay = musicWrap.querySelector("#control-play");
const musicPrevBtn = musicWrap.querySelector("#control-prev");
const musicNextBtn = musicWrap.querySelector("#control-next");
const musicListBtn = musicWrap.querySelector("#control-list");
const musicList = musicWrap.querySelector(".music__list");
const musicListUl = musicWrap.querySelector(".music__list ul");
const musicProgress = musicWrap.querySelector(".progress");
const musicProgressBar = musicWrap.querySelector(".progress .bar");
const musicProgressCurrent = musicWrap.querySelector(
    ".progress .timer .current"
);
const musicProgressDuration = musicWrap.querySelector(
    ".progress .timer .duration"
);
const musicRepeat = musicWrap.querySelector("#control-repeat");

let musicIndex = 1; // 현재 음악 인덱스
musicAudio.play();

//음악재생
function loadMusic(num) {
    musicName.innerText = allMusic[num - 1].name; //뮤직 이름 가져오기
    musicArtist.innerText = allMusic[num - 1].artist; //뮤직 아티스트 가져오기
    musicView.src = `../assets/img/${allMusic[num - 1].img}.png`; //뮤직 이미지 가져오기
    musicView.alt = allMusic[num - 1].name; //뮤직 이미지 alt 가져오기
    musicAudio.src = `../assets/audio/${allMusic[num - 1].audio}.mp3`; //뮤직 오디오 가져오기
}

//재생버튼
function playMusic() {
    //속셩변경
    musicWrap.classList.add("paused");
    musicPlay.setAttribute("title", "정지");
    musicPlay.setAttribute("class", "stop");
    musicAudio.play();
}

//정지버튼
function pauseMusic() {
    //속성 변경
    musicWrap.classList.remove("paused");
    musicPlay.setAttribute("title", "재생");
    musicPlay.setAttribute("class", "play");
    musicAudio.pause();
}

//이전 곡 듣기
function prevMusic() {
    //musicIndex -- : 음악이 첫 곡일 때 음악의 인덱스 값과 배열의 길이와 같다면 참. 아닐 경우 이전곡
    musicIndex == 1 ? (musicIndex = allMusic.length) : musicIndex--;
    loadMusic(musicIndex); //매개변수
    playMusic(); //함수 실행
    playListMusic(); //리스트 업데이트
}

//다음 곡 듣기
function nextMusic() {
    //musicIndex ++ : 음악 인덱스가 배열의 길이와 같을 때 첫곡 재생 아니면 다음곡 재생
    musicIndex == allMusic.length ? (musicIndex = 1) : musicIndex++;
    loadMusic(musicIndex); //매개변수
    playMusic();
    playListMusic(); //리스트 업데이트
}

//뮤직 진행바 : currentTime
musicAudio.addEventListener("timeupdate", (e) => {
    // console.log(e); 요소 정보 보기

    const currentTime = e.target.currentTime; //오디오의 총 길이
    const duration = e.target.duration; //현재 재생 시간

    let progressWidth = (currentTime / duration) * 100; //전체 길이에서 현재 진행되는 시간을 백분위로 나눠줍니다.

    musicProgressBar.style.width = `${progressWidth}%`;

    //전체시간
    musicAudio.addEventListener("loadeddata", () => {
        let audioDuration = musicAudio.duration;
        let totalMin = Math.floor(audioDuration / 60); //전체 시간(초)을 분 단위로 쪼갭니다. (Floor : 나머지 값 버림)
        let totalSec = Math.floor(audioDuration % 60); //남은 초를 저장

        //토탈 초가 10보다 작으면
        if (totalSec < 10) totalSec = `0${totalSec}`; //초가 한 자릿수일 때 앞에 0을 붙인다.
        musicProgressDuration.innerText = `${totalMin}:${totalSec}`; //완성된 시간을 문자열로 출력하기
    });

    //진행시간 (현재 재생 시간)
    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);

    if (currentSec < 10) currentSec = `0${currentSec}`;
    musicProgressCurrent.innerText = `${currentMin}:${currentSec}`;
});

//진행바 버튼 클릭
musicProgress.addEventListener("click", (e) => {
    let progressWidth = musicProgress.clientWidth; //진행바 전체 길이
    let clickedOffsetX = e.offsetX; //진행바 기준으로 측정되는 X좌표
    let songDuration = musicAudio.duration; //오디오 전체 길이

    musicAudio.currentTime = (clickedOffsetX / progressWidth) * songDuration; //백분위로 나눈 숫자에 다시 전체길이를 곱해서 현재 재생값으로 바꾼다.
});

//반복 버튼 클릭
musicRepeat.addEventListener("click", () => {
    let getAttr = musicRepeat.getAttribute("class");

    switch (getAttr) {
        case "repeat":
            musicRepeat.setAttribute("class", "repeat_one");
            musicRepeat.setAttribute("title", "한 곡 반복");
            break;

        case "repeat_one":
            musicRepeat.setAttribute("class", "shuffle");
            musicRepeat.setAttribute("title", "랜덤 반복");
            break;

        case "shuffle":
            musicRepeat.setAttribute("class", "repeat");
            musicRepeat.setAttribute("title", "전체 반복");
            break;
    }
});

//오디오가 끝날 경우
musicAudio.addEventListener("ended", () => {
    let getAttr = musicRepeat.getAttribute("class");

    switch (getAttr) {
        case "repeat":
            nextMusic();
            break;
        case "repeat_one":
            playMusic();
            break;
        case "shuffle":
            //배열의 총 길이에서 랜덤으로 인덱스 값을 추출한다. 0부터 1까지의 수를 10을 곱하여 자연수로 만들어 준다. 그리고 floor로 나머지 값을 버린다. 마지막으로 +1을 하여 배열과 인덱스 값을 맞춰준다. 그러면 1부터 10 까지 값이 나온다.
            let randomIndex = Math.floor(Math.random() * allMusic.length + 1); //랜덤 인덱스 생성

            do {
                randomIndex = Math.floor(Math.random() * allMusic.length + 1);
            } while (musicIndex == randomIndex);
            musicIndex = randomIndex; //현재 인덱스를 랜덤 인덱스로 변경
            loadMusic(musicIndex); //랜덤 인덱스가 반영된 현제 인덱스 값으로 음악을 다시 로드한다.
            playMusic(); //로드한 음악을 재생
            break;
    }
    playListMusic(); //재생 목록 업데이트
});

//플레이 버튼
musicPlay.addEventListener("click", () => {
    //클래스를 추가시켜 pause가 있는 경우 정지하고 없는 경우 재생시키기
    const isMusicPaused = musicWrap.classList.contains("paused"); //음악 재생 중
    isMusicPaused ? pauseMusic() : playMusic();
});

//이전곡 버튼 클릭
musicPrevBtn.addEventListener("click", () => {
    prevMusic();
});

//다음곡 버튼 클릭
musicNextBtn.addEventListener("click", () => {
    nextMusic();
});

//뮤직 리스트 열기, 닫기
const closeBtn = document.querySelector(".close-btn");

closeBtn.addEventListener("click", () => {
    musicList.style.display = "none";
});
musicListBtn.addEventListener("click", () => {
    musicList.style.display = "block";
});

//뮤직 리스트 버튼
musicPlay.addEventListener("click", () => {
    musicList.classList.add("show");
});

// 뮤직 리스트 구현하기
for (let i = 0; i < allMusic.length; i++) {
    let li = `
      <li data-index="${i + 1}">
          <strong>${allMusic[i].name}</strong>
          <em>${allMusic[i].artist}</em>
          <audio class="${allMusic[i].audio}" src="../assets/audio/${
        allMusic[i].audio
    }.mp3"></audio>
          <span class="audio-duration" id="${allMusic[i].audio}">재생시간</span>
      </li>
  `;
    // musicListUl.innerHTML += li; 이렇게 하면 한 번에 로딩해서 값을 인식하지 못하여 마지막곡만 재생시간 나옴
    musicListUl.insertAdjacentHTML("beforeend", li); // 이렇게 해야 다 나옴!!
    // insertAdjacentHTML :
    // beforeend : element 안에 가장 마지막 child
    // 리스트에 재생 시간 불러오기
    let liAudioDuration = musicListUl.querySelector(`#${allMusic[i].audio}`); // 리스트에서 시간을 표시할 선택자를 가져옴
    let liAudio = musicListUl.querySelector(`.${allMusic[i].audio}`); // 리스트에서 오디오를 가져옴
    liAudio.addEventListener("loadeddata", () => {
        let audioDuration = liAudio.duration; // 오디오 전체 길이
        let totalMin = Math.floor(audioDuration / 60); // 전체 길이를 분 단위로 쪼갬
        let totalSec = Math.floor(audioDuration % 60); // 초
        if (totalSec < 10) totalSec = `0${totalSec}`; // 초 앞 자리에 0 추가
        liAudioDuration.innerText = `${totalMin}:${totalSec}`; // 문자열 출력
        liAudioDuration.setAttribute(
            "data-duration",
            `${totalMin}:${totalSec}`
        ); // 속성에 오디오 길이 기록
    });
}

//뮤직 리스트를 클릭하면 재생
function playListMusic() {
    const musicListAll = musicListUl.querySelectorAll("li"); //뮤직 리스트 목록
    for (let i = 0; i < musicListAll.length; i++) {
        let audioTag = musicListAll[i].querySelector(".audio-duration");

        if (musicListAll[i].classList.contains("playing")) {
            //클래스가 존재하면 삭제
            musicListAll[i].classList.remove("playing");
            let adDuration = audioTag.getAttribute("data-duration"); //오디오 길이 값 가져오기
            audioTag.innerText = adDuration; //오디오 길이 값 출력
        }

        if (musicListAll[i].getAttribute("data-index") == musicIndex) {
            //현재 뮤직 인덱스랑 리스트 인덱스 값이 같으면
            musicListAll[i].classList.add("playing"); //클래스 playing 추가
            audioTag.innerText = "재생중"; // 재생중일 경우 재생 중 멘트 추가
        }
        // this : 자기자신을 의미
        musicListAll[i].setAttribute("onclick", "clicked(this)"); // setAttribute : 요소에 속성 붙이기! (앞 : 속성명 / 뒤 : 속성값)
    }
}

//뮤직 리스트를 클릭하면..
function clicked(el) {
    let getLiIndex = el.getAttribute("data-index"); //클릭한 뮤직 리스크의 인덱스 값을 저장한다.
    musicIndex = getLiIndex; //클릭한 인덱스 값을 뮤직 인덱스에 저장한다.
    loadMusic(musicIndex); //해당 인덱스 뮤직을 로드한다.
    playMusic(); // 음악을 재생
    playListMusic(); //음악이 추가 될 때 리스트를 업데이트 시킨다.
}

window.addEventListener("load", () => {
    loadMusic(musicIndex); //음악재생
    playListMusic(); //리스트 초기화
});

// 볼륨 조절
const audio = document.getElementById("main-audio");
const audioVolume = document.getElementById("volume-control");
audioVolume.addEventListener("change", function (e) {
    audio.volume = this.value / 10;
});
