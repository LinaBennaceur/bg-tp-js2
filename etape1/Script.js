function doInsertRowTable(num , nom ,prenom , points)
{
    const tbody = document.getElementById("table body") ;
    const tr = document.createElement("tr");
    const td_num = document.createElement("td");
     td_num.setAtribute("class" , "col_number ") ;
     td_num.innerText = num ;
    const td_select = document.createElement("td") ;
    td_select.seiAttribute("class" , "col_chkbox") ;
    const chackbox =document.createElement("input") ;
    checkbox.setAttribute("type" , "checkbox" ) ;
    td_select.appendChild(checkbox);
    

    tr.appendChild(td_num);
    tr.appendChild(td_nom);
    tr.appendChild(td_prnom);
    tr.appendChild(td_points);
    tr.appendChild(td_select);
      

    tbody.appendChild(tr);
    
}