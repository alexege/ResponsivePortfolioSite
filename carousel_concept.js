function selectUser(){
    var names = ['Alexander Ege', 'Hadee Krad', 'Michelle Tanzil', 'Zara Guevara', 'Bailey Varness', 'Elias Arellano', 'Francisco Zamora', 'Kathy Dang', 'Reed Crawley', 'Tony Toriz']
    var random_user_id = ParseInt(Math.random()*names.length);
    return names[random_user_id];
}

console.log(selectUser());