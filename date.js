/*

################################################## 

Disable Saturyday, Sunday and Japan Holidays via API

# This script use the following scripts
<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>

# Japanese translation for the date UI
<script src="https://rawgit.com/jquery/jquery-ui/master/ui/i18n/datepicker-ja.js"></script>

# If you don't want to disable but change the style of, you can return the folllowing code to add a class to style with CSS;
return [true, 'day-sunday', null];
return [true, 'day-saturday', null]; 
return [true, 'day-holiday', null];

# Reference
https://www.site-convert.com/archives/2190

*/

window.onload = function(){

    //You MUST disable the following class to use this script on MW WP Form
    allInputs = document.querySelectorAll('input');

    allInputs.forEach(e => 
        e.classList.remove("hasDatepicker");
    );

    //Load API & Function
    jQuery.get("https://holidays-jp.github.io/api/v1/date.json", function(holidaysData) {

        jQuery('input[placeholder="date"]').datepicker({

            //Prevent user selecting more than 31 days
            minDate: 1,
            maxDate: 31,

            beforeShowDay: function(date) {
                
                //Disable Saturyday & Sunday
                if (date.getDay() == 0) {
                return [false, 'ui-state-disabled'];
                } else if (date.getDay() == 6) {
                return [false, 'ui-state-disabled'];
                }
                
                //Disable Japan Holidays
                var holidays = Object.keys(holidaysData);

                for (var i = 0; i < holidays.length; i++) {

                    var holiday = new Date(Date.parse(holidays[i]));

                    if (holiday.getYear() == date.getYear() &&
                        holiday.getMonth() == date.getMonth() &&
                        holiday.getDate() == date.getDate()) {
                        return [false, 'ui-state-disabled'];
                    }

                }

                //Add class to style
                return [true, 'day-weekday', null];

            }

        });

    });

};


//################################################## Simply Disable Saturyday & Sunday

jQuery('input[placeholder="date"]').datepicker({

    minDate: 1,
    maxDate: 31,

    beforeShowDay: function(date) {

        if(date.getDay() == 0 || date.getDay() == 6) {
            return [false, 'ui-state-disabled'];
        }
        else {
            return [true, ''];
        }

    }
});
