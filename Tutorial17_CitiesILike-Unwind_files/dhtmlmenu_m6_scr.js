//script generated by SiteXpert (www.xtreeme.com)
//Copyright(C) 1998-2003 Xtreeme GmbH
var ver='4.0.3'
var m6=new Object
m6.name='m6'
m6.fnm='dhtmlmenu_m6'
if(!window.lastm||window.lastm<6)lastm=6
m6.v17=null
m6.v17Timeout=''
var maxZ=1000
m6.v18
m6.targetFrame
var docLoaded=false
m6.bIncBorder=true
m6.v29=null
m6.v29Str=''
m6.v55=50
m6.scrollStep=10
m6.fadingSteps=8
m6.itemOverDelay=0
m6.transTLO=0
m6.fixSB=0
m6.v62=0
var pth=document.getElementById('TrackPath_m6').src
if(pth.lastIndexOf("\\")>pth.lastIndexOf("/")) {sepCh = "\\";} else {sepCh = "/";}
var pths=pth.lastIndexOf(sepCh)
pth=(pths==-1)?'.':pth.substring(0,pths)
m6.v21=pth
pths=pth.lastIndexOf(sepCh)
pth=(pths==-1)?'.':pth.substring(0,pths)
m6.v57=pth
m6.v56="<root>"
m6.maxlev=2
m6.v22=0
m6.sepH=10
m6.bHlNL=1
m6.showA=1
m6.bVarWidth=0
m6.bShowDel=0
m6.scrDel=0
m6.v23=150
m6.levelOffset=20
m6.bord=1
m6.vertSpace=4
m6.sep=0
m6.v19=false
m6.bkv=0
m6.rev=0
m6.shs=0
m6.xOff=0
m6.yOff=0
m6.xSOff=0
m6.ySOff=2
m6.v20=false
m6.cntFrame=""
m6.menuFrame=""
m6.v24=""
m6.mout=true
m6.iconSize=8
m6.closeDelay=1000
m6.tlmOrigBg="#9CCEFF"
m6.tlmOrigCol="Black"
m6.v25=true
m6.v52=true
m6.v60=85
m6.v11=true
m6.bord=0
m6.v10=10
m6.ppLeftPad=5
m6.v54=0
m6.v01=2
m6.tlmHlBg=""
m6.tlmHlCol="#0000FF"
m6.borderCol="Black"
m6.menuHorizontal=true
m6.scrollHeight=6
m6.attr=new Array("x-small",true,false,"Black","#9CCEFF","#0000FF","Trebuchet MS,Arial,Verdana,Tahoma","#9CCEFF","Black","#9CCEFF")
m6mn1=new Array
(
"Description","<root>/Course.html#CourseDescription",0,"",""
,"Objectives","<root>/Course.html#LearningObjectives",0,"_top",""
,"Prerequisites","<root>/Course.html#Prerequisites",0,"_top",""
,"Materials","<root>/Course.html#Materials",0,"_top",""
,"Facilities","<root>/Course.html#Facilities",0,"_top",""
,"Outline","<root>/StudentsOnly/Outline.html",0,"_top",""
,"Students Only","<root>/StudentsOnly/StudentsOnly.html",0,"_top",""
)
m6mn2=new Array
(
"Website Access","<root>/Policies.html#Access",0,"_top",""
,"Attendance","<root>/Policies.html#Attendance",0,"_top",""
,"Computer Use","<root>/Policies.html#ComputerUse",0,"_top",""
,"Laptop Use","<root>/Policies.html#LaptopUse",0,"_top",""
,"Disability","<root>/Policies.html#Disability",0,"_top",""
,"Honor System","<root>/Policies.html#HonorSystem",0,"_top",""
,"Submission","<root>/Policies.html#Submission",0,"_top",""
)
m6mn3=new Array
(
"Instructor","<root>/Staff.html#Instructor",0,"_top",""
,"GTA","<root>/Staff.html#GTA",0,"_top",""
,"UTAs","<root>/Staff.html#UTAs",0,"_top",""
,"Office Hours","<root>/Staff.html#OfficeHours",0,"_top",""
)
m6mn4=new Array
(
"Assignments","<root>/Grading.html#Assignments",0,"_top",""
,"Tutorials","<root>/Grading.html#Tutorials",0,"_top",""
,"Project","<root>/Grading.html#Project",0,"_top",""
,"Examinations","<root>/Grading.html#Examinations",1,"_top",""
,"Grades","<root>/Grading.html#Grades",0,"_top",""
)
m6mn4_4=new Array
(
"Midterm Exam","<root>/Grading.html#MidtermExam",0,"_top",""
,"Final Exam","<root>/Grading.html#FinalExam",0,"_top",""
)
m6mn5=new Array
(
"iOS Dev Resources","<root>/Other.html#Resources",0,"_top",""
,"Links of Interest","<root>/Other.html#LinksOfInterest",0,"_top",""
,"Copyright Notice","<root>/Other.html#Copyright",0,"_top",""
)
absPath=""
if(m6.v19&&!m6.v20){
if(window.location.href.lastIndexOf("\\")>window.location.href.lastIndexOf("/")) {sepCh = "\\";} else {sepCh = "/";}
absPath=window.location.href.substring(0,window.location.href.lastIndexOf(sepCh)+1)}
m6.v02=m6.v23
var stp="<img id="
var stq=" width='1' height='1' style='display:none' src='"+eval('window.m'+lastm).v21+"/dhtmlmenu_m6"
document.write(stp+"'m6menubg4'"+stq+"bg4.png'>")
document.write(stp+"'m6menubg5'"+stq+"bg5.png'>")
document.write(stp+"'m6menubg6'"+stq+"bg6.png'>")
document.write(stp+"'pre0m6tlm0'"+stq+"_i0.png'>")
document.write(stp+"'pre1m6tlm0'"+stq+"_i0h.png'>")
document.write(stp+"'pre0m6tlm1'"+stq+"_i1.png'>")
document.write(stp+"'pre1m6tlm1'"+stq+"_i1h.png'>")
document.write(stp+"'pre0m6tlm2'"+stq+"_i2.png'>")
document.write(stp+"'pre1m6tlm2'"+stq+"_i2h.png'>")
document.write(stp+"'pre0m6tlm3'"+stq+"_i3.png'>")
document.write(stp+"'pre1m6tlm3'"+stq+"_i3h.png'>")
document.write(stp+"'pre0m6tlm4'"+stq+"_i4.png'>")
document.write(stp+"'pre1m6tlm4'"+stq+"_i4h.png'>")
document.write(stp+"'pre0m6tlm5'"+stq+"_i5.png'>")
document.write(stp+"'pre1m6tlm5'"+stq+"_i5h.png'>")
document.write("<style type='text/css'>\n.m6CL0,.m6CL0:link{text-decoration:none;color:Black; }\n.m6CL0:visited{color:Black}\n.m6mit{padding-left:10px;padding-right:10px;color:Black; font-weight:bold; font-family:Trebuchet MS,Arial,Verdana,Tahoma; font-size:x-small; }\n"+"</"+"style>")
document.write("<"+"script type='text/javascript' src='"+eval('window.m'+lastm).v21+"/menu_dom.js'></"+"script>")
