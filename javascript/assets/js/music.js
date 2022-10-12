const allMusic = [
  {
    name: '1. music_audio01',
    artist: 'Patrick Patrikios',
    img: 'music_v01',
    audio: 'music_audio01',
  },
  {
    name: '2. music_audio02',
    artist: 'DJ Freedem',
    img: 'music_v02',
    audio: 'music_audio02',
  },
  {
    name: '3. music_audio03',
    artist: 'josh pan',
    img: 'music_v03',
    audio: 'music_audio03',
  },
  {
    name: '4. music_audio04',
    artist: 'Jeremy Black',
    img: 'music_v04',
    audio: 'music_audio04',
  },
  {
    name: '5. music_audio05',
    artist: 'Patrick Patrikios',
    img: 'music_v05',
    audio: 'music_audio05',
  },
  {
    name: '6. music_audio06',
    artist: 'DJ Freedem',
    img: 'music_v06',
    audio: 'music_audio06',
  },
  {
    name: '7. music_audio07',
    artist: 'Asher Fulero',
    img: 'music_v07',
    audio: 'music_audio07',
  },
  {
    name: '8. music_audio08',
    artist: 'Jeremy Black',
    img: 'music_v08',
    audio: 'music_audio08',
  },
  {
    name: '9. music_audio09',
    artist: 'Kwon',
    img: 'music_v09',
    audio: 'music_audio09',
  },
]
const musicWrap = document.querySelector('.music__wrap')
const musicView = musicWrap.querySelector('.music__view .img img')
const musicName = musicWrap.querySelector('.music__view .title h3')
const musicArtist = musicWrap.querySelector('.music__view .title p')
const musicAudio = musicWrap.querySelector('#main-audio')
const musicPlay = musicWrap.querySelector('#control-play')
const musicPrevBtn = musicWrap.querySelector('#control-prev')
const musicNextBtn = musicWrap.querySelector('#control-next')
const musicProgress = musicWrap.querySelector('.progress')
const musicProgressBar = musicWrap.querySelector('.progress .bar')
const musicProgressCurrent = musicWrap.querySelector(
  '.progress .timer .current',
)
const musicProgressDuration = musicWrap.querySelector(
  '.progress .timer .duration',
)
const musicRepeat = musicWrap.querySelector('#control-repeat')
const musicListBtn = musicWrap.querySelector('#control-list')
const musicList = musicWrap.querySelector('#music-list')
const musicListUl = musicWrap.querySelector('#music-list ul')

let musicIndex = 3
// 음악 재생
function loadMusic(num) {
  musicName.innerText = allMusic[num - 1].name
  musicArtist.innerText = allMusic[num - 1].artist
  musicView.src = `../assets/img/${allMusic[num - 1].img}`
  musicView.alt = allMusic[num - 1].name
  musicAudio.src = `../assets/audio/${allMusic[num - 1].audio}.mp3`
}
// 재생 버튼
function playMusic() {
  musicWrap.classList.add('paused')
  musicPlay.setAttribute('title', '정지')
  musicPlay.setAttribute('class', 'stop')
  musicAudio.play()
}
// 정지 버튼
function pauseMusic() {
  musicWrap.classList.remove('paused')
  musicPlay.setAttribute('title', '재생')
  musicPlay.setAttribute('class', 'play')
  musicAudio.pause()
}
// 이전 곡 듣기 버튼(
function prevMusic() {
  musicIndex == 1 ? (musicIndex = allMusic.length) : musicIndex--
  loadMusic(musicIndex)
  playMusic()
}
// 다음 곡 듣기 버튼(
function nextMusic() {
  musicIndex == allMusic.length ? (musicIndex = 1) : musicIndex++
  loadMusic(musicIndex)
  playMusic()
}
// 뮤직 진행바
musicAudio.addEventListener('timeupdate', (e) => {
  const currentTime = e.target.currentTime //현재 재생되는 시간
  const duration = e.target.duration //오디오의 총 길이
  let progressWidth = (currentTime / duration) * 100 //전체 길에이서 현재 진행되는 시간을 백분위로 나눔
  musicProgressBar.style.width = `${progressWidth}%`

  // 전체시간
  musicAudio.addEventListener('loadeddata', () => {
    let audioDuration = musicAudio.duration
    let totalMin = Math.floor(audioDuration / 60) //전체 시간(초)을 분단위로 쪼갬
    let totalSec = Math.floor(audioDuration % 60) //남은 초를 저장
    if (totalSec < 10) totalSec = `0${totalSec}` //초가 한 자릿수 일때 앞에 0을 붙임
    musicProgressDuration.innerText = `${totalMin}:${totalSec}` //완성된 시간 문자열을 출력
  })

  // 진행시간
  let currentMin = Math.floor(currentTime / 60)
  let currentSec = Math.floor(currentTime % 60)
  if (currentSec < 10) currentSec = `0${currentSec}`
  musicProgressCurrent.innerText = `${currentMin}:${currentSec}`
})

// 진행 버튼 클릭
musicProgress.addEventListener('click', (e) => {
  let progressWidth = musicProgress.clientWidth // 진행바 전체 길이
  let clickedOffsetX = e.offsetX // 진행바 기준으로 측정되는 x좌표
  let songDuration = musicAudio.duration //오디오 전체 길이

  musicAudio.currentTime = (clickedOffsetX / progressWidth) * songDuration // 백분위로 나눈 숫자에 다시 전체 길이를 곱해서 현재 재생값을 바꿈
})

//  반복 버튼 클릭
musicRepeat.addEventListener('click', () => {
  let getAttr = musicRepeat.getAttribute('class')

  switch (getAttr) {
    case 'repeat':
      musicRepeat.setAttribute('class', 'repeat_one')
      musicRepeat.setAttribute('title', '한곡 반복')
      break

    case 'repeat_one':
      musicRepeat.setAttribute('class', 'shuffle')
      musicRepeat.setAttribute('title', '랜덤 반복')
      break

    case 'shuffle':
      musicRepeat.setAttribute('class', 'repeat')
      musicRepeat.setAttribute('title', '전체 반복')
      break
  }
})

// 오디오가 끝나면
musicAudio.addEventListener('ended', () => {
  let getAttr = musicRepeat.getAttribute('class')

  switch (getAttr) {
    case 'repeat':
      nextMusic()
      break
    case 'repeat_one':
      playMusic()
      break
    case 'shuffle':
      let rendomIndex = Math.floor(Math.rendom() * allMusic.length + 1) // 랜던 인덱스 생성

      do {
        rendomIndex = Math.floor(Math.rendom() * allMusic.length + 1)
      } while (musicIndex == rendomIndex)
      musicIndex = randomIndex // 현재 인텍스를 랜덤 인텍스로 변경
      loadMusic(musicIndex) // 랜덤 인덱스가 반영된 현재 인텍스 값으로 음악을 다시 로드
      playMusic() // 로드한 음악.....
      break
  }
})

// 뮤직 리스트 버튼
musicListBtn.addEventListener('click', () => {
  musicListBtn.classList.add('show')
})

// 뮤직 리스트 구현하기
for (let i = 0; i < allMusic.length; i++) {
  let li = `
    <li>
        <strong>${allMusic[i].name}</strong>
        <em>${allMusic[i].artist}</em>
        <span>재생시간</span>
    </li> 
    `

  musicListUl.innerHTML += li
}

// 플레이 버튼 클릭
musicPlay.addEventListener('click', () => {
  const isMusicPauesd = musicWrap.classList.contains('paused') //음악이 재생중
  isMusicPauesd ? pauseMusic() : playMusic()
})
// 이전곡 버튼 클릭
musicPrevBtn.addEventListener('click', () => {
  prevMusic()
})
// 다음곡 버튼 클릭
musicNextBtn.addEventListener('click', () => {
  nextMusic()
})

window.addEventListener('load', () => {
  loadMusic(musicIndex)
})
