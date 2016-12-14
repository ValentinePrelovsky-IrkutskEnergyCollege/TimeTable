var table = document.createElement('table'); // set table object


function initTable()
{
	createTable(1);
	setTableHeaders("week day:","Pair number","name","teacher","room");
	
	setTableLine("Monday",1,"MATAN","my teacher","our room");
	document.body.append("<br>");
	setTextFieldByName("myName");
	
	// setTableLine("Monday",2,"MATAN","my teacher","our room");
}

function createTable(width)
{
	var w = 0;	w = width; // get number of width
	
	table.style.border = w + 'px solid black'; // apply border style
	document.body.append(table); // add table to a document
}
function setTableHeaders(weekDay,pairNumber,pairName,pairTeacher,pairRoom)
{
	// initialize headers according to the names
	var head_PairNumber  = document.createElement('th');;
	var head_PairName    = document.createElement('th');;
	var head_WeekDay     = document.createElement('th');;
	var head_PairTeacher = document.createElement('th');;
	var head_PairRoom    = document.createElement('th');;
	
	// filling them by arguments
	head_WeekDay.append(weekDay);
	head_PairNumber.append(pairNumber);
	head_PairName.append(pairName);
	head_PairTeacher.append(pairTeacher);
	head_PairRoom.append(pairRoom);
	
	// add our headers to a table
	table.append(head_WeekDay);
	table.append(head_PairNumber);
	table.append(head_PairName);
	table.append(head_PairTeacher);
	table.append(head_PairRoom);
}
function setTableLine(WeekDay,PairNumber,PairName,PairTeacher,PairRoom)
{
	// create row object to store one line in table
	var row = document.createElement('tr');
	
	// create fields
	var col_WeekDay     = document.createElement('td');
	var col_PairNumber  = document.createElement('td');
	var col_PairName    = document.createElement('td');
	var col_PairTeacher = document.createElement('td');
	var col_PairRoom    = document.createElement('td');
	
	// and fill them
	col_WeekDay.style.textAlign = "center";
	col_WeekDay.append(WeekDay);
	
	col_PairNumber.style.textAlign = "center";
	col_PairNumber.append(PairNumber);
	
	col_PairName.style.textAlign = "center";
	col_PairName.append(PairName);
	
	col_PairTeacher.style.textAlign = "center";
	col_PairTeacher.append(PairTeacher);
	
	col_PairRoom.style.textAlign = "center";
	col_PairRoom.append(PairRoom);
	
	row.append(col_WeekDay);
	row.append(col_PairNumber);
	row.append(col_PairName);
	row.append(col_PairTeacher);
	row.append(col_PairRoom);
	
	// update table object
	table.append(row);
	// table.before(document.createElement('hr'));
}

function setTextFieldByName(yourName)
{
	var res = document.createElement('input');
	res.type="text";
	res.append("a')");
	
	return res;
}