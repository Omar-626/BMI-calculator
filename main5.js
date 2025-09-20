let height = document.getElementById(`height`)
let weight = document.getElementById(`weight`)
let button = document.getElementById(`button`)
let output = document.getElementById(`output`)

button.addEventListener((`click`), () => {
    if(!isNaN(weight.value) && !isNaN(height.value)) {
    if(weight.value >= 300 && height.value < 300 && height.value > 0) {
        output.textContent = `مستحيل يكون وزنك ${weight.value} كيلو`
    }
    if(height.value >= 300 && weight.value < 300 && weight.value > 0) {
        output.textContent = `مستحيل يكون طولك ${height.value / 100} متر`
    }
    if(height.value >= 300 && weight.value >= 300) {
        output.textContent = `مستحيل يكون طولك ${height.value / 100} متر و وزنك ${weight.value} كيلو`
    }
    if(weight.value > 0 && weight.value < 300 && height.value < 300 && height.value > 0) {
        if((weight.value / (height.value / 100)**2) < 16) {
            output.textContent = `عندك نحافة شديدة جدا. و بالمناسبة وزنك المثالي هو ${Math.round((height.value / 100)**2 * 21.75)}}` 
        }else if((weight.value / (height.value / 100)**2) < 17) {
            output.textContent = `عندك نحافة متوسطة. و بالمناسبة وزنك المثالي هو ${Math.round((height.value / 100)**2 * 21.75)}`    
        }else if((weight.value / (height.value / 100)**2) < 18.5) {
            output.textContent = `عندك نحافة بسيطة. و بالمناسبة وزنك المثالي هو ${Math.round((height.value / 100)**2 * 21.75)}`    
        }else if((weight.value / (height.value / 100)**2) < 25) {
            output.textContent = `أنت كده طبيعي و وزنك تمام 👍. و بالمناسبة وزنك المثالي هو ${Math.round((height.value / 100)**2 * 21.75)}`    
        }else if((weight.value / (height.value / 100)**2) < 30) {
            output.textContent = `عندك زيادة وزن يا بيه. و بالمناسبة وزنك المثالي هو ${Math.round((height.value / 100)**2 * 21.75)}`
        }else if((weight.value / (height.value / 100)**2) < 35) {
            output.textContent = `عندك سمنة درجة أولى (برميل) . و بالمناسبة وزنك المثالي هو ${Math.round((height.value / 100)**2 * 21.75)}`
        }else if((weight.value / (height.value / 100)**2) < 40) {
            output.textContent = `عندك سمنة درجة ثانية (دب) . و بالمناسبة وزنك المثالي هو ${Math.round((height.value / 100)**2 * 21.75)}`  
        }else {
            output.textContent = `عندك سمنة درجة ثالثة (فيل) . و بالمناسبة وزنك المثالي هو ${Math.round((height.value / 100)**2 * 21.75)}`
        }
    }
    if(weight.value < 0 || height.value < 0) {
        output.textContent = `دخل رقم موجب يا ابو جهل`
    }
    if(weight.value == 0 && height.value > 0) {
        output.textContent = `ازاي يعني وزنك صفر؟؟ عفريت ولا ايه`
    }
    if(height.value == 0 && weight.value > 0) {
        output.textContent = `ازاي يعني طولك صفر؟؟ عفريت ولا ايه`
    }
    if(height.value == 0 && weight.value == 0) {
        output.textContent = `ازاي يعني طولك و وزنك صفر؟؟ عفريت ولا ايه`
    }
    }else {
        output.textContent = `دخل رقم لو سمحت`
    }

    console.log(height.value)
    console.log(weight.value)

})