 // debugger;
  // ^^ days ago
  console.log("DATE", date)
  if (date > 1) {
    // console.log('date', date, date + " day ago" )
    date = date + " days ago"
  } else if (date === 1) {
    // console.log('date', date, date + " days ago" )
     date = date + " day ago"
  }
  if (date < 1) { // hours ago
    console.log("DATE", date)
    let date = Math.floor((dateNow - new Date(tweet.created_at))/3600000)
    if (date > 1) {
      // console.log('date', date, date + " hours ago" )
      date = date + " hours ago"
    } else if (date === 1) {
      // console.log('date', date, date + " hour ago" )
      date = date + " hour ago"
    }
    if (date === 0) {
      let date = Math.floor((dateNow - new Date(tweet.created_at))/60000)
      if (date > 1) {
        // console.log('date', date, date + " minutes ago" )
        date = date + " minutes ago"
      } else if (date === 1) {
        // console.log('date', date, date + " minute ago" )
        date = date + " minute ago"
      }
      if (date === 0) {
        let date = Math.floor((dateNow - new Date(tweet.created_at))/1000)
        if (date > 1) {
          // console.log('date', date, date + " seconds ago" )
          date = date + " seconds ago"
        } else if (date === 1) {
          // console.log('date', date, date + " second ago" )
          date = date + " second ago"
        }
      }
    }
  }
  console.log("DATTTTTTEEEEEE", date)