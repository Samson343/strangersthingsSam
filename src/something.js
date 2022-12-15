

const alpha = [
    'a', 'b', 'c', 'd', 'e', 'f',
    'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w', 'x',
    'y', 'z'
  ]

function phoneWords(stringOfNums) {

    let letterSet = ''
    let result = []
    let counter = 0

    for (let i = 0; i < stringOfNums.length; ++i) {
        let curNum = stringOfNums[i]

        if (curNum === stringOfNums[i + 1] && counter < 2) {
            counter++
        }
    
       if (curNum !== stringOfNums[i + 1] || counter === 2) {
            switch (curNum) {
                case '2': letterSet = "abc"
                    break;
                case '3': letterSet = "def"
                    break;
                case '4': letterSet = "ghi"
                    break;
                case '5': letterSet = "jkl"
                    break;
                case '6': letterSet = "mno"
                    break;
                case '7': letterSet = "pqrs"
                    break;
                case '8': letterSet = "tuv"
                    break;
                case '9': letterSet = "wxyz"
                    break;
                default: 
                    break;
            }
            if (letterSet) {
                result.push(letterSet[counter])
            }
            counter = 0
            letterSet = ''
        }
    }

    
    return result
  }
  console.log(phoneWords("222"))
  