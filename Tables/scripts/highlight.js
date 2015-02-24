window.onload = function()
{
  var tbl = document.getElementById('mytable');
  setHighlight(tbl);
}

function setHighlight(table) 
{
  if (!table) return;
  var TDs = table.getElementsByTagName("td");
  for(var i = 0; i<TDs.length; i++) {
    TDs[i].onmouseover = rowColHighlight;
    TDs[i].onmouseout = rowColDelight;
  }
}

function rowColHighlight()
{
  highlighter(this, '#EEE');
}
function rowColDelight()
{
  highlighter(this, '');
}

function highlighter(cell, color)
{
  cell.parentNode.style.backgroundColor = color;
  var table = getTable(cell);
  var col = table.getElementsByTagName("col");
  col[cell.cellIndex].style.backgroundColor = color;
}

function getTable(obj)
{
  while (obj && obj.tagName.toLowerCase() != 'table')
  {
    obj = getTable(obj.parentNode);
  }
  return obj;
}