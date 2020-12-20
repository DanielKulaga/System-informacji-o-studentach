class Helper{
   
    _sortByName(Array = []) {
        Array.sort(function(a, b){
            let A_name = a['last_name'].toUpperCase();
            let B_name = b['last_name'].toUpperCase();
            if(A_name < B_name)
            {
                return -1;
            }
            else if(A_name > B_name){
                return 1;
            }else{ return 0;}
        });
        return Array;
    }

    _sortByName_text(Array = []) {
        Array.sort(function(a, b){
            let A_name = a.split(" ");
            A_name[1] = A_name[1].toUpperCase();
            let B_name = b.split(" ");
            B_name[1] = B_name[1].toUpperCase();
            if(A_name[1] < B_name[1])
            {
                return -1;
            }
            else if(A_name[1] > B_name[1]){
                return 1;
            }else{ return 0;}
        });
        return Array;
    }

    getStudentList(Students){ //wyswietl wszystkie info o studentach
        return this._sortByName(Students);
    }
    
    getStudentListForCourse(StudentObjects =[], year = "", CourseName = "") {
        var StudentListForCourse = []
        for(let i in StudentObjects)
        {
            for(let course in StudentObjects[i].courses[year]){
                if(course == CourseName)
                StudentListForCourse.push(StudentObjects[i].first_name + " " + StudentObjects[i].last_name);
            }
        }
        return this._sortByName_text(StudentListForCourse);
    }
   
    getAvarageForStudentInYear(StudentObject, year = ""){
        var studentsGradesInYear_lecture = [];
        var studentsGradesInYear_exercises = [];
        var studentsGradesInYear = [];
        var subject_names = StudentObject["courses"][year];
        for(let subject in subject_names ){
            
            //console.log( StudentObject["courses"][year][subject]["grades"]["exercices"]); oceny z cw z 2013
            studentsGradesInYear_lecture = StudentObject["courses"][year][subject]["grades"]["lecture"];
            studentsGradesInYear_exercises = StudentObject["courses"][year][subject]["grades"]["exercices"];
            studentsGradesInYear = studentsGradesInYear.concat(studentsGradesInYear_lecture).concat(studentsGradesInYear_exercises);
            //console.log(studentsGradesInYear.concat(studentsGradesInYear_lecture));
            //console.log(studentsGradesInYear.concat(studentsGradesInYear_exercises));
            //console.log(studentsGradesInYear.concat(studentsGradesInYear_lecture).concat(studentsGradesInYear_exercises));
        }
          return calculate_avarage(studentsGradesInYear);  

    }

    getAvarageForStudentAllYears(StudentObject)
    {
        var AvarageForStudentAllYears = [];
        for(let year in StudentObject["courses"]){
            AvarageForStudentAllYears =  AvarageForStudentAllYears.concat(this.getAvarageForStudentInYear(StudentObject, year));
            //console.log( StudentObject["courses"][year]);
        }
        return calculate_avarage(AvarageForStudentAllYears);
    }

    getAvarageForCourse(StudentObjects = [], year ="", CourseName ="")
    {
        var GradesFromCourse_lecture = [];
        var GradesFromCourse_exercises = [];
        var AvarageForCourse = [];
        for(let student in StudentObjects){
            GradesFromCourse_exercises = StudentObjects[student]["courses"][year][CourseName]["grades"]["exercices"];
            GradesFromCourse_lecture = StudentObjects[student]["courses"][year][CourseName]["grades"]["lecture"];
            AvarageForCourse = AvarageForCourse.concat(GradesFromCourse_exercises).concat(GradesFromCourse_lecture);
        }
        return calculate_avarage(AvarageForCourse);
    }
}



      var student_1 ={
        "first_name": "Jan",
        "last_name": "Kowalski",
        "birth_date": "29 AUG 1990",
        "year_of_study": "2",
        "courses": {
            "2013": {
                "AlgorithmsI": {
                    "grades": {
                        "exercices": [
                            2,
                            4
                        ],
                        "lecture": [
                            2,
                            5
                        ]
                    }
                },
                "BasicPhysicsI": {
                    "grades": {
                        "exercices": [
                            4
                        ],
                        "lecture": [
                            5
                        ]
                    }
                },
                "ProgrammingI": {
                    "grades": {
                        "exercices": [
                            4.5
                        ],
                        "lecture": [
                            2,
                            3.5
                        ]
                    }
                }
            },
            "2014": {
                "ProgrammingII": {
                    "grades": {
                        "exercices": [
                            5
                        ],
                        "lecture": [
                            5
                        ]
                    }
                },
                "BasicPhysicsII": {
                    "grades": {
                        "exercices": [
                            5
                        ],
                        "lecture": [
                            5
                        ]
                    }
                },
                "AlgorithmsII": {
                    "grades": {
                        "exercices": [
                            5
                        ],
                        "lecture": [
                            5
                        ]
                    }
                }
            }
        }
    }
    
   
     var student_2 ={
        "first_name": "Krzysztof",
        "last_name": "Nowak",
        "birth_date": "18 AUG 1993",
        "year_of_study": "3",
        "courses": {
            "2013": {
                "AlgorithmsI": {
                    "grades": {
                        "exercices": [
                            5,
                            3
                        ],
                        "lecture": [
                            4,
                            4
                        ]
                    }
                },
                "BasicPhysicsI": {
                    "grades": {
                        "exercices": [
                            5
                        ],
                        "lecture": [
                            5
                        ]
                    }
                },
                "ProgrammingI": {
                    "grades": {
                        "exercices": [
                            3.5
                        ],
                        "lecture": [
                            2,
                            4.5
                        ]
                    }
                }
            },
            "2014": {
                "ProgrammingII": {
                    "grades": {
                        "exercices": [
                            3
                        ],
                        "lecture": [
                            3
                        ]
                    }
                },
                "BasicPhysicsII": {
                    "grades": {
                        "exercices": [
                            3
                        ],
                        "lecture": [
                            4
                        ]
                    }
                },
                "AlgorithmsII": {
                    "grades": {
                        "exercices": [
                            4.5
                        ],
                        "lecture": [
                            3
                        ]
                    }
                }
            }
        }
    }

    var student_3 ={
        "first_name": "Robert",
        "last_name": "Bąk",
        "birth_date": "29 AUG 1994",
        "year_of_study": "2",
        "courses": {
            "2013": {
                "AlgorithmsI": {
                    "grades": {
                        "exercices": [
                            2,
                            5
                        ],
                        "lecture": [
                            2,
                            5
                        ]
                    }
                },
                "BasicPhysicsI": {
                    "grades": {
                        "exercices": [
                            3
                        ],
                        "lecture": [
                            4
                        ]
                    }
                },
                "ProgrammingI": {
                    "grades": {
                        "exercices": [
                            4.5
                        ],
                        "lecture": [
                            2,
                            3
                        ]
                    }
                }
            },
            "2014": {
                "ProgrammingII": {
                    "grades": {
                        "exercices": [
                            4
                        ],
                        "lecture": [
                            3
                        ]
                    }
                },
                "BasicPhysicsII": {
                    "grades": {
                        "exercices": [
                            3
                        ],
                        "lecture": [
                            3
                        ]
                    }
                },
                "AlgorithmsII": {
                    "grades": {
                        "exercices": [
                            4
                        ],
                        "lecture": [
                            5
                        ]
                    }
                }
            }
        }
    }

