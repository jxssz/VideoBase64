function getVideoBase64(url) {
    return new Promise(function (resolve) {
        let dataURL = ''
        let video = document.createElement('video')
        video.setAttribute('crossOrigin', 'anonymous') //处理跨域
        video.setAttribute('src', url)
        video.setAttribute('width', '100%')
        video.setAttribute('height', '100%')
        video.setAttribute('autoplay', 'autoplay')
        video.currentTime = 1
        video.addEventListener('canplaythrough', function () {
            let canvas = document.createElement('canvas'),
                width = video.width, //canvas的尺寸和图片一样
                height = video.height
            canvas.width = width
            canvas.height = height
            canvas.getContext('2d').drawImage(video, 0, 0, width, height) //绘制canvas
            dataURL = canvas.toDataURL('image/jpeg') //转换为base64
            resolve(dataURL)
        })
    })
}
export { getVideoBase64 }
