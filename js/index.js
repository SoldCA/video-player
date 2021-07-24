const $video =  document.querySelector('#video');
const $play =  document.querySelector('#play');
const $pause =  document.querySelector('#pause');
const $backward =  document.querySelector('#backward');
const $forward =  document.querySelector('#forward');
const $progress = document.querySelector ('#progress');


$play.addEventListener('click', handlePlay );

$pause.addEventListener('click', handlePause );

function handlePlay() {
    $video.play()
    $play.hidden = true;
    $pause.hidden = false;
    console.log ('Reproduciendo el video')
}

function handlePause() {
    $video.pause()
    $pause.hidden = true;
    $play.hidden = false;
    console.log('Video pausado')
}

$backward.addEventListener('click', handleBackward );
function handleBackward(){
    $video.currentTime -=10;
    console.log ('Retrocede 10 segundos');
}

$forward.addEventListener('click', handleForward);
function handleForward(){
    $video.currentTime +=10;
    console.log ('Avanza 10 segundos');
}


$video.addEventListener('loadedmetadata', handleLoded);

$video.addEventListener('timeupdate', handleTimeUpdate);
function handleLoded (){
    $progress.max = $video.duration
    console.log('se ha cargado el video');
}

function handleTimeUpdate(){
    $progress.value = $video.currentTime;

}
$progress.addEventListener ('input', handleInput);
function handleInput (){
    $video.currentTime = $progress.value;
    console.log ($video.currentTime);
}