let objectH = new Helper();
var Students =[student_1, student_2, student_3];
var result_studentlist = objectH.getStudentList(Students);
//console.log(Students[1]["courses"]["2013"]["AlgorithmsI"]["grades"]["exercices"]);
//console.log(Students[1]["courses"]["2013"]);
//objectH.getAvarageForStudentAllYears(student_1);
//objectH.getAvarageForCourse(Students,"2013","AlgorithmsI");

function afterPageLoading() {
    showAllStudents();
    fill_select_with_data();
    showNameSurname();
    showStudentAvarage();
    showStudentAvarageAllYears();
    showCourseAvarage();
}

function showNameSurname(){
    document.getElementById("option_button").getElementsByTagName("li")[0].addEventListener("click", function(){
    var path_subject_select = document.getElementById('name_subject');
    var path_year_select = document.getElementById('year_value');
    var textStudents = "<h2>Lista Studentów Kursu " + path_subject_select.value + "</h2>";
    var ul=document.createElement('ul');
    var list_students_of_course = objectH.getStudentListForCourse(Students, path_year_select.value, path_subject_select.value);
    for(let i in list_students_of_course){
        var li=document.createElement('li')
        let name_surname = list_students_of_course[i];
        li.innerHTML += "Imię i nazwisko: " + name_surname;
        ul.appendChild(li);
    }
    
    document.getElementById("display").innerHTML = textStudents;
    document.getElementById("display").appendChild(ul);
    console.log(list_students_of_course);
});
}



