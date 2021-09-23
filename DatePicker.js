      let DatePickerToDatabase = (date) => {
            let newdate = ''
            if (date !== undefined) {
                  newdate = date.year + '/' + ('0' + date.month).slice(-2) + '/' + ('0' + date.day).slice(-2)
                  return newdate
            } else return date
      }
      
       let DatabaseToDatePicker = (date) => {
          let newdate = ''
            if (date !== undefined) {

                  let splited = date.split("/")
                  let result = { year: Number(splited[0]), month: Number(splited[1]), day: Number(splited[2]) }
                  return result
            } else return date
      }
       
function GetMinimumDate() {
      let todayDate = new Date().toLocaleDateString('fa-IR')
      let x = toDateFormat(todayDate)
      const minimumDate = {year: Number(x.split("/")[0]) , month: Number(x.split("/")[1]), day: Number(x.split("/")[2])}
      return minimumDate
}
