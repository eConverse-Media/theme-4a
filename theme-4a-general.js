$(function() {
    $('#searchColumn .input-group input[id$="SearchTerm"]').attr('placeholder', 'Search...');
    $('.ideation-home .input-group input[id^="IdeationHomePage"]').attr('placeholder', 'Search...');

    handlePageTitle();
    handleQuickLinks();
    handleWelcome();
    handleByLines();
    handleTruncateMonths();
    handleMam();
    handleIdeations();
    handleACLIcons();
    handleCommunityHTML();
});

function handlePageTitle() {
    $('#PageTitleH1').wrap('<div class="page-title" />');
}

function handleQuickLinks() {
    $('.quick-link').wrapAll('<div class="quick-links-wrap"><div class="row"/></div>');

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
    profileName = $('#Welcome_Content #ProfileContainer h4').text();

    if ($('#Welcome_Content #ProfileContainer h4').length) {
        $('.bg-linear .welcome-back').prepend(
            '<span class="welcome-name">Welcome back, <a href="' +
            $('#Welcome_Content #ProfileContainer a[id*="profileLink"]').attr('href') +
            '" >' +
            profileName +
            '</a>!</span>'
        );
    }
}

function handleByLines() {
    $('.recent-activity .SearchResults ul li').each(function() {
        var self = $(this);
        var contentTags = $(self).find('div[id*="pnlTags"]');
        var contentTagsTag = $(self).find('div[id*="pnlTags"] a');
        var byline = $(self).find('.ByLine');
        var communityName = $(self).find('h5');
        var title = $(self).find('.row.title-row > div[id*="pnlTitle"]');
        var profilePic = $(self).find('img');

        if (profilePic.length && contentTagsTag.length == 0) {
            $(byline).appendTo(title);
            $(communityName).appendTo(title);
        } else {
            var self = $(this);
            var contentTags = $(self).find('div[id*="pnlTags"]');
            var byline = $(self).find('.ByLine');
            var communityName = $(self).find('h5');

            $(byline).appendTo(self);
            $(communityName).appendTo(self);
            $(contentTags).appendTo(self);
        }
    });

    $('.interior .SearchResults.HLLandingControl ul li').each(function() {
        var self = $(this);
        var contentTags = $(self).find('div[id*="pnlTags"]');
        var contentTagsTag = $(self).find('div[id*="pnlTags"] a');
        var byline = $(self).find('.ByLine');
        var communityName = $(self).find('h5');
        var title = $(self).find('.row.title-row > div[id*="pnlTitle"]');
        var profilePic = $(self).find('img');

        if (profilePic.length && contentTagsTag.length == 0) {
            $(byline).appendTo(title);
            $(communityName).appendTo(title);
        } else {
            var self = $(this);
            var contentTags = $(self).find('div[id*="pnlTags"]');
            var byline = $(self).find('.ByLine');
            var communityName = $(self).find('h5');

            $(byline).appendTo(self);
            $(communityName).appendTo(self);
            $(contentTags).appendTo(self);
        }
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

function handleMam() {
    $('.mam ul li').each(function() {
        var self = $(this),
            href = $(this).find('a').attr('href');

        $(this).wrapInner('<a href="' + href + '"></a>');
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
    $('.recent-activity ul li').each(function() {
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

    $('.interior .SearchResults.HLLandingControl ul li').each(function() {
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


function handleCommunityHTML() {
    $('.summary-edit img').wrap('<div class="img-container" />');
    $('.summary-edit .Content > *:not(.img-container)').wrapAll('<div class="text-container" />');
}