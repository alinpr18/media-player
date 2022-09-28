import MediaPlayer from "./MediaPlayer"
import AutoPause from './plugins/AutoPause'
import AutoPlay from './plugins/AutoPlay'

const video: HTMLMediaElement = document.querySelector('video') as HTMLMediaElement
const player = new MediaPlayer({ elem: video, plugins: [new AutoPlay(), new AutoPause()] })

const playButton: HTMLElement = document.querySelector('#playButton') as HTMLElement
playButton.onclick = () => player.togglePlay()

const muteButton: HTMLElement = document.querySelector('#muteButton') as HTMLElement
muteButton.onclick = () => {
  if (player.media.muted) {
    player.unmute()
  } else {
    player.mute()
  }
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .catch(error => console.log(error.message))
}