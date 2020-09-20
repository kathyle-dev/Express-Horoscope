document.getElementById("button").addEventListener("click", (e)=>{
  var sign = "";
  var day = parseFloat(document.getElementById("day").value);
  var month = parseFloat(document.getElementById("month").value);
  if ((month==4 && day<=20) || (month==3 && (day>=21 && day<=31))){
    sign = "aries"
    window.open("/filter/aries", "_self")
  } else if ((month ==5 && day<=21) || (month==4 && (day>= 21 && day<=30))){
    sign = "taurus"
    window.open("/filter/taurus", "_self")
  }else if ((month ==6 && day<=21) || (month==5 && (day>= 22 && day<=31))){
    sign = "gemini"
    window.open("/filter/gemini", "_self")
  } else if ((month ==7 && day<=22) || (month==6 && (day>= 22 && day<=30))){
    sign = "cancer"
    window.open("/filter/cancer", "_self")
  }else if ((month ==8 && day<=22) || (month==7 && (day>= 23 && day<=31))){
    sign = "leo"
    window.open("/filter/leo", "_self")
  }else if ((month ==9 && day<=22) || (month==8 && (day>= 23 && day<=31))){
    sign = "virgo"
    window.open("/filter/virgo", "_self")
  }else if ((month ==10 && day<=22) || (month==9 && (day>= 23 && day<=30))){
    sign = "libra"
    window.open("/filter/libra", "_self")
  }else if ((month ==11 && day<=21) || (month==10 && (day>= 23 && day<=31))){
    sign = "scorpio"
    window.open("/filter/scorpio", "_self")
  }else if ((month ==12 && day<=21) || (month==11 && (day>= 22 && day<=30))){
    sign = "sagittarius"
    window.open("/filter/sagittarius", "_self")
  }else if ((month ==1 && day<=20) || (month==12 && (day>= 22 && day<=31))){
    sign = "capricorn"
    window.open("/filter/capricorn", "_self")
  }else if ((month ==2 && day<=19) || (month==1 && (day>= 21 && day<=31))){
    sign = "aquarius"
    window.open("/filter/aquarius", "_self")
  }else if ((month ==3 && day<=20) || (month==2 && (day>= 20 && day<=29))){
    sign = "pisces"
    window.open("/filter/pisces", "_self")
  }
})
