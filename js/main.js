var input = document.querySelector('inp')
var word = document.querySelector('word')
var input = arr.value
var knopka = document.querySelector('knopka')
var arr = ['olma','uzum','behi','mandarin','apelsin','limon','qovun','mango','kiwi','banan','avakado','shaftoli']
Knopka.addEventListener("click", function(e){
    e.preventDefault()
    arr.forEach(element => {
        console.log(element)
        if(element=input.toLowerCase){
            elWord.textContent = ('fruit is fined')
        }
        else {
            arr.push(input.value.toLowerCase())
            word.textContent = ('arrayga yangi fruit qoshildi')
            console.log(fruit);
        }
    })
})