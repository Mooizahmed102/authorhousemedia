<?php
if(!session_id()){
  session_start();
}
include_once("token.php");
if (isset($_SERVER['HTTPS'])) {
  $requesMet = "https";
} else {
  $requesMet = "http";
}
?>
<base href="<?= $requesMet . '://' . $_SERVER['HTTP_HOST'] . '/' ?>">
<head>
    <meta charset="utf-8">
    <meta content="IE=edge" http-equiv="X-UA-Compatible">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <meta
        content="Author House Media  is a leading book publication company that has been publishing quality online books for years. Choose Author House Media  for your book publishing needs."
        name="description">

    <title>Book Publication Company - Author House Media </title>


        <base >
    <meta content="width=device-width, initial-scale=1" name="viewport">

           <link rel="icon" type="image/x-icon" href="favicon.ico">
    <link href="css/css-all.css" rel="stylesheet">
<link href="css/css-custom.css" rel="stylesheet">

<script>(function(w,d,t,r,u){var f,n,i;w[u]=w[u]||[],f=function(){var o={ti:"355018173", enableAutoSpaTracking: true};o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad")},n=d.createElement(t),n.src=r,n.async=1,n.onload=n.onreadystatechange=function(){var s=this.readyState;s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null)},i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i)})(window,document,"script","../bat.bing.com/bat.js","uetq");</script>

<style>
  .jun{
   visibility:hidden;
   position:absolute;
   max-width:1px;
}
</style>
    <style>
    .step__box__sec p::-webkit-scrollbar {
        width: 1px !important;
    }

    .step__box__sec p::-webkit-scrollbar-track {
        background-color: rgba(3, 21, 33, .1) !important;
    }

    .step__box__sec p::-webkit-scrollbar-thumb {
        background-color: #031521 !important;
        height: 60px !important;
    }
    </style>
</head>
