var stu = {
    name: "ZHANG",
    id: "000001",
    age: 20,
    dept: "Computer"
};
document.getElementById("profile").innerHTML = 
'<h1>学生信息为</h1><br>' + 
'<p>' + 
'姓名：' + stu["name"] + '<br>' + 
'学号：' + stu["id"] + '<br>' + 
'年龄：' + stu["age"] + '<br>' + 
'专业：' + stu["dept"] + '<br>' + 
'</p>'
