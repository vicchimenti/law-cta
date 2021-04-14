/***
 *      @author Victor Chimenti, MSCS-SE '20
 *      @file call-to-action-text-html.js
 *      @see Seattle University School of Law Call to Action Feature COntent Type
 *      law/text/html
 *
 *      Document will write once when the page loads
 *
 *      @version 2.1
 */




 try {

    /***
     *  Assign local variables from the content type's fields
     * 
     * */
    var itemName = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Name' output='normal' modifiers='striptags,htmlentities' />");
    var headline = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Headline' output='normal' modifiers='striptags,htmlentities' />");
    var headlineColor = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Headline color' output='normal' display_field='value' />");
    var backgroundImage = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Background Image' output='normal' formatter='path/*' />");
    var colorOverlay = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Color Overlay' output='normal' display_field='value' />");
    var zoneOption = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Zone Option' output='normal' display_field='value' />");

    var btnOneText = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Link #1 Text' output='normal' modifiers='striptags,htmlentities' />");
    var btnOneLink = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Link #1' output='linkurl' modifiers='nav_sections' />");
    var btnOneTitle = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Link #1' output='linktext' modifiers='nav_sections' />");

    var btnTwoText = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Link #2 Text' output='normal' modifiers='striptags,htmlentities' />");
    var btnTwoLink = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Link #2' output='linkurl' modifiers='nav_sections' />");
    var btnTwoTitle = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Link #2' output='linktext' modifiers='nav_sections' />");

    var btnThreeText = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Link #3 Text' output='normal' modifiers='striptags,htmlentities' />");
    var btnThreeLink = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Link #3' output='linkurl' modifiers='nav_sections' />");
    var btnThreeTitle = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Link #3' output='linktext' modifiers='nav_sections' />");

    var btnFourText = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Link #4 Text' output='normal' modifiers='striptags,htmlentities' />");
    var btnFourLink = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Link #4' output='linkurl' modifiers='nav_sections' />");
    var btnFourTitle = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Link #4' output='linktext' modifiers='nav_sections' />");

    var btnFiveText = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Link #5 Text' output='normal' modifiers='striptags,htmlentities' />");
    var btnFiveLink = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Link #5' output='linkurl' modifiers='nav_sections' />");
    var btnFiveTitle = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Link #5' output='linktext' modifiers='nav_sections' />");

    var anchorTag = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='meta' meta='html_anchor' />");
    var contentID = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='meta' meta='content_id' />");




    /***
     *  Declare/Assign local variables with default formatting and values
     * 
     * */
    var titleString = '<h2 id="label' + contentID + '">' + headline + '</h2>';
    var openStandardContent = '<div class="panelText card-text"><div class="standardContent">';
    var closeStandardContent = '</div></div>'
    // var openPanelInner = '<div class="panelInner col-12 col-lg-4 shadow ' + textLocation + '">';
    var closePanelInner = '</div>';
    // var openPanelContainer = '<div class="panelFlexContainer ' + textLocation + '">'
    var closePanelContainer = '</div>';
    var imageString = '<img class="card-image-top" src="' + backgroundImage +'">';
    var openOverlay = '<div class="card-img-overlay card-inverse my-3">';
    var closeOverlay = '</div>';
    var openBlock = '<div class="card-block">';
    var closeBlock = '</div>';
    var btnOneString = '<li class="hidden visually-hidden"><a href="#" class="hidden visually-hidden card-link h-100" title="No Valid Link Provided"><span class="hidden visually-hidden d-inline-block align-middle">No Valid Link Provided</span></a></li>';
    var btnTwoString = '<li class="hidden visually-hidden"><a href="#" class="hidden visually-hidden card-link h-100" title="No Valid Link Provided"><span class="hidden visually-hidden d-inline-block align-middle">No Valid Link Provided</span></a></li>';
    var openLinksList = '<ul class="panelLinks flex-md-nowrap">';
    var closeLinksList = '</ul>';
    // var descriptionString = '<div>' + description + '</div>';


    var beginningHTML = '<div class="callToActionWrapper contentItem container-fluid card border-0 g-0" title="' + headline + '" id="id' + contentID + '" data-position-default="Main" data-position-selected="' + zoneOption + '" role="presentation" >';
    var endingHTML = '</div>';




    /***
     *  Handle Selective Output Logic
     *      Button Links
     * 
     * */
    if (btnOneLink != "") {
        btnOneString = '<li><a href="' + btnOneLink + '" class="card-link h-100" title="' + btnOneTitle + '"><span class="d-inline-block align-middle">' + btnOneText + '</span></a></li>';
    }
    if (btnTwoLink != "") {
        btnTwoString = '<li><a href="' + btnTwoLink + '" class="card-link h-100" title="' + btnTwoTitle + '"><span class="d-inline-block align-middle">' + btnTwoText + '</span></a></li>';
    }



    /***
     *  Write the document once
     * 
     * */
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, beginningHTML));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, anchorTag));



    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, imageString));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, openOverlay));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, openBlock));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, openPanelContainer));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, openPanelInner));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, openStandardContent));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, titleString));
    // document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, descriptionString));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, openLinksList));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, btnOneString));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, btnTwoString));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, closeLinksList));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, closeStandardContent));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, closePanelInner));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, closePanelContainer));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, closeBlock));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, closeOverlay));



    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, endingHTML));




} catch (err) {
    document.write(err.message);
}
