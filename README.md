# WP-DisableJapaneseHolidays

This repository contains code for customizing the datepicker functionality in a WordPress theme. The code allows you to disable Saturdays, Sundays, and Japanese holidays from being selected in datepicker fields.

## Setup

1. **Dependencies**: Ensure that your WordPress theme includes jQuery and jQuery UI. You can include them from a CDN or locally.

2. **Datepicker Initialization**: Initialize the datepicker on input fields with the placeholder attribute set to "date".

3. **Removing Class**: Remove the class "hasDatepicker" from all input elements to ensure proper initialization, especially if using with other plugins like MW WP Form.

4. **API Integration**: Integrate an API for Japanese holidays. In this code, we're using the holidays-jp API to fetch Japanese holidays data.

5. **Disabling Days**: Implement logic to disable Saturdays, Sundays, and Japanese holidays in the datepicker beforeShowDay function.

6. **Styling**: Optionally, add custom styling by applying classes to enabled weekdays.
