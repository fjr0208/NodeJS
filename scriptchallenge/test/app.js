const fs = require('fs');
const EventEmitter = require('events');
const emitter = new EventEmitter();
const path = require('path');
const { homedir } = require('os');
const { dirname } = require('path');

//1. 사용자가 원하는 폴더 이름 가져오기
// 2. 폴더안에 3가지 폴더 만들기
// 3. 폴더안의 파일들을 돌면서 분류하기

// function makeDirectory() {
//     fs.readdir('./')
//         .then((data) => duplicateCheck(data, '1234'))
//         .catch(console.error);
//     return;
// }
// function duplicateCheck(data, args) {
//     if (data == args) {
//         console.log(`already exist ${args}`);
//     } else {
//         fs.mkdir(args).catch(console.error);
//     }

//     return;
// }
// makeDirectory();

const folder = path.dirname(__filename);

const videoDir = (folder, 'videoDir');
const capturedDir = (folder, 'capturedDir');
const duplicatedDir = (folder, 'duplicatedDir');

!fs.existsSync(videoDir) && fs.mkdirSync(videoDir);
!fs.existsSync(capturedDir) && fs.mkdirSync(capturedDir);
!fs.existsSync(duplicatedDir) && fs.mkdirSync(duplicatedDir);


fs.promises.readdir(folder).then(divideFilename).catch(console.log);

function divideFilename(filename) {
    filename.forEach((file) => {
        if (isVideoFile(file)) {
            move(videoDir, file);
        } else if (isCapturedFile) {
            move(capturedDir, file);
        } else if (isDuplicatedFile(filename, file)) {
            move(duplicatedDir, file);
        }
    });
}
function isVideoFile(file) {
    const regExp = /(mp4|mov)$/gm;
    const match = file.match(regExp);
    return !!match;
    // match에 결과값이 있으면 true반환, 없으면 false 반환
}

function isCapturedFile(file) {
    const regExp = /(png|aae)$/gm;
    const match = file.match(regExp);
    return !!match;
}

function isDuplicatedFile(filename, file) {
    if (!file.startsWith('IMG_') || file.startsWith('IMG_E')) {
        return false;
    }
    const edited = `IMG_E${file.split('_')[1]}`;
    const found = filename.find((f) => f.includes(edited));

    return !!found;
}

function move(movingFolder, file) {
    const oldpath = path.join(folder, file);
    const newpath = path.join(movingFolder, file);
    fs.promises.rename(oldpath, newpath).catch(console.error);
}