function showAllStudents() {
    document.getElementById("all_students_button").addEventListener("click", function(){
        var textStudents = "<h2>Lista Studentów</h2>"
        var ul=document.createElement('ul');

        for(let i in result_studentlist){
            var li=document.createElement('li')
            let name_surname = result_studentlist[i].first_name +" "+ result_studentlist[i].last_name;
            li.innerHTML += "Imię i nazwisko: " + name_surname;
            ul.appendChild(li);
            var li=document.createElement('li')
            let birth_date = result_studentlist[i].birth_date;
            li.innerHTML += "Data urodzenia: " + birth_date;
            ul.appendChild(li);
            var li=document.createElement('li')
            let year_of_study = result_studentlist[i].year_of_study;
            li.innerHTML += "<b>Rok studiów: </b>" + year_of_study;
            ul.appendChild(li);
            
            var student_courses = result_studentlist[i].courses;
            
            for(let year in student_courses){
                //console.log(student_courses[year]);
                var li=document.createElement('li')
                let courses = student_courses[year];
                li.innerHTML += "Przedmioty w roku: " + year;
                ul.appendChild(li);
                var ul1 =document.createElement('ul');
                ul.appendChild(ul1);
                for(let course in courses){
                    //console.log(courses[course]);
                    var li = document.createElement('li');
                    li.innerHTML += "Przedmiot: " + course;
                    ul1.appendChild(li);
                    var ul2 = document.createElement('ul');
                    ul1.appendChild(ul2);
                    var li = document.createElement('li');
                    li.innerHTML += "Oceny z ćwiczeń: "+ courses[course]['grades']['exercices']
                    ul2.appendChild(li);
                    var li = document.createElement('li');
                    li.innerHTML += "Oceny z wykładu: "+ courses[course]['grades']['lecture']
                    ul2.appendChild(li);
                }
                
            }
        
        }
        document.getElementById("display").innerHTML = textStudents;
        document.getElementById("display").appendChild(ul);
    });
}

function showStudentAvarage(){
    document.getElementById("option_button").getElementsByTagName("li")[1].addEventListener("click", function(){
       
        var path_year_select = document.getElementById('year_value');
        var name_surname_select = document.getElementById('name_surname');
        var name_surname = name_surname_select.value.split(" ");
        var selected_student;
        for(let student in Students)
        {
            if(Students[student].last_name == name_surname[1])
            {
                selected_student = Students[student];
            }
            //console.log(student);
        }
        //console.log(selected_student);
        var textStudents = "<h2>Średnia studenta "+ name_surname_select.value + " w roku: " + path_year_select.value + " wynosi: ";
        var studentAvarage = objectH.getAvarageForStudentInYear(selected_student, path_year_select.value);
        document.getElementById("display").innerHTML = textStudents + Math.round(studentAvarage * 1000)/1000 + "</h2>";
    });
}

function showStudentAvarageAllYears(){
    document.getElementById("option_button").getElementsByTagName("li")[2].addEventListener("click", function(){
    var name_surname_select = document.getElementById('name_surname');
    var name_surname = name_surname_select.value.split(" ");
        var selected_student;
        for(let student in Students)
        {
            if(Students[student].last_name == name_surname[1])
            {
                selected_student = Students[student];
            }
            //console.log(student);
            
        }
        var textStudents = "<h2>Średnia studenta "+ name_surname_select.value + " z całych studiów to: " ;
        var studentAvarage = objectH.getAvarageForStudentAllYears(selected_student);
        document.getElementById("display").innerHTML = textStudents + Math.round(studentAvarage * 1000)/1000 + "</h2>";
        
    });
}

function showCourseAvarage(){
    document.getElementById("option_button").getElementsByTagName("li")[3].addEventListener("click", function(){
    var path_subject_select = document.getElementById('name_subject');
    var path_year_select = document.getElementById('year_value');
    
    var textStudents = "<h2>Średnia kursu "+ path_subject_select.value + " w roku " + path_year_select.value + " to ";
    var studentAvarage = objectH.getAvarageForCourse(Students, path_year_select.value, path_subject_select.value);
    document.getElementById("display").innerHTML = textStudents + Math.round(studentAvarage * 1000)/1000 + "</h2>";
        
    });

}


function fill_select_with_data(){
    getDataToSelect();
}

function getDataToSelect(){
    var path_name_select = document.getElementById('name_surname');
    var path_subject_select = document.getElementById('name_subject');
    var path_year_select = document.getElementById('year_value');
    var subject_set = new Set();
    var year_set = new Set();
    for(let i in result_studentlist)
    {
        let name_surname = result_studentlist[i].first_name +" "+ result_studentlist[i].last_name;
        let new_option = document.createElement('option');
        new_option.text = name_surname;
        path_name_select.add(new_option);
        var student_courses = result_studentlist[i].courses;
        for(let year in student_courses){
            //console.log(student_courses[year]); //kursy w danym roku 
            //dodaj do zbiory wszystkie daty
            year_set.add(year);
            let courses = student_courses[year];
            for(let course in courses){
                //console.log(courses[course]);
                subject_set.add(course);
            }
    }   }
for (let i of year_set){
    let new_option = document.createElement('option');
        new_option.text = i;
        path_year_select.add(new_option);
}
for (let i of subject_set){
    let new_option = document.createElement('option');
        new_option.text = i;
        path_subject_select.add(new_option);
}
}

function calculate_avarage(Grades=[])
{   
    sum_of_grades = 0;
    for(let i in Grades){
        sum_of_grades += Grades[i];
    }
    sum_of_grades /= Grades.length;
    return sum_of_grades;
}



/*document.getElementById("all_students_button").addEventListener("click", function getStudentList(Students){});
var randomNumber = randInt(10, 25);
      var target = document.getElementById('result');
      target.innerHTML = "<p>" + randomNumber + "</p>";*/