function calculate() {
    let expression = document.getElementById('expression').value;
    try {
        let match = expression.match(/(sin|cos|tan)\((-?\d+(\.\d+)?)\)/);
        if (match) {
            let trigFunction = match[1];
            let angle = parseFloat(match[2]);
            if (trigFunction === 'sin') {
                let radians = angle * (Math.PI / 180);
                let result = Math.sin(radians).toFixed(1);
                document.getElementById('result').value = result;
            } else if (trigFunction === 'cos') {
                let radians = angle * (Math.PI / 180);
                let result = Math.cos(radians).toFixed(1);
                document.getElementById('result').value = result;
            } else if (trigFunction === 'tan') {
                if (angle % 180 === 90) {
                    document.getElementById('result').value = "Undefined";
                } else {
                    let radians = angle * (Math.PI / 180);
                    let result = Math.tan(radians).toFixed(1);
                    document.getElementById('result').value = result;
                }
            }

        } else {
            document.getElementById('result').value = "Invalid input";
        }
    } catch (error) {
        document.getElementById('result').value = "Error";
    }


}