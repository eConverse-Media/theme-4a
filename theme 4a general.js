// Handle Background Images function
function handleBgImage(imgElem, elem) {
	var img = $(imgElem).find('img').attr('src'),
		url = "url('" + img + "')";

	$(elem).css('background-image', url);
}

// Document Ready
$(function() {
	$('#searchColumn .input-group input[id$="SearchTerm"]').attr('placeholder', 'Search...');

	handlePageTitle();
	handleQuickLinks();
	handleWelcome();
	handleByLines();
	handleTruncateMonths();
    handleIdeations();
    handleACLIcons();
});

function handlePageTitle() {
	$('#PageTitleH1').wrap('<div class="page-title" />');
}

function handleQuickLinks() {
	$('.quick-link').wrapAll('<div class="quick-links-wrap"><div class="row-wide"/></div>');

	$('.quick-link').each(function() {
		var anchor = $(this).find('a');
		var href = $(this).find('a').attr('href');
		var anchorText = $(this).find('a').text();

		$(anchor).replaceWith('<span>' + anchorText + '</span>');

		$(this).wrap('<div class="col-20" />');
		$(this).wrapInner('<a href="' + href + '"></a>');
	});

	$('.quick-links-wrap .row-wide').append('<div class="clearfix" />');

	$('.quick-links-wrap .col-md-2:first-child').addClass('col-md-offset-1');
}

function handleWelcome() {
	// if ($('#Welcome_Content #ProfileContainer h4').length) {
	//     console.log('test');
	//     $('.bg-linear-variant .quick-links-wrap').prepend(
	//         '<span class="welcome-name">Welcome back, <a href="' +
	//         $('#Welcome_Content #ProfileContainer a[id*="profileLink"]').attr('href') +
	//         '" >' +
	//         profileName +
	//         '</a>!</span>'
	//     );
	//     console.log('test');
}

function handleByLines() {
	$('.recent-activity .SearchResults ul li').each(function() {
		var self = $(this);
		var contentTags = $(self).find('div[id*="pnlTags"]');
		var byline = $(self).find('.ByLine');
		var communityName = $(self).find('h5');

		$(byline).appendTo(self);
		$(communityName).appendTo(self);
		$(contentTags).appendTo(self);
	});
}

function handleTruncateMonths() {
	$('.HLLandingControl.HLEventList ul li').each(function() {
		var self = $(this),
			month = $(self).find('.date-block .calendar-month span').text();

		month = month.substring(0, 3);
		$(self).find('.date-block .calendar-month').text(month);
	});
}

function handleIdeations() {
	$('.ideation-home  ul li').each(function() {
		var self = $(this),
			description = $(self).find('.ideation-description');
    		title = $(self).find('.ideation-title');

		$(description).insertAfter(title);
	});
}

function handleACLIcons() {
    $('.recent-activity ul li').each(function () {
        var self = $(this),
            label = $(self).find('.title-row > .col-md-3 > .label-default'),
            labelText = $(label).text();

        labelText = $.trim(labelText);

        switch (labelText) {
            case 'Announcement':
                $(label).addClass('announcement');
                break;
            case 'Discussion':
                $(label).addClass('discussion');
                break;
            case 'Blog Entry':
                $(label).addClass('blog');
                break;
            case 'Event':
                $(label).addClass('event');
                break;
            default: 
                $(label).addClass('default');
                break;
        }
    });
}