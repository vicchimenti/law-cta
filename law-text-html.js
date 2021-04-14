/***
 *      @author Victor Chimenti, MSCS-SE '20
 *      @file call-to-action-text-html.js
 *      @see Seattle University School of Law Call to Action Feature COntent Type
 *      law/text/html
 *
 *      Document will write once when the page loads
 *
 *      @version 2.9
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
    var imageString = '<img class="card-image" src="' + backgroundImage +'" alt="decorative background image for ' + headline + '">';
    var openOverlay = '<div class="card-img-overlay card-inverse p-0">';
    var closeOverlay = '</div>';
    var opneOverlayStyle = '<div class="callToActionOverlay callToActionOverlayColor' + colorOverlay + ' m-0">';
    var closeOverlayStyle = '</div>';
    var openBlock = '<div class="card-block p-1 m-1">';
    var closeBlock = '</div>';
    var openCallToAction = '<div class="callToAction">';
    var closeCallToAction = '</div>';
    var headlineString = '<h2 class="callToActionHeaderColor' + headlineColor + ' card-title" id="label' + contentID + '">' + headline + '</h2>';
    var openLinksList = '<ul class="callToActionButtonWrapper standardContent d-flex justify-content-between">';
    var closeLinksList = '</ul>';
    var btnOneString = '<li class="callToActionButton"><a href="' + btnOneLink + '" title="' + btnOneTitle + '">' + btnOneText + '</a></li>';
    var buttonListString = '' + btnOneString + '';
    var beginningHTML = '<div class="callToActionWrapper contentItem container-fluid g-0" title="' + headline + '" id="id' + contentID + '" data-position-default="Main" data-position-selected="' + zoneOption + '" role="presentation" ><div class="col-12 card border-0">';
    var endingHTML = '</div></div>';




    /***
     *  Handle Selective Output Logic
     *      Button Links
     * 
     * */
    if (btnTwoLink != "" && btnTwoText != "") {

        var btnTwoString = '<li class="callToActionButton"><a href="' + btnTwoLink + '" title="' + btnTwoTitle + '">' + btnTwoText + '</a></li>';
        buttonListString = '' + btnOneString + btnTwoString + '';

        if (btnThreeLink != "" && btnThreeText != "") {

            var btnThreeString = '<li class="callToActionButton"><a href="' + btnThreeLink + '" title="' + btnThreeTitle + '">' + btnThreeText + '</a></li>';
            buttonListString = '' + btnOneString + btnTwoString + btnThreeString + '';

        }
    }




    /***
     *  Write the document once
     * 
     * */
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, beginningHTML));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, anchorTag));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, imageString));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, openOverlay));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, opneOverlayStyle));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, openBlock));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, openCallToAction));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, headlineString));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, openLinksList));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, buttonListString));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, closeLinksList));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, closeCallToAction));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, closeBlock));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, closeOverlayStyle));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, closeOverlay));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, endingHTML));




} catch (err) {
    document.write(err.message);
}
