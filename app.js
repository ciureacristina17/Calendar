const lang = navigator.language;
        let date = new Date();
        let dayname = date.toLocaleString(lang,{weekday:'long'});
        let daynumber = date.getDate();
        let nonth = date.getMonth();
        let monthname = date.toLocaleString(lang,{month:'long'});
        let year = date.getFullYear();

        document.getElementById("monthname").innerHTML = monthname;
        document.getElementById("daynumber").innerHTML = daynumber;
        document.getElementById("dayname").innerHTML = dayname;
        document.getElementById("year").innerHTML = year;