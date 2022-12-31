export function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    //While there remains elements to shuffle
    while (currentIndex !== 0) {
        //pick a remaining element
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        
        //and swap it with the current element
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
        return array;
}