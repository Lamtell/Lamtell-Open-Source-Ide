export const cfEndMarkup = `
</div>
</body>
</html>
`

export const cfMarkup = `
<html lang="en">
<head>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <meta name="X-Csrf-Token" content="2cc170160bb1d028bb252884c963e630"/>
    <meta id="viewport" name="viewport" content="width=device-width, initial-scale=0.01"/>


    <script type="text/javascript" src="https://codeforces.org/s/44704/js/jquery-1.8.3.js"></script>
    <script type="application/javascript">
        window.standaloneContest = false;
        function adjustViewport() {
            var screenWidthPx = Math.min($(window).width(), window.screen.width);
            var siteWidthPx = 1100; // min width of site
            var ratio = Math.min(screenWidthPx / siteWidthPx, 1.0);
            var viewport = "width=device-width, initial-scale=" + ratio;
            $('#viewport').attr('content', viewport);
            var style = $('<style>html * { max-height: 1000000px; }</style>');
            $('html > head').append(style);
        }

        if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
            adjustViewport();
        }

        /* Protection against trailing dot in domain. */
        let hostLength = window.location.host.length;
        if (hostLength > 1 && window.location.host[hostLength - 1] === '.') {
            window.location = window.location.protocol + "//" + window.location.host.substring(0, hostLength - 1);
        }
    </script>
    <meta http-equiv="pragma" content="no-cache">
    <meta http-equiv="expires" content="-1">
    <meta http-equiv="profileName" content="h1">
    <meta name="google-site-verification" content="OTd2dN5x4nS4OPknPI9JFg36fKxjqY0i1PSfFPv_J90"/>
    <meta property="fb:admins" content="100001352546622" />
    <meta property="og:image" content="https://codeforces.org/s/44704/images/codeforces-telegram-square.png" />
    <link rel="image_src" href="https://codeforces.org/s/44704/images/codeforces-telegram-square.png" />
    <meta property="og:title" content="Problem - 1623E - Codeforces"/>
    <meta property="og:description" content=""/>
    
    <meta property="og:site_name" content="Codeforces"/>
    <meta name="uc" content="5eb634dbb6105eb3a856cbae5dbf0584c8d0fe35"/>
    <meta name="usmc" content="ead480166dceabcf9b1318fc78c67fc0a0907ebb"/>
    
    <meta name="cc" content="c4b1fe2ce834253f629b27f00ebd732d85c74d2d"/>
    <meta name="pc" content="6796eb5c67add1c2acf9dd820e257fd30cfe1226"/>
    
    <meta name="utc_offset" content="+03:00"/>
    <meta name="verify-reformal" content="f56f99fd7e087fb6ccb48ef2" />
    <title>Problem - 1623E - Codeforces</title>
        <meta name="description" content="Codeforces. Programming competitions and contests, programming community" />
        <meta name="keywords" content="programming algorithm contest competition informatics olympiads c++ java graphs vkcup" />
    <meta name="robots" content="index, follow" />

    <link rel="stylesheet" href="https://codeforces.org/s/44704/css/font-awesome.min.css" type="text/css" charset="utf-8" />
    <link rel="stylesheet" href="https://codeforces.org/s/44704/css/line-awesome.min.css" type="text/css" charset="utf-8" />

        <link href='//fonts.googleapis.com/css?family=PT+Sans+Narrow:400,700&subset=latin,cyrillic' rel='stylesheet' type='text/css'>
        <link href='//fonts.googleapis.com/css?family=Cuprum&subset=latin,cyrillic' rel='stylesheet' type='text/css'>


    <link rel="apple-touch-icon" sizes="57x57" href="https://codeforces.org/s/44704/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="https://codeforces.org/s/44704/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="https://codeforces.org/s/44704/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="https://codeforces.org/s/44704/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="https://codeforces.org/s/44704/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="https://codeforces.org/s/44704/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="https://codeforces.org/s/44704/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="https://codeforces.org/s/44704/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="https://codeforces.org/s/44704/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="https://codeforces.org/s/44704/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="https://codeforces.org/s/44704/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="https://codeforces.org/s/44704/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="https://codeforces.org/s/44704/favicon-16x16.png">
    <link rel="manifest" href="/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="https://codeforces.org/s/44704/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">

    <!--CombineResourcesFilter-->
    <link rel="stylesheet" href="https://codeforces.org/s/44704/css/prettify.css" type="text/css" charset="utf-8" />
    <link rel="stylesheet" href="https://codeforces.org/s/44704/css/clear.css" type="text/css" charset="utf-8" />
    <link rel="stylesheet" href="https://codeforces.org/s/44704/css/style.css" type="text/css" charset="utf-8" />
    <link rel="stylesheet" href="https://codeforces.org/s/44704/css/ttypography.css" type="text/css" charset="utf-8" />
    <link rel="stylesheet" href="https://codeforces.org/s/44704/css/problem-statement.css" type="text/css" charset="utf-8" />
    <link rel="stylesheet" href="https://codeforces.org/s/44704/css/second-level-menu.css" type="text/css" charset="utf-8" />
    <link rel="stylesheet" href="https://codeforces.org/s/44704/css/roundbox.css" type="text/css" charset="utf-8" />
    <link rel="stylesheet" href="https://codeforces.org/s/44704/css/datatable.css" type="text/css" charset="utf-8" />
    <link rel="stylesheet" href="https://codeforces.org/s/44704/css/table-form.css" type="text/css" charset="utf-8" />
    <link rel="stylesheet" href="https://codeforces.org/s/44704/css/topic.css" type="text/css" charset="utf-8" />
    <link rel="stylesheet" href="https://codeforces.org/s/44704/css/jquery.jgrowl.css" type="text/css" charset="utf-8" />
    <link rel="stylesheet" href="https://codeforces.org/s/44704/css/facebox.css" type="text/css" charset="utf-8" />
    <link rel="stylesheet" href="https://codeforces.org/s/44704/css/jquery.wysiwyg.css" type="text/css" charset="utf-8" />
    <link rel="stylesheet" href="https://codeforces.org/s/44704/css/jquery.autocomplete.css" type="text/css" charset="utf-8" />
    <link rel="stylesheet" href="https://codeforces.org/s/44704/css/codeforces.datepick.css" type="text/css" charset="utf-8" />
    <link rel="stylesheet" href="https://codeforces.org/s/44704/css/colorbox.css" type="text/css" charset="utf-8" />
    <link rel="stylesheet" href="https://codeforces.org/s/44704/css/jquery.drafts.css" type="text/css" charset="utf-8" />
        <link rel="stylesheet" href="https://codeforces.org/s/44704/css/community.css" type="text/css" charset="utf-8" />
        <link rel="stylesheet" href="https://codeforces.org/s/44704/css/sidebar-menu.css" type="text/css" charset="utf-8" />

    <!-- MathJax -->
    <script type="text/x-mathjax-config">
    MathJax.Hub.Config({
      tex2jax: {inlineMath: [['$$$','$$$']], displayMath: [['$$$$$$','$$$$$$']]}
    });
    MathJax.Hub.Register.StartupHook("End", function () {
        Codeforces.runMathJaxListeners();
    });
    </script>
    <script type="text/javascript" async
            src="https://mathjax.codeforces.org/MathJax.js?config=TeX-AMS_HTML-full"
    >
    </script>
    <!-- /MathJax -->

    <script type="text/javascript" src="https://codeforces.org/s/44704/js/prettify/prettify.js"></script>
    <script type="text/javascript" src="https://codeforces.org/s/44704/js/moment-with-locales.min.js"></script>
    <script type="text/javascript" src="https://codeforces.org/s/44704/js/pushstream.js"></script>
    <script type="text/javascript" src="https://codeforces.org/s/44704/js/jquery.easing.min.js"></script>
    <script type="text/javascript" src="https://codeforces.org/s/44704/js/jquery.lavalamp.min.js"></script>
    <script type="text/javascript" src="https://codeforces.org/s/44704/js/jquery.jgrowl.js"></script>
    <script type="text/javascript" src="https://codeforces.org/s/44704/js/jquery.swipe.js"></script>
    <script type="text/javascript" src="https://codeforces.org/s/44704/js/jquery.hotkeys.js"></script>
    <script type="text/javascript" src="https://codeforces.org/s/44704/js/facebox.js"></script>
    <script type="text/javascript" src="https://codeforces.org/s/44704/js/jquery.wysiwyg.js"></script>
    <script type="text/javascript" src="https://codeforces.org/s/44704/js/controls/wysiwyg.colorpicker.js"></script>
    <script type="text/javascript" src="https://codeforces.org/s/44704/js/controls/wysiwyg.table.js"></script>
    <script type="text/javascript" src="https://codeforces.org/s/44704/js/controls/wysiwyg.image.js"></script>
    <script type="text/javascript" src="https://codeforces.org/s/44704/js/controls/wysiwyg.link.js"></script>
    <script type="text/javascript" src="https://codeforces.org/s/44704/js/jquery.autocomplete.js"></script>
    <script type="text/javascript" src="https://codeforces.org/s/44704/js/ua-parser.js"></script>
    <script type="text/javascript" src="https://codeforces.org/s/44704/js/jquery.datepick.js"></script>
    <script type="text/javascript" src="https://codeforces.org/s/44704/js/jquery.ie6blocker.js"></script>
    <script type="text/javascript" src="https://codeforces.org/s/44704/js/jquery.colorbox-min.js"></script>
    <script type="text/javascript" src="https://codeforces.org/s/44704/js/jquery.ba-bbq.js"></script>
    <script type="text/javascript" src="https://codeforces.org/s/44704/js/jquery.drafts.js"></script>
    <script type="text/javascript" src="https://codeforces.org/s/44704/js/clipboard.min.js"></script>
    <script type="text/javascript" src="https://codeforces.org/s/44704/js/autosize.min.js"></script>
    <script type="text/javascript" src="https://codeforces.org/s/44704/js/sjcl.js"></script>
    <script type="text/javascript" src="/scripts/55bc10bbb08da2828994a0de4565d7df/en/codeforces-options.js"></script>
    <script type="text/javascript" src="https://codeforces.org/s/44704/js/codeforces.js?v=20160131"></script>
    <script type="text/javascript" src="https://codeforces.org/s/44704/js/EventCatcher.js?v=20160131"></script>
    <script type="text/javascript" src="https://codeforces.org/s/44704/js/preparedVerdictFormats-en.js"></script>
    <!--/CombineResourcesFilter-->

    <link rel="stylesheet" href="https://codeforces.org/s/44704/markitup/skins/markitup/style.css" type="text/css" charset="utf-8" />
    <link rel="stylesheet" href="https://codeforces.org/s/44704/markitup/sets/markdown/style.css" type="text/css" charset="utf-8" />


    <script type="text/javascript" src="https://codeforces.org/s/44704/markitup/jquery.markitup.js"></script>
    <script type="text/javascript" src="https://codeforces.org/s/44704/markitup/sets/markdown/set.js"></script>

    <!--[if IE]>
    <style>
        #sidebar {
            padding-left: 1em;
            margin: 1em 1em 1em 0;
        }
    </style>
    <![endif]-->


        <script id="nocomb.ace-builds/ace.js" src="https://codeforces.org/s/44704/js/ace-builds/ace.js" type="text/javascript"></script>
        <script id="nocomb.ace-builds/ext-language_tools.js" src="https://codeforces.org/s/44704/js/ace-builds/ext-language_tools.js" type="text/javascript"></script>
        <script id="nocomb.ace-builds/ext-modelist.js" src="https://codeforces.org/s/44704/js/ace-builds/ext-modelist.js" type="text/javascript"></script>
 <style>
    body{
    // background-color: #080808;
    background-attachment: fixed;
    background-size: cover;
    }

    /* Scrollbar Styling */
    ::-webkit-scrollbar {
    width: 10px;
    }

    ::-webkit-scrollbar-track {
    background-color: #ebebeb;
    -webkit-border-radius: 10px;
    border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: #6d6d6d; 
    }

    @media print{
        div.print-content article.node .node-blog .clearfix div.item-body p a{
            display:none
        }
        .compact-problemset div.ttypography{
            margin:0!important
        }
        .compact-problemset .problem-statement p{
            margin-bottom:.75em!important;
            page-break-inside:avoid
        }
        .compact-problemset .problem-frames{
            column-count:2
        }
        .compact-problemset .problem-statement .input,.compact-problemset .problem-statement .output{
            page-break-inside:avoid
        }
        .compact-problemset .problem-statement .output{
            page-break-inside:avoid
        }
        .compact-problemset .problem-statement{
            margin:.25em;
            font-family:helvetica neue,Helvetica,Arial,sans-serif;
            line-height:1.45em;
            font-size:1.4rem
        }
        .compact-problemset #header{
            display:none
        }
        .compact-problemset .problem-statement .time-limit,.compact-problemset .problem-statement .memory-limit{
            display:inline
        }
        .compact-problemset .problem-statement .time-limit::after{
            content:", "
        }
        .compact-problemset .problem-statement .property-title{
            display:none
        }
        .compact-problemset .problem-statement .input-file,.compact-problemset .problem-statement .output-file{
            display:none
        }
        .compact-problemset .problem-statement .sample-tests .section-title,.compact-problemset .problem-statement .note .section-title{
            display:none
        }
        .compact-problemset .input-output-copier{
            display:none
        }
    }
    .problem-statement{
        margin:.5em;
        font-family:helvetica neue,Helvetica,Arial,sans-serif;
        line-height:1.5em;
        font-size:1.4rem
    }
    .problem-statement .epigraph{
    }
    .problem-statement .epigraph-text{
        margin-left:67%;
        width:33%
    }
    .problem-statement .epigraph-source{
        border-top:1px solid #888;
        text-align:right
    }
    .problem-statement .lstlisting{
        padding:.5em
    }
    .problem-statement .tex-tabular{
        margin:1em 0;
        border-collapse:collapse;
        border-spacing:0;
        border:initial!important
    }
    .problem-statement .tex-tabular *{
        border:initial!important
    }
    .problem-statement .tex-tabular tr:hover *{
        background:initial
    }
    .problem-statement .tex-tabular .tex-tabular-border-left{
        border-left:1px #ccc solid!important
    }
    .problem-statement .tex-tabular .tex-tabular-border-right{
        border-right:1px #ccc solid!important
    }
    .problem-statement .tex-tabular .tex-tabular-border-top{
        border-top:1px #ccc solid!important
    }
    .problem-statement .tex-tabular .tex-tabular-border-bottom{
        border-bottom:1px #ccc solid!important
    }
    .problem-statement .tex-tabular .tex-tabular-text-align-left{
        text-align:left
    }
    .problem-statement .tex-tabular .tex-tabular-text-align-center{
        text-align:center
    }
    .problem-statement .tex-tabular .tex-tabular-text-align-right{
        text-align:right
    }
    .problem-statement .tex-tabular td{
        padding:.4em;
        vertical-align:middle
    }
    .problem-statement p{
        margin:0 0 1em!important
    }
    .problem-statement .header{
        margin-bottom:1em;
        text-align:center
    }
    .problem-statement .header .title{
        font-size:150%;
        margin-bottom:.5em
    }
    .problem-statement .header .title{
        font-size:150%;
        font-family:helvetica neue,Helvetica,Arial,sans-serif
    }
    .problem-statement ul{
        list-style:disc;
        list-style-type:disc;
        list-style-position:outside;
        margin-top:1em!important;
        margin-bottom:1em!important
    }
    .problem-statement ol{
        list-style:decimal;
        list-style-type:decimal;
        list-style-position:outside;
        margin-top:1em!important;
        margin-bottom:1em!important
    }
    .problem-statement li{
        line-height:1.5em;
        margin-left:3em
    }
    .problem-statement .property-title{
        display:inline;
        padding-right:4px
    }
    .problem-statement .property-title:after{
        content:":"
    }
    .problem-statement .time-limit,.problem-statement .memory-limit,.problem-statement .input-file,.problem-statement .output-file{
        margin:0 auto
    }
    .problem-statement .legend{
        margin-bottom:1em
    }
    .problem-statement .section-title{
        font-family:helvetica neue,Helvetica,Arial,sans-serif;
        font-size:115%;
        font-weight:700
    }
    .problem-statement .input-specification,.problem-statement .output-specification,.problem-statement .sample-tests,.problem-statement .author,.problem-statement .resource,.problem-statement .date{
    }
    .problem-statement .output-specification{
        margin-bottom:1em
    }
    .problem-statement .sample-tests .sample-test{
    }
    .problem-statement .sample-tests .input,.problem-statement .sample-tests .output{
        border:1px solid #888
    }
    .problem-statement .sample-tests .output{
        margin-bottom:1em;
        position:relative;
        top:-1px
    }
    .problem-statement .sample-tests pre{
        line-height:1.25em;
        padding:.25em;
        margin:0;
        background-color:#efefef
    }
    .problem-statement .sample-tests{
        font-family:Consolas,lucida console,andale mono,bitstream vera sans mono,courier new,Courier;
        font-size:.9em
    }
    .problem-statement .sample-tests .title{
        font-size:1.3em;
        padding:.25em;
        border-bottom:1px solid #888;
        text-transform:lowercase;
        font-weight:700
    }
    .problem-statement .test{
        margin-bottom:3em
    }
    .problem-statement .test-title{
        font-weight:700
    }
    .problem-statement .test-stem,.problem-statement .test-explanation-note{
        margin:.5em 0
    }
    .problem-statement input[type=submit]{
        margin-top:.5em;
        margin-right:1em;
        padding:0 1em
    }
    .problemindexholder{
        position:relative
    }
    div .problem-statement-overlay{
        position:absolute;
        top:0;
        left:0;
        height:100%;
        width:100%;
        background-color:#000;
        z-index:50;
        opacity:.2
    }
    .load-answers-waiting-indicator{
        position:absolute;
        top:49%;
        left:49%
    }
    .problem-statement input[type=radio]{
        margin-right:.5em
    }
    .problem-statement input[type=checkbox]{
        margin-right:.5em
    }
    .problem-statement input[type=text]{
        width:20em
    }
    .problem-statement textarea{
        width:20em;
        height:7em
    }
    .problem-statement .test-form{
        line-height:1.75em
    }
    .problem-statement .test-form{
        line-height:1.75em
    }
    .tex-formula{
        font-family:times new roman,sans-serif;
        vertical-align:middle;
        margin:0;
        border:medium;
        position:relative;
        bottom:2px
    }
    .tex-span{
        font-size:125%;
        font-family:times new roman,sans-serif;
        white-space:nowrap
    }
    .tex-font-size-tiny{
        font-size:70%
    }
    .tex-font-size-script{
        font-size:75%
    }
    .tex-font-size-footnotes{
        font-size:85%
    }
    .tex-font-size-small{
        font-size:85%
    }
    .tex-font-size-normal{
        font-size:100%
    }
    .tex-font-size-large-1{
        font-size:115%
    }
    .tex-font-size-large-2{
        font-size:130%
    }
    .tex-font-size-large-3{
        font-size:145%
    }
    .tex-font-size-huge-1{
        font-size:175%
    }
    .tex-font-size-huge-2{
        font-size:200%
    }
    .tex-font-style-rm{
    }
    .tex-font-style-sf{
        font-family:helvetica neue,Helvetica,Arial,sans-serif
    }
    .tex-font-style-tt{
        font-size:110%;
        font-family:courier new,monospace
    }
    .tex-font-style-md{
    }
    .tex-font-style-bf{
        font-weight:700
    }
    .tex-font-style-up{
    }
    .tex-font-style-it{
        font-style:italic
    }
    .tex-font-style-sl{
        font-style:italic
    }
    .tex-font-style-sc{
        text-transform:uppercase
    }
    .tex-font-style-striked{
        text-decoration:line-through
    }
    .tex-font-style-underline{
        text-decoration:underline
    }
    .tex-graphics{
        display:block
    }
    .tex-font-style-part{
        font-size:187.5%;
        font-weight:700;
        font-family:Tahoma,Arial,Helvetica,sans-serif
    }
    .tex-font-style-chapter{
        font-size:162.5%;
        font-weight:700;
        font-family:Tahoma,Arial,Helvetica,sans-serif
    }
    .tex-font-style-section{
        font-size:137.5%;
        font-weight:700
    }
    .tex-font-style-subsection{
        font-size:125%;
        font-weight:700
    }
    .tex-font-style-subsubsection{
        font-size:112.5%;
        font-weight:700
    }
    .tex-font-style-paragraph{
        font-size:100%;
        font-weight:700
    }
    .tex-font-style-subparagraph{
        font-size:100%;
        font-style:italic
    }
    .problem-statement .tex-tabular .tex-graphics{
        max-width:100%
    }
    .problem-statement .tex-tabular td>p{
        margin-bottom:0!important
    }
    
 </style>
</head>
<div class="problem-statement">
<body>
`