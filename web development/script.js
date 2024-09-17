var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");

menuIcon.oneclick= function(){
    sidebar.classlist.toggle("small-sidebar");
}