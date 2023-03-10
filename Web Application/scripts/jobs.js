/*
Filename: [apply.js]
Target HTML: [apply.html]
author: [Md.Radif Rafayet Chowdhury]
Purpose: [ Use JavaScript to validatedata entered into HTMLforms and provide user feed back]
Date Written: [26/09/2021]
description: [Assignment 02]
*/
// Elements selection
const applyBtn = document.getElementsByClassName("prs");
// Click event for first job button
applyBtn[0].addEventListener('click', function(e){
    localStorage.setItem('ref_no', 'AB198');
});
// Click event for second job button
applyBtn[1].addEventListener("click", function(e){
    localStorage.setItem('ref_no', 'AB199');
});