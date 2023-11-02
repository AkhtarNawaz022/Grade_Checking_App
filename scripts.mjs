document.getElementById('gradeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const percentInput = parseFloat(document.getElementById('percentInput').value);

    var gradeResult = 'Grade: ';

    if (percentInput >= 80)
      gradeResult += 'A+';
    else if (percentInput >= 70)
      gradeResult += 'A';
    else if (percentInput >= 60)
      gradeResult += 'B';
    else if (percentInput >= 50)
      gradeResult += 'C';
    else
      gradeResult += 'F';

    document.getElementById('gradeResult').textContent = gradeResult;
  });