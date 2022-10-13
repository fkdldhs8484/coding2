const allMusic = [
  {
    name: 'music_audio01',
    artist: 'Patrick Patrikios',
    img: 'music_v01',
    audio: 'music_audio01',
  },
  {
    name: 'music_audio02',
    artist: 'DJ Freedem',
    img: 'music_v02',
    audio: 'music_audio02',
  },
  {
    name: 'music_audio03',
    artist: 'josh pan',
    img: 'music_v03',
    audio: 'music_audio03',
  },
  {
    name: 'music_audio04',
    artist: 'Jeremy Black',
    img: 'music_v04',
    audio: 'music_audio04',
  },
  {
    name: 'music_audio05',
    artist: 'Patrick Patrikios',
    img: 'music_v05',
    audio: 'music_audio05',
  },
  {
    name: 'music_audio06',
    artist: 'DJ Freedem',
    img: 'music_v06',
    audio: 'music_audio06',
  },
  {
    name: 'music_audio07',
    artist: 'Asher Fulero',
    img: 'music_v07',
    audio: 'music_audio07',
  },
  {
    name: 'music_audio08',
    artist: 'Jeremy Black',
    img: 'music_v08',
    audio: 'music_audio08',
  },
  {
    name: 'music_audio09',
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
const musicList = musicWrap.querySelector('.music__list')
const musicListUl = musicList.querySelector('.music__list ul')
const musicListClose = musicList.querySelector('.music__list a .close')

let musicIndex = 1  // 현재 음악 인덱스

// 음악 재생
function loadMusic(num) {
  musicName.innerText = allMusic[num - 1].name  // 뮤직 이름
  musicArtist.innerText = allMusic[num - 1].artist  // 뮤직 아티스트 로드
  musicView.src = `../assets/img/${allMusic[num - 1].img}.png`  // 뮤직 이미지 로드
  musicView.alt = allMusic[num - 1].name    // 뮤직 이미지 alt 로드
  musicAudio.src = `../assets/audio/${allMusic[num - 1].audio}.mp3`     // 뮤직 로드
}
musicAudio.play()

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

// 이전 곡 듣기 버튼
function prevMusic() {
  // musicIndex --
  musicIndex == 1 ? (musicIndex = allMusic.length) : musicIndex--
  loadMusic(musicIndex)
  playMusic()
  playListMusic()
}

// 다음 곡 듣기 버튼
function nextMusic() {
  // musicIndex ++
  musicIndex == allMusic.length ? (musicIndex = 1) : musicIndex++
  loadMusic(musicIndex)
  playMusic()
  playListMusic()
}

// 플레이 버튼 클릭
musicPlay.addEventListener('click', () => {
  const isMusicPaused = musicWrap.classList.contains('paused') // 음악이 재생중
  isMusicPaused ? pauseMusic() : playMusic()
})

// 이전곡 버튼 클릭
musicPrevBtn.addEventListener('click', () => {
  prevMusic()
})

// 다음곡 버튼 클릭
musicNextBtn.addEventListener('click', () => {
  nextMusic()
})

// 뮤직 리스트 버튼
musicListBtn.addEventListener('click', () => {
  musicListUl.classList.add('show')
})
musicListClose.addEventListener('click', () => {
  musicList.classList.remove('hide')
})

// 뮤직 리스트 구현하기
for (let i = 0; i < allMusic.length; i++) {
  let li = `
            <li data-index="${i + 1}">
                <strong>${allMusic[i].name}</strong>
                <em>${allMusic[i].artist}</em>
                <audio class="${allMusic[i].audio}" src="../assets/audio/${
    allMusic[i].audio
  }.mp3"></audio>
                <span class="audio-duration" id="${
                  allMusic[i].audio
                }">재생시간</span>
            </li>
        `

  // musicListUl.innerHTML += li
  musicListUl.insertAdjacentHTML('beforeend', li)

  //   리스트에 음악 시간 불러오기
  let liAudioDuration = musicListUl.querySelector(`#${allMusic[i].audio}`) // 리스트에서 시간을 표시할 선택자를 가져옴
  let liAudio = musicListUl.querySelector(`.${allMusic[i].audio}`) //리스트에서 오디오를 가져옴
  liAudio.addEventListener('loadeddata', () => {
    let audioDuration = liAudio.duration // 오디오 전체 길이
    let totalMin = Math.floor(audioDuration / 60) // 전체 길이를 분 다위 쪼갬
    let totalSec = Math.floor(audioDuration % 60) // 초 계산

    if (totalSec < 10) totalSec = `0${totalSec}` // 앞 자리에 0추가
    liAudioDuration.innerText = `${totalMin}:${totalSec}` //문자열 추가
    liAudioDuration.setAttribute('data-duration', `${totalMin}:${totalSec}`) // 속성에 오디오 길이 기록
  })
}

// 뮤직 리스트를 클리하면 재생
function playListMusic() {
  const musicListAll = musicListUl.querySelectorAll('li') //뮤직 리스트 목록
  for (let i = 0; i < musicListAll.length; i++) {
    let audioTag = musicListAll[i].querySelector('.audio-duration')

    // 현재재생된음악 효과 주기
    if (musicListAll[i].classList.contains('playing')) {
      musicListAll[i].classList.remove('playing') // 클래스가 존재하면 삭제
      let audioDuration = audioTag.getAttribute('data-duration') // 오디오 길이 값 가져오기
      audioTag.innerText = audioDuration //오디오 길이 값 출력
    }
    if (musicListAll[i].getAttribute('data-index') == musicIndex) {
      // 현재 뮤직인덱스랑 리스트 인덱스 값이 같으면
      musicListAll[i].classList.add('playing') //클래스 playing 추ㅏㄱ
      audioTag.innerText = '재생중' //재생중일 경우 재생중 멘트 추가
    }

    musicListAll[i].setAttribute('onclick', 'clicked(this)')
  }
}

// 뮤직 리스트를 클릭하면...
function clicked(el) {
  let getLiIndex = el.getAttribute('data-index') //클릭한 리스트의 인덱스값을 저장
  musicIndex = getLiIndex //클릭한 인덱스 값을 뮤직 인덱스 저장
  loadMusic(musicIndex) //해당 인덱스 뮤직 로드
  playMusic() //음악 재생
  playListMusic() //음악 리스트 업데이트
}

// 뮤직 진행바
musicAudio.addEventListener('timeupdate', (e) => {
  // console.log(e);

  const currentTime = e.target.currentTime // 현재 재생되는 시간
  const duration = e.target.duration // 오디오의 총 길이
  let progressWidth = (currentTime / duration) * 100 // 전체길이에서 현재 진행되는 시간을 백분위로 나눔

  musicProgressBar.style.width = `${progressWidth}%`

  // 전체 시간
  musicAudio.addEventListener('loadeddata', () => {
    let audioDuration = musicAudio.duration
    let totalMin = Math.floor(audioDuration / 60) // 전체시간을 분단위로 쪼갬
    let totalSec = Math.floor(audioDuration % 60) // 남은 초를 저장
    if (totalSec < 10) totalSec = `0${totalSec}` // 초가 한자리수일때 일의 자리수 앞에 0을 붙임
    musicProgressDuration.innerText = `${totalMin}:${totalSec}` // 완성된 시간 문자열
  })

  // 진행 시간
  let currentMin = Math.floor(currentTime / 60)
  let currentSec = Math.floor(currentTime % 60)
  if (currentSec < 10) currentSec = `0${currentSec}`
  musicProgressCurrent.innerText = `${currentMin}:${currentSec}`
})

// 진행 버튼 클릭
musicProgress.addEventListener('click', (e) => {
  let progressWidth = musicProgress.clientWidth // 진행바 전체 길이
  let clickedOffsetX = e.offsetX // 진행바 기준으로 측정되는 X좌표값
  let songDuration = musicAudio.duration // 오디오 전체 길이

  musicAudio.currentTime = (clickedOffsetX / progressWidth) * songDuration // 백분위로 나눈 숫자에 다시 전체 길이를 곱해서 현재 재생값으로 바꿈
})

// 반복 버튼 클릭
musicRepeat.addEventListener('click', () => {
  let getAttr = musicRepeat.getAttribute('class')

  switch (getAttr) {
    case 'repeat':
      musicRepeat.setAttribute('class', 'repeat_one')
      musicRepeat.setAttribute('title', '한곡 반복')
      break
    case 'repeat_one':
      musicRepeat.setAttribute('class', 'shuffle')
      musicRepeat.setAttribute('title', '랜덤 재생')
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
      let randomIndex = Math.floor(Math.random() * allMusic.length + 1) //랜던 인덱스 생성
      do {
        randomIndex = Math.floor(Math.random() * allMusic.length + 1)
      } while (musicIndex == randomIndex)
      musicIndex = randomIndex // 현재 인덱스를 랜덤 인덱스 변경
      loadMusic(musicIndex) // 랜덤 인덱스가 반영된 현재 인덱스 값으로 음악을 다시 로드
      playMusic() // 로드한 음악을 재생
      break
  }
  playListMusic() // 재생목록 업데이트
})

// 버튼 바꿔주기
const btnPlay = document.querySelector('#control-play')
const btnStop = document.querySelector('#control-stop')

btnStop.style.display = 'none'

btnPlay.addEventListener('click', () => {
  playMusic()
  btnStop.style.display = 'block'
  btnPlay.style.display = 'none'
})

btnStop.addEventListener('click', () => {
  pauseMusic()
  btnStop.style.display = 'none'
  btnPlay.style.display = 'block'
})

// 로드
window.addEventListener('load', () => {
  loadMusic(musicIndex) //음악 재생
  playListMusic() //리스트 초기화
})
