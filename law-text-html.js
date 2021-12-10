/***
 *      @author Victor Chimenti, MSCS
 *      @file call-to-action-text-html.js
 *      @see Seattle University School of Law Call to Action Feature Content Type
 *      law/text/html
 *
 *      Document will write once when the page loads
 *
 *      @version 3.0
 */








/***
 *      Import T4 Utilities
 */
 importClass(com.terminalfour.media.IMediaManager);
 importClass(com.terminalfour.spring.ApplicationContextProvider);
 importClass(com.terminalfour.publish.utils.BrokerUtils);
 importClass(com.terminalfour.media.utils.ImageInfo);
 
 
 
 
 /***
  *      Extract values from T4 element tags
  *      and confirm valid existing content item field and trim strings
  */
 function getContentValues(tag) {
 
     try {
 
         let _tag = BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, tag).trim()
 
         return {
             isError: false,
             content: _tag == '' ? null : _tag
         }
 
     } catch (error) {
 
         return {
             isError: true,
             message: error.message
         }
     }
 }
 
 
 
 
 /***
  *      Returns a media object
  */
 function getMediaInfo(mediaID) {
 
     let mediaManager = ApplicationContextProvider.getBean(IMediaManager);
     let media = mediaManager.get(mediaID, language);
 
     return media;
 }
 
 
 
 
 /***
  *      Returns a media stream object
  */
 function readMedia(mediaID) {
 
     let mediaObj = getMediaInfo(mediaID);
     let oMediaStream = mediaObj.getMedia();
 
     return oMediaStream;
 }
 
 
 
 
 /***
  *      Write the document
  */
 function writeDocument(array) {
 
     for (let i = 0; i < array.length; i++) {
 
         document.write(array[i]);
     }
 }
 
 
 
 
 
 /***
  *      Main
  */
 try {


    /***
     *      Dictionary of content
     * */
    let ctafDict = {

        contentName: getContentValues('<t4 type="content" name="Name" output="normal" modifiers="striptags,htmlentities" />'),
        headline: getContentValues('<t4 type="content" name="Headline" output="normal" modifiers="striptags,htmlentities" />'),
        headlineColor: getContentValues('<t4 type="content" name="Headline color" output="normal" display_field="value" />'),
        backgroundImage: getContentValues('<t4 type="content" name="Background Image" output="normal" formatter="path/*" />'),
        colorOverlay: getContentValues('<t4 type="content" name="Color Overlay" output="normal" display_field="value" />'),
        btnOneText: getContentValues('<t4 type="content" name="Link #1 Text" output="normal" modifiers="striptags,htmlentities" />'),
        btnOneTitle: getContentValues('<t4 type="content" name="Link #1" output="linktext" modifiers="nav_sections" />'),
        btnOneLink: getContentValues('<t4 type="content" name="Link #1" output="linkurl" modifiers="nav_sections" />'),

        anchorTag: getContentValues('<t4 type="meta" meta="html_anchor" />'),
        contentId: getContentValues('<t4 type="meta" meta="content_id" />')

    }



    /***
     *  Declare/Assign local variables with default formatting and values
     * 
     * */
    var imageString = '<img class="card-image-top" src="' + backgroundImage +'" alt="decorative background image for ' + headline + '">';




    var openLinksList = '<ul class="callToActionButtonWrapper standardContent d-flex flex-col flex-md-row flex-md-nowrap justify-md-content-between">';
    var closeLinksList = '</ul>';
    var btnOneString = '<li class="callToActionButton"><a href="' + btnOneLink + '" title="' + btnOneTitle + '">' + btnOneText + '</a></li>';
    var buttonListString = '' + btnOneString + '';



    let opneOverlayStyle = '<div class="callToActionOverlay callToActionOverlayColor' + ctafDict.colorOverlay.content + ' m-0">';
    let closeOverlayStyle = '</div>';
    let openOverlay = '<div class="card-img-overlay card-inverse p-0">';
    let closeOverlay = '</div>';
    let openBlock = '<div class="card-block">';
    let closeBlock = '</div>';
    let openCardTitle = '<div class="card-title p-lg-3">';
    let closeCardTitle = '</div>';
    let headlineString = '<h2 class="callToActionHeaderColor' + ctafDict.headlineColor.content + ' text-center">' + ctafDict.headline.content + '</h2>';
    let openCardGroup = '<div class="col-12 card-group border-0 rounded-0">';
    let closeCardGroup = '</div>';
    let beginningHTML = '<div class="callToActionWrapper contentItem container-fluid g-0" id="ctaf' + ctafDict.contentId.content + '" data-position-default="Main" data-position-selected="Main">';
    let endingHTML = '</div>';


    /***
     *  write document once
     * 
     * */
         writeDocument(
            [
                beginningHTML,
                ctafDict.anchorTag.content,


                openOverlay,
                opneOverlayStyle,
                openCardTitle,
                headlineString,
                closeCardTitle,
                openBlock,
                openCardGroup,




                openCardBody,

                closeCardBody,

                
                closeCardGroup,
                closeBlock,
                closeOverlayStyle,
                closeOverlay,
                endingHTML
            ]
        );


    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, beginningHTML));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, anchorTag));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, imageString));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, openOverlay));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, opneOverlayStyle));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, openCardTitle));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, headlineString));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, closeCardTitle));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, openBlock));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, openLinksList));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, buttonListString));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, closeLinksList));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, closeBlock));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, closeOverlayStyle));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, closeOverlay));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, endingHTML));




} catch (err) {
    document.write(err.message);
}
