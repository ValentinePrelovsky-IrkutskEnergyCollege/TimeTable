var row = document.createElement('tr');
var table;
var headers;
var columns;

// -inputance

function initTable(tableName)
{
	createTable(width);
	setTableHeaders();
}

function createTable(width)
{
	table = setTableWithBorder(width);
}
function setTableHeaders()
{
	
}
//----------------------------------------------------------------------------------------------------------------
function putTable(tableName)
{
	// this function puts table into document
	document.append(
	"<table border = 1>" +
	"<caption>" + tableName +  "</caption>" +
	
	"<th> День недели</th>" +
	"<th> № пары </th>" +
	"<th> наименование </th>" +
	"<th> Преподаватель </th>" +
	"<th> Лекторий </th>" +
	"</table>");
}
function setTableWithBorder(width)
{
	var w = 0;
	w = width;
	var table = document.createElement('table');
	table.style.border = w + 'px solid black';
	document.body.append(table);
	return table;
}
function createMyTable()
{
	var table = setTableWithBorder(1);
}
function putTable2(tableName)
{
	/*
	var table = document.createElement('table');
	table.style.border = '1px solid black';
	document.body.append(table);
	*/
	var table = setTableWithBorder(1);
	
	var head1 = document.createElement('th');
	head1.append("LOL");
	
	// var row            = document.createElement('tr');
	
	putTableRow(table,head1,row,'Monday',1,'Math','We are',21);
}
function setTableLine(WeekDay,PairNumber,PairName,PairTeacher,PairRoom)
{
	// create fields
	var col_WeekDay     = document.createElement('td');
	var col_PairNumber  = document.createElement('td');
	var col_PairName    = document.createElement('td');
	var col_PairTeacher = document.createElement('td');
	var col_PairRoom    = document.createElement('td');
	
	// and fill them
	col_WeekDay.append(WeekDay);
	col_PairNumber.append(PairNumber);
	col_PairName.append(PairName);
	col_PairTeacher.append(PairTeacher);
	col_PairRoom.append(PairRoom);
	
	row.append(col_WeekDay);
	row.append(col_PairNumber);
	row.append(col_PairName);
	row.append(col_PairTeacher);
	row.append(col_PairRoom);
}
function putTableRow(table,head,row,WeekDay,PairNumber,PairName,PairTeacher,PairRoom)
{
	setTableLine('Monday',1,'Math',"me",21);	
	
	table.append(head);
	table.append(row);
	table.before(document.createElement('hr'));
}
	/*<!-- Понедельник -->
		<tr>
		//<!-- 1 пара -->
			<td> Поле выбора дня недели </td>
			<td> 1. </td>
			<td> Матан </td>
			<td> Чуклина О.С. </td>
			<td> 1к. - 408 каб. </td>
		</tr>

		<tr>
		//<!-- 2 пара -->
			<td> Поле выбора дня недели </td>
			<td> 2. </td>
			<td> Матан </td>
			<td> Чуклина О.С. </td>
			<td> 1к. - 408 каб. </td>
		</tr>

		<tr>
		//<!-- 3 пара -->
			<td> Поле выбора дня недели </td>
			<td> 3. </td>
			<td> Матан </td>
			<td> Чуклина О.С. </td>
			<td> 1к. - 408 каб. </td>
		</tr>
		
		<tr>
		//<!-- 4 пара -->
			<td> Поле выбора дня недели </td>
			<td> 4. </td>
			<td> Матан </td>
			<td> Чуклина О.С. </td>
			<td> 1к. - 408 каб. </td>
		</tr>

		<tr>
		//<!-- 5 пара -->
			<td> Поле выбора дня недели </td>
			<td> 5. </td>
			<td> Матан </td>
			<td> Чуклина О.С. </td>
			<td> 1к. - 408 каб. </td>
		</tr>
		
		<tr>
		//<!-- 6 пара -->
			<td> Поле выбора дня недели </td>
			<td> 6. </td>
			<td> Матан </td>
			<td> Чуклина О.С. </td>
			<td> 1к. - 408 каб. </td>
		</tr>
	//<!-- Конец понедельника -->

</table> ");}*/
