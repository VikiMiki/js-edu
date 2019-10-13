/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'profession', 
    knowsProgramming = true,
    config = studentConfig
    ) {
      let  hours,
           focus_weeks,
           week;
      
      if (knowsProgramming == true) 
        {hours = 800;}
      else 
        {hours = 800+500;}

      for (key in config){
        if ( key == focus) {
          focus_weeks = config[key];
      for (key in config){
          week= Math.ceil(hours/focus_weeks);
        }
      }
    }

    return week;
      
  };