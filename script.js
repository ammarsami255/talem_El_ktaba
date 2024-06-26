function checkSentence(num) {
    var input = document.getElementById('input' + num).value;
    var sentence = document.getElementById('sentence' + num).textContent;
    var feedback = document.getElementById('feedback' + num);
    
    if (input === sentence) {
        feedback.textContent = "عمل رائع! الجملة صحيحة.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "الجملة غير صحيحة. حاول مرة أخرى.";
        feedback.style.color = "red";
    }
}
