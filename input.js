const heart = document.getElementById('heart');

const arr1 = {
    ㄱ : 1,
    ㄴ : 1,
    ㄷ : 2,
    ㄹ : 3,
    ㅁ : 3,
    ㅂ : 4,
    ㅅ : 2,
    ㅇ : 1,
    ㅈ : 3,
    ㅊ : 4,
    ㅋ : 2,
    ㅌ : 3,
    ㅍ : 4,
    ㅎ : 4
}

const arr2 = {
    ㅏ : 2,
    ㅑ : 3,
    ㅓ : 2,
    ㅕ : 3,
    ㅗ : 2,
    ㅛ : 3,
    ㅜ : 2,
    ㅠ : 3,
    ㅡ : 1,
    ㅣ : 1,
    ㅐ : 3,
    ㅒ : 4,
    ㅔ : 3,
    ㅖ : 4
}

function getStroke(array){
    const strokeArr = [];

    array.forEach(nameStrokeArr => {
        const arr = [];
        nameStrokeArr.forEach(stroke => {
            arr.push(arr1[stroke] || arr2[stroke])
        })
        strokeArr.push(arr);
    });
    
    return strokeArr;
}

function sumStrokeArr(array) {
    return array.map(strokeArr => {
        return strokeArr.reduce((sum, stroke) => sum + stroke,0);
    })
}

heart.onclick = () =>{
    const name1 = document.getElementById('name1').value;
    const name2 = document.getElementById('name2').value;
    const text1 = Hangul.d(name1, true);
    const text2 = Hangul.d(name2, true);
    
    if(text1.length !== 2 && text1.length !== 3)
    {
        alert('2글자 혹은 3글자만 가능합니다.')
        return;
    }

    const strokeSumArr1 = sumStrokeArr(getStroke(text1));
    const strokeSumArr2 = sumStrokeArr(getStroke(text2));

    console.log(strokeSumArr1);
    console.log(strokeSumArr2);

    const arr1 = [];
    const arr2 = [];
    const arr3 = [];
    const arr4 = [];

    arr1[0] = (strokeSumArr1[0] + strokeSumArr2[0]) % 10;
    arr1[1] = (strokeSumArr1[1] + strokeSumArr2[0]) % 10;
    arr1[2] = (strokeSumArr1[1] + strokeSumArr2[1]) % 10;
    arr1[3] = (strokeSumArr1[2] + strokeSumArr2[1]) % 10;
    arr1[4] = (strokeSumArr1[2] + strokeSumArr2[2]) % 10;
    console.log(arr1);
    arr2[0] = (arr1[0] + arr1[1]) % 10;
    arr2[1] = (arr1[1] + arr1[2]) % 10;
    arr2[2] = (arr1[2] + arr1[3]) % 10;
    arr2[3] = (arr1[3] + arr1[4]) % 10;
    console.log(arr2);
    arr3[0] = (arr2[0] + arr2[1]) % 10;
    arr3[1] = (arr2[1] + arr2[2]) % 10;
    arr3[2] = (arr2[2] + arr2[3]) % 10; 
    console.log(arr3)
    if(arr3[0] === 1 && arr3[1] === 0 && arr3[2] === 0)
    {
        localStorage.setItem('score', '100');
    }
    else
    {
        arr4[0] = 0;
        arr4[1] = (arr3[0] + arr3[1]) % 10;
        arr4[2] = (arr3[1] + arr3[2]) % 10;
        console.log(arr4)
        console.log(arr4[0],arr4[1], arr4[2])
        localStorage.setItem('score', `${arr4[0]}${arr4[1]}${arr4[2]}`)
    }
    window.location.href = "check.html";
}