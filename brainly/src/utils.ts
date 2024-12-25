export function random(len: number){
    let options = "ksjajklfbgdfkkwghw19238y4501923";
    let length = options.length;

    let ans = "";
    for(let i=0; i<len ; i++){
        ans += options[Math.floor((Math.random() * length))]
    }
    return ans;
}