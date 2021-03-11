function detect(comment) {
    let commentSlice = comment.slice(0,19);
    if (commentSlice === "Can someone explain"){
        return true
    } return false
  }

  console.log(detect('Can someone explain to me what this kata is about?'))