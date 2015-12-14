XMLLIST = {

	//general settings
	xml: 'news.xml?' + Math.random(0,1), //solve ie weird caching issue
	appendTo: '.xmllist', //set the id/class to insert XML data
	
	init: function () {	
		//jQuery ajax call to retrieve the XML file
		$.ajax({
			type: "GET",
	    	url: XMLLIST.xml,
	   		dataType: "xml",	   		
	   	 	success: XMLLIST.parseXML
	  	});		
	}, // end: init()
	
	parseXML: function (xml) {	
		//Grab every single ITEM tags in the XML file
		var data = $('item', xml).get();
		//Allow user to toggle display randomly or vice versa
		var list = (XMLLIST.random) ? XMLLIST.randomize(data) : data;
		var i = 1;
		
		//Loop through all the ITEMs
		$(list).each(function () {			
			//Parse data and embed it with HTML
			XMLLIST.insertHTML($(this));		
			//If it reached user predefined total of display item, stop the loop, job done.
			if (i == XMLLIST.display) return false;
			i++;
		});
	}, // end: parseXML()
    

	insertHTML: function (item) {
		//retrieve each of the data field from ITEM
		var caption = item.find('capt').text();
		var desc = item.find('desc').text();
		var link = item.find('link').text();
		var html;
		
		//Embed them into HTML code
		html = '<p>';
		html += '<strong>' + caption + '</strong>';
		html += '' + desc + '';
		html += '<a href="'+ link+'" class="pagin">Read More...</a>';
		html += '</p>';
		
		//Append it to user predefined element
		$(html).appendTo(XMLLIST.appendTo);
        
        //start paginate data
    makePager = function(page){
        var show_per_page = 5;
        var number_of_items = $('#paginate p').size();
        var number_of_pages = Math.ceil(number_of_items / show_per_page);
        var number_of_pages_todisplay = 5;
            var navigation_html = '';
            var current_page = page;
            var current_link = (number_of_pages_todisplay >= current_page ? 1 : number_of_pages_todisplay + 1);
            if (current_page > 1)
                current_link = current_page;
            if (current_link != 1) navigation_html += "<a class='nextbutton' href=\"javascript:first();\">&laquo;  First&nbsp;</a>&nbsp;<a class='nextbutton' href=\"javascript:previous();\"> &lsaquo; Prev&nbsp;</a>&nbsp;";
            if (current_link == number_of_pages - 1) current_link = current_link - 3;
            else if (current_link == number_of_pages) current_link = current_link - 4;
            else if (current_link > 2) current_link = current_link - 2;
            else current_link = 1;
            var pages = number_of_pages_todisplay;
            while (pages != 0) {
                if (number_of_pages < current_link) { break; }
                if (current_link >= 1)
                    navigation_html += "<a class='" + ((current_link == current_page) ? "currentPageButton" : "numericButton") + "' href=\"javascript:showPage(" + current_link + ")\" longdesc='" + current_link + "'>" + (current_link) + "</a>&nbsp;";
                current_link++;
                pages--;
            }
            if (number_of_pages > current_page){
                navigation_html += "<a class='nextbutton' href=\"javascript:next()\">Next   &rsaquo;</a>&nbsp;<a class='nextbutton' href=\"javascript:last(" + number_of_pages + ");\">Last &raquo;</a>";
            }
                    $('#page_navigation').html(navigation_html);
      }
      var pageSize = 5;
      showPage = function (page) {
            $("#paginate p").hide();
            $('#current_page').val(page);
            $("#paginate p").each(function (n) {
                if (n >= pageSize * (page - 1) && n < pageSize * page)
                    $(this).show();
            });
        makePager(page);
       }
        showPage(1);
       next = function () {
            new_page = parseInt($('#current_page').val()) + 1;
            showPage(new_page);
        }
        last = function (number_of_pages) {
            new_page = number_of_pages;
            $('#current_page').val(new_page);
            showPage(new_page);
        }
        first = function () {
            var new_page = "1";
            $('#current_page').val(new_page);
            showPage(new_page);    
      }
        previous = function () {
            new_page = parseInt($('#current_page').val()) - 1;
            $('#current_page').val(new_page);
            showPage(new_page);
      }
      //end paginate data 
        		
	}, // end: insertHTML()

}

//Run this script
XMLLIST.init();

