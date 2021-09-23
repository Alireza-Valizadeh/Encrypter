      let DatePickerToDatabase = (date) => {
            let newdate = ''
            if (date !== undefined) {
                  newdate = date.year + '/' + ('0' + date.month).slice(-2) + '/' + ('0' + date.day).slice(-2)
                  return newdate
            } else return date
      